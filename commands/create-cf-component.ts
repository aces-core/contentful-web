#!/usr/bin/env tsx

import { mkdirSync, writeFileSync, existsSync, readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Get the component name from CLI args
const componentName = process.argv[2];

if (!componentName) {
  console.error("❌  Please provide a component name.");
  console.error("💡 Usage: npm run create-cf-component <component-name>");
  process.exit(1);
}

// Helper function to convert kebab-case to PascalCase
const toPascalCase = (str: string) => {
  return str
    .replace(/(^[a-z])|([-_][a-z])/g, (match) => match.toUpperCase())
    .replace(/[-_]/g, "");
};

const toCamelCase = (str: string) => {
  return str
    .replace(/([-_][a-z])/g, (match) =>
      match.toUpperCase().replace("-", "").replace("_", ""),
    )
    .replace(/^[A-Z]/, (match) => match.toLowerCase());
};

// Convert component name to PascalCase for React casing
const reactCasedName = toPascalCase(componentName);
const camelCasedName = toCamelCase(componentName);

// Define paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cfDir = join(__dirname, "..", "src", "libs", "cf", "lib");
const componentDir = join(cfDir, `cf-${componentName}`);
const indexFilePath = join(cfDir, "../index.ts");

// Check if component already exists
if (existsSync(componentDir)) {
  console.error(`⚠️  Component "cf-${componentName}" already exists.`);
  console.error("🚨  Aborting to prevent overwriting.");
  process.exit(1);
}

// Define boilerplate content
const files: Record<string, string> = {
  "index.tsx": `import type { CfFetchById } from "@maverick/types";

import { Cf${reactCasedName} } from "./render";
import { fetch${reactCasedName}Data } from "./services";
import { ${reactCasedName}Skeleton } from "./skeleton";

export interface Cf${reactCasedName}ServerProps extends CfFetchById {}

export const Cf${reactCasedName}Server = async ({
  id,
  preview,
  lang,
}: Cf${reactCasedName}ServerProps) => {
  let data;

  try {
    data = await fetch${reactCasedName}Data(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <${reactCasedName}Skeleton />;
  }

  if (!data) {
    return <${reactCasedName}Skeleton />;
  }

  return (
    <Cf${reactCasedName}
      internalTitle={data.internalTitle}
      //TODO: Add more props here
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
  `,

  "render.tsx": `import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfBaseComponent,
} from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing } from "@maverick/theme";
import { Box, Container, H1 } from "@maverick/ui";

export interface Cf${reactCasedName}Props extends CfBaseComponent {}

export const Cf${reactCasedName} = ({
  internalTitle,
  //TODO: Add more props here
  __typename,
  id,
  lang,
}: Cf${reactCasedName}Props) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.xs, md: componentSpacing.md }}
    >
      <Container>
        <H1>This is my ${reactCasedName}</H1>
      </Container>
    </Box>
  );
};
  `,

  "services.tsx": `import { gql } from "@apollo/client";

import { defaultLocale } from "@maverick/i18n";
import { cfClient, cfPreviewClient } from "@maverick/contentful";

export const ${reactCasedName}Query = gql\`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    ${camelCasedName}(id: $id, preview: $preview, locale: $locale) {
      # TODO: Define your NewComponent GraphQL query here
      sys {
        id
      }
    }
  }
\`;

export const fetch${reactCasedName}Data = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: ${reactCasedName}Query,
      variables: { id, preview, locale },
    });

    return response.data.${camelCasedName};
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
  `,

  "skeleton.tsx": `import { Skeleton } from "@maverick/ui";

export const ${reactCasedName}Skeleton = () => {
  return <Skeleton width={"100%"} height={280} />;
};
  `,
};

// Create the directory
mkdirSync(componentDir, { recursive: true });

// Create files
Object.entries(files).forEach(([fileName, content]) => {
  const filePath = join(componentDir, fileName);
  writeFileSync(filePath, content);
  console.log(`✅ Created ${filePath}`);
});

// Update index.ts exports
const exportLines = `\nexport * from "./lib/cf-${componentName}";\nexport * from "./lib/cf-${componentName}/render";\nexport * from "./lib/cf-${componentName}/services";\nexport * from "./lib/cf-${componentName}/skeleton";\n`;

// Ensure index.ts exists
if (!existsSync(indexFilePath)) {
  writeFileSync(indexFilePath, exportLines);
} else {
  const indexContent = readFileSync(indexFilePath, "utf8");

  // Avoid duplicate entries
  if (!indexContent.includes(`./lib/cf-${componentName}`)) {
    writeFileSync(indexFilePath, indexContent + exportLines);
    console.log(`✅ Updated index.ts with cf-${componentName} exports.`);
  } else {
    console.log(
      `ℹ️ index.ts already contains exports for cf-${componentName}.`,
    );
  }
}

console.log(`🎉 Component ${componentName} scaffold created successfully!`);
