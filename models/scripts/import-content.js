require("dotenv").config();
const { execSync } = require("child_process");

const newSpaceId = process.env.NEXT_PUBLIC_CF_SPACE;
const managementToken = process.env.NEXT_CF_MANAGEMENT_TOKEN;

if (!newSpaceId || !managementToken) {
  console.error(
    "Please set CONTENTFUL_NEW_SPACE_ID and CONTENTFUL_MANAGEMENT_TOKEN environment variables.",
  );
  process.exit(1);
}

const importFile = "./models/json/content-export.json";
const command = `contentful space import --space-id ${newSpaceId} --management-token ${managementToken} --content-file ${importFile}`;

execSync(command, { stdio: "inherit" });
