import { expect } from 'chai';
import {
  parseRequiredProperties
} from './requiredFields.js';

describe('Required Fields', () => {
  const argv = {
    email: 'oshalygin@gmail.com',
    registry: 'http://www.npmjs.org/npm',
    'secure-token': 'some-secure-api-key'
  };


  it('if argv is null, the default is an object with all three properties as false', () => {
    const expected = {
      email: false,
      registry: false,
      secureToken: false
    };

    const emptyArgv = {};
    const actual = parseRequiredProperties(emptyArgv);
    expect(actual).deep.equals(expected);
  });

  it('if all of the properties are set, everything is returned as true', () => {
    const expected = {
      email: true,
      registry: true,
      secureToken: true
    };

    const actual = parseRequiredProperties(argv);
    expect(actual).deep.equals(expected);
  });

});
