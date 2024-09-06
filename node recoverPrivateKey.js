const keythereum = require('keythereum');

const keystore = {
  "address": "dcc703c0e500b653ca82273b7bfad8045d85a470",
  "crypto": {
    "cipher": "aes-128-ctr",
    "cipherparams": { "iv": "4374422b5ddccc31ff8d64228678300d" },
    "ciphertext": "15d47b1b16a6c1d8396fd193359e1e9929881198f22f3175a7d8ec56cd8d3f86",
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "b1cec254d3ebf2f9f3fb4f35fe7b64851597abcce75b0306f42d929ce7b0d159"
    },
    "mac": "0ef3b6d08f9b67cac396e07eb4836ec596225053f39e5c09032e3c60d944e573"
  },
  "id": "472bda8c-f488-4e6f-9372-8342d2628042",
  "version": 3
};

const password = 'your_password_here';

keythereum.recover(password, keystore, function (privateKey) {
  console.log('Private Key:', privateKey.toString('hex'));
});
