/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-process-env */
import { writeFileSync } from 'fs';


const apikey = process.env.NPM_REGISTRY_API_KEY;
const authEmail = process.env.NPM_REGISTRY_EMAIL;
const registry = process.env.NPM_REGISTRY;
const outputPath = process.argv[2]; // The first argument(after nodelib and the file) is the path where the .npmrc file will be located
const nextLine = '\n';

console.log('Creating a temporary .npmrc file which will be used to authenticate');

const npmConfigurationFile = outputPath
  ? `${outputPath}/.npmrc`
  : './.npmrc';

const fileContent = (`_auth=${apikey}${nextLine}always-auth=true${nextLine}email=${authEmail}${nextLine}registry=${registry}`);

writeFileSync(npmConfigurationFile, fileContent);
console.log('Successfully updated the local .npmrc file');
