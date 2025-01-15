require("dotenv").config();
const { execSync } = require("child_process");

const spaceId = process.env.NEXT_PUBLIC_CF_SPACE;
const managementToken = process.env.NEXT_CF_MANAGEMENT_TOKEN;

if (!spaceId || !managementToken) {
  console.error(
    "Please set CONTENTFUL_SPACE_ID and CONTENTFUL_MANAGEMENT_TOKEN environment variables.",
  );
  process.exit(1);
}

const exportDir = "./models/json";
const exportFile = "models-export.json";
const command = `contentful space export --content-model-only --space-id ${spaceId} --management-token ${managementToken} --export-dir ${exportDir} --content-file ${exportFile}`;

execSync(command, { stdio: "inherit" });
