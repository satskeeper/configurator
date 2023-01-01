/**
 * @jest-environment jsdom
 */

const CryptoJS = require('./cryptojs.js');

// eslint-disable-next-line
test('test encrypting and then decrypting the same data with the same pw twice generates to the same result', () => {
  const plain = 'randomdata1234';
  const pwd = 'secretPassword1234';
  const x1 = CryptoJS.AES.encrypt(plain, pwd).toString();
  const x2 = CryptoJS.AES.encrypt(plain, pwd).toString();
  const x1d = CryptoJS.AES.decrypt(x1, pwd).toString(CryptoJS.enc.Utf8);
  const x2d = CryptoJS.AES.decrypt(x2, pwd).toString(CryptoJS.enc.Utf8);
  expect(x1d).toBe(plain);
  expect(x1d).toBe(x2d);
});

// eslint-disable-next-line
test('test encrypting the same data with the same pw twice generates different encrypted data', () => {
  const plain = 'randomdata1234';
  const pwd = 'secretPassword1234';
  const x1 = CryptoJS.AES.encrypt(plain, pwd).toString();
  const x2 = CryptoJS.AES.encrypt(plain, pwd).toString();
  expect(x1).not.toBe(x2);
});
