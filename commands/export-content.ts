#!/usr/bin/env ts-node

import * as dotenv from "dotenv";
import { execSync } from "child_process";

// Load environment variables from .env
dotenv.config();

const spaceId = process.env.NEXT_PUBLIC_CF_SPACE;
const managementToken = process.env.NEXT_CF_CMA_TOKEN;

if (!spaceId || !managementToken) {
  console.error(
    "❌  Please set NEXT_PUBLIC_CF_SPACE and NEXT_CF_CMA_TOKEN environment variables.",
  );
  process.exit(1);
}

const exportDir = "./commands/json";
const exportFile = "content-export.json";
const command = `contentful space export --space-id ${spaceId} --management-token ${managementToken} --export-dir ${exportDir} --content-file ${exportFile} --download-assets --content-only`;

try {
  execSync(command, { stdio: "inherit" });
  console.log("🎉 Contentful space export completed successfully!");
} catch (error) {
  console.error("❌ Error during Contentful space export:", error);
  process.exit(1);
}
