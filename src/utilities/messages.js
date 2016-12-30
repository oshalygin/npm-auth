//default messages will be displayed here for the CLI.

/* eslint-disable no-console */
/* eslint-disable max-len */
import { chalkError, chalkSuccess } from './chalkConfiguration';

export const availableArguments = () => {
  console.error('arguments:');
  console.error('   repository      (required): the registry repository, eg: npmjs.org');
  console.error('   email           (required): your email address associated to this repositroy, format: you@email.com');
  console.error('   secure-token    (required): your api key  which is used to authenticate');
  console.error('   file-path       (optional): specify the location to output the configuration file');
  console.error('   print           prints the local configuration file');
};

export const invalidEmailFormat = () => {
  console.error(chalkError('Invalid Email Format:'));
  console.error('The format passed into the email property is invalid, example: you@email.com');
};

export const invalidFilePath = () => {
  console.error(chalkError('Invalid File Path:'));
  console.error('The path you specified does not exist.  This utility does not create paths.');
};

export const invalidRepository = () => {
  console.error(chalkError('Invalid Repository:'));
  console.error('The repository you specified returned a 404');
};
