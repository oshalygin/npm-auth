//default messages will be displayed here for the CLI.

/* eslint-disable no-console */
/* eslint-disable max-len */
import { chalkError, chalkSuccess } from './chalkConfiguration';

export const availableArguments = () => {
  console.info('arguments:');
  console.info('   registry      (required): the registry repository, eg: npmjs.org');
  console.info('   email           (required): your email address associated to this repositroy, format: you@email.com');
  console.info('   secure-token    (required): your api key  which is used to authenticate');
  console.info('   file-path       (optional): specify the location to output the configuration file');
  console.info('   print           prints the local configuration file');
};

export const invalidEmailFormat = () => {
  console.error(chalkError('Invalid Email Format:'));
  console.error('The format passed into the email property is invalid, example: you@email.com');
};

export const invalidFilePath = () => {
  console.error(chalkError('Invalid File Path:'));
  console.error('The path you specified does not exist.  This utility does not create paths.');
};

export const invalidRegistry = () => {
  console.error(chalkError('Invalid Registry:'));
  console.error('The registry  you specified returned a 404');
};

export const successMessage = () => {
  console.log(chalkSuccess('Successfully updated the local .npmrc file'));
};
