//default messages will be displayed here for the CLI.

/* eslint-disable no-console */
/* eslint-disable max-len */
import { chalkError, chalkSuccess } from './chalkConfiguration';

export const availableArguments = () => {
  console.error('arguments:');
  console.error('   type            (required): specify the kubernetes configuration type(rc, replication-controller, secret)');
  console.error('   image           specify the image name');
  console.error('   secure-token    specify the base64 encoded docker configuration');
  console.error('   file-path       (required): specify the location of the configuration file');
  console.error('   get-rc-name     Return the current Replication Controller Name');
};

export const configurationTypes = () => {
  console.error('available types:');
  console.error('   rc                      Replication Controller');
  console.error('   deployment              Deployment');
  console.error('   replication-controller  Replication Controller, same as rc');
  console.error('   secret                  Secret');
};

