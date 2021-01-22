import countries from '../constants/countries';
import cats from './mockCats';
import {getCoordinates} from '../helpers/main';
import errors from '../constants/errors';
import correct from './mockedRightResult';

const codesMocked = ['abys', 'aege', 'abob', 'acur', 'asho', 'awir', 'amau', 'amis', 'bali', 'bamb', 'beng', 'birm'];

// Example of right use
// console.log(getCoordinates(codesMocked[0], cats, countries, errors));

test('To be wrong code', () => {
  expect(getCoordinates('another code', cats, countries)).toMatchObject({
    error: true,
    msj: errors.wrongCode,
  });
});

test('To be not String', () => {
  expect(getCoordinates(1990, cats, countries)).toMatchObject({
    error: true,
    msj: errors.notString,
  });
});

test('To be Missing param', () => {
  expect(getCoordinates(cats, countries)).toMatchObject({
    error: true,
    msj: errors.missingParam,
  });
});

test('To be right', () => {
  expect(getCoordinates(codesMocked[0], cats, countries)).toMatchObject(
    correct,
  );
});
