/**
 * @jest-environment jsdom
 */

const CryptoJS = require('./cryptojs.js');

function encryptedSamplePlan() {
  return {
    "start": {
        "planID": "9cae7bca-ca90-44e8-a8e1-9198ae2a1a37",
        "version": "1.0"
    },
    "exchanges": [
        {
            "exchangeID": "1c58bcac-6b72-4392-a765-a66aa97cd7b7",
            "alias": "U2FsdGVkX18G8KK9Nloez9uSLphB+vZzJqeYUF/1hIg=",
            "comment": "U2FsdGVkX1+WwwKiUIsVd++gueTepJ8gcm43N2AdZtOE8B56RLtg6CDHjZDfrjM5nTKvuoiEHt7ghX2WTv1/ow==",
            "materials": [
                {
                    "materialID": "25738290-fe8e-49dc-8864-34ccf4366f54",
                    "material_type": "U2FsdGVkX1+K334QweZGTdDq5QTQ/DImEL0KQG7tvzQ=",
                    "location": "U2FsdGVkX1/a8i0GAwJPS2NGN3t1PQJZoJd0ixa6i0tFlEPySWFbEBJQCUZhXD3D",
                    "comment": ""
                },
                {
                    "materialID": "1546778d-e354-4cb5-9e3f-d554b85a8d76",
                    "material_type": "U2FsdGVkX193W7bYlDNqojumFFR3ENB0dnOh1soajJ0=",
                    "location": "U2FsdGVkX194VcWRpB1ClllzRvtPpr7IxbuduX0U3j/itppXBSMaIKf8FnQDoYhO",
                    "comment": ""
                }
            ]
        }
    ],
    "wallets": [
        {
            "walletID": "170d00da-949d-4171-b64b-db25c3a8b58e",
            "alias": "U2FsdGVkX19gyO5OGcRhAOMfDuwV9QoiaLrCI1juF5w=",
            "comment": "",
            "materials": [
                {
                    "materialID": "94377270-b99f-42e9-a2f7-6c808d5c9ddd",
                    "material_type": "U2FsdGVkX18lhmD1Jb4wbJG5V3Gh3FghXRHLhOwajVzoOfeZ9vLZebW3bNFpxOLk",
                    "location": "U2FsdGVkX19iCz+MEXzGdDestLi6bHaBg3i+gW/RaAixr8njfW7wt0K/9YaP1XYm",
                    "comment": ""
                },
                {
                    "materialID": "3a33b259-ecc9-42a6-9470-46108f7811ce",
                    "material_type": "U2FsdGVkX1/6YZMt955iqNBU8ZcGYd2Cxy057BBPjsgdYxrlJlaYobUEpUyFqpSV",
                    "location": "U2FsdGVkX197S7MDwZC74Zc5Bzg7WzJhroktDJ1+Buh5if3t8tq6wSU93JyTP6Jr",
                    "comment": ""
                }
            ]
        }
    ],
    "devices": [
        {
            "deviceID": "fb17e271-27a9-4d2a-b2fe-a828b7b0627b",
            "alias": "U2FsdGVkX1+UG+UdyO7IeHQDuNl3xqAMbSTrm3VthZg=",
            "location": "U2FsdGVkX19xVrBS/YRbb4/r6Ll/uUJm4jpq4bSdQ1Am6m9xCzckuLgw9MVjzXWDfz7CosuxGcyE/AqkDokZeQ==",
            "comment": "",
            "selected_wallets": [
                "U2FsdGVkX19Ra94a9Nmo9ZeYzgRgdqEo4EnoId9/LQA="
            ],
            "materials": [
                {
                    "materialID": "213635c3-7ed4-48b4-bdc4-0fea60e924bd",
                    "material_type": "U2FsdGVkX1+Kv5rQk3EtwH3cMP0PwSfSBXlUmqa02mM=",
                    "location": "U2FsdGVkX189y2Roq75xWXcBwdghD4DvkMFDsqT45hA9CyJS12U6k/leb0FCQQmr",
                    "comment": ""
                }
            ]
        }
    ],
    "heirs": [
        {
            "heirID": "f2ef6b81-480a-4d15-849a-c4e54dc8896e",
            "first": "Marie",
            "last": "Meier",
            "share": "U2FsdGVkX1/Wupi0ttL1Zu8Q5EHlSkku+JM6mKcd+bw=",
            "location": "U2FsdGVkX18gt+otrjLB78TEBaV5DsaKYRx5EAuvz0jXB8Qc4xHUcI3hB9cubuLA",
            "birthday": "U2FsdGVkX19CxE1GsHm8fmPKq++N4NU0WsQXehs8I5s=",
            "relationship": "U2FsdGVkX19UEwFi5OZR9HhmRlI0d2KsUAG9LOIV7/w=",
            "comment": ""
        },
        {
            "heirID": "d2be65b0-aea4-4ffb-b49d-ee8b64c42773",
            "first": "Karl",
            "last": "Meier",
            "share": "U2FsdGVkX1/aXTnhB30Q1MvpuVJwhmhAReg3CzMPOi8=",
            "location": "U2FsdGVkX1/f93zjxT5vqlGWCVOkH1AhTjvmfohmbUccRjTmCHunb5oSm/jiaDBk",
            "birthday": "U2FsdGVkX185ztvQthiY/o0p0rWPEJxbSXXd82mQPvI=",
            "relationship": "U2FsdGVkX1+qmai1uUn3jBAA2quitsKMMCtDZdcsoxo=",
            "comment": ""
        }
    ],
    "details": {
        "date": "2023-01-02",
        "comment": ""
    },
    "encrypted_hash": "e3b25d5a24dbdbbe8353b8d89d944925fef86707f3994008a407a1de3b4dbe55"
  }
}

function serialize(object) {
  if (Array.isArray(object)) {
    return JSON.stringify(object.map((i) => serialize(i)));
  }
  else if (typeof object === 'object' && object !== null) {
    return Object.keys(object)
      .sort()
      .map((key) => `${key}:${serialize(object[key])}`)
      .join('|');
  }
  return object;
}

function calculatePlanHash(plan) {
  delete plan['encrypted_hash'];
  const serialised = serialize(plan);
  return CryptoJS.SHA256(serialised).toString();
}

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

test('test encrypted hash matches', () => {
  const encryptedHash = calculatePlanHash(encryptedSamplePlan());
  expect(encryptedHash).toBe(encryptedSamplePlan()["encrypted_hash"]);
});
