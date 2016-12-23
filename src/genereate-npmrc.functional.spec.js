/* eslint-disable max-len */
/* eslint-disable no-process-env */
/* eslint-disable dot-notation */
import { expect } from 'chai';
import fs from 'fs';

const exec = require('child_process').exec;

describe('Generating .npmrc Integration Tests', () => {

  const sut = 'node ./dist/generate-npmrc.js';

  it('should create a local .npmrc file and set the environment variables', (done) => {
    process.env['NPM_REGISTRY_API_KEY'] = 'abcd-some-key';
    process.env['NPM_REGISTRY_EMAIL'] = 'atom.headless@sadasystems.com';
    process.env['NPM_REGISTRY'] = 'https://sadasystems.jfrog.io/sadasystems/api/npm/atom-npm';

    const expected = 'Creating a temporary .npmrc file which will be used to authenticate\nSuccessfully updated the local .npmrc file\n';

    exec(sut,
      (error, stdout) => {
        const actual = stdout;
        expect(actual).equals(expected);

        fs.unlinkSync('.npmrc');
        done();
      });

  });

  it('should create a local .npmrc file and contain the api key that was set', (done) => {
    process.env['NPM_REGISTRY_API_KEY'] = 'abcd-some-key';
    process.env['NPM_REGISTRY_EMAIL'] = 'atom.headless@sadasystems.com';
    process.env['NPM_REGISTRY'] = 'https://sadasystems.jfrog.io/sadasystems/api/npm/atom-npm';

    const expected = `_auth=${process.env['NPM_REGISTRY_API_KEY']}`;
    const authApiKeyIndex = 0;
    exec(sut,
      () => {
        const npmrc = fs.readFileSync('.npmrc', 'utf8').split('\n');
        const actual = npmrc[authApiKeyIndex];

        expect(actual).equals(expected);

        fs.unlinkSync('.npmrc');
        done();
      });
  });

  it('should create a local .npmrc file and contain the email key that was set', (done) => {
    process.env['NPM_REGISTRY_API_KEY'] = 'abcd-some-key';
    process.env['NPM_REGISTRY_EMAIL'] = 'atom.headless@sadasystems.com';
    process.env['NPM_REGISTRY'] = 'https://sadasystems.jfrog.io/sadasystems/api/npm/atom-npm';

    const expected = `email=${process.env['NPM_REGISTRY_EMAIL']}`;
    const emailIndex = 2;
    exec(sut,
      () => {
        const npmrc = fs.readFileSync('.npmrc', 'utf8').split('\n');
        const actual = npmrc[emailIndex];

        expect(actual).equals(expected);

        fs.unlinkSync('.npmrc');
        done();
      });
  });

  it('should create a local .npmrc file and contain the registry endpoint that was set', (done) => {
    process.env['NPM_REGISTRY_API_KEY'] = 'abcd-some-key';
    process.env['NPM_REGISTRY_EMAIL'] = 'atom.headless@sadasystems.com';
    process.env['NPM_REGISTRY'] = 'https://sadasystems.jfrog.io/sadasystems/api/npm/atom-npm';

    const expected = `registry=${process.env['NPM_REGISTRY']}`;
    const registryIndex = 3;
    exec(sut,
      () => {
        const npmrc = fs.readFileSync('.npmrc', 'utf8').split('\n');
        const actual = npmrc[registryIndex];

        expect(actual).equals(expected);
        done();
      });
  });

  it('should create a .npmrc file in the src folder and contain the registry endpoint that was set', (done) => {
    process.env['NPM_REGISTRY_API_KEY'] = 'abcd-some-key';
    process.env['NPM_REGISTRY_EMAIL'] = 'atom.headless@sadasystems.com';
    process.env['NPM_REGISTRY'] = 'https://sadasystems.jfrog.io/sadasystems/api/npm/atom-npm';

    const expected = `registry=${process.env['NPM_REGISTRY']}`;
    const registryIndex = 3;
    exec(`${sut} ./src`,
      () => {
        const npmrc = fs.readFileSync('src/.npmrc', 'utf8').split('\n');
        const actual = npmrc[registryIndex];

        expect(actual).equals(expected);

        fs.unlinkSync('src/.npmrc');
        done();
      });
  });

});
