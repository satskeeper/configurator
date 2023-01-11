/**
 * @jest-environment jsdom
 */

const CryptoJS = require('./cryptojs.js');

function encryptedSamplePlan() {
  return {
    "start": {
        "planID": "44de08b3-c379-4736-a34f-e61be7613091",
        "version": "1.0"
    },
    "exchanges": [
        {
            "exchangeID": "1c58bcac-6b72-4392-a765-a66aa97cd7b7",
            "alias": "U2FsdGVkX18vExIJoWBJT692be9w6muIbOMF0V1Eloc=",
            "comment": "U2FsdGVkX1/MDiWPrdl08hOXdeh1GfeQn+pSLy0jQbSKAgbrSxrXyYLyNw28qWEJTLyxqKfHrTqX7mTq1CTk9g==",
            "materials": [
                {
                    "materialID": "25738290-fe8e-49dc-8864-34ccf4366f54",
                    "material_type": "U2FsdGVkX19HewVatnfQixb7h90WBajiF07+NvFG86Y=",
                    "location": "U2FsdGVkX1+66PvgYYtUup4E5wv8vrPDXA7vPT8ivmBSfa8fv4to4BjLv5ziZKCA",
                    "comment": ""
                },
                {
                    "materialID": "1546778d-e354-4cb5-9e3f-d554b85a8d76",
                    "material_type": "U2FsdGVkX18/lwKuILFFfzKARg8CSyfN+RY1SQZDHK4=",
                    "location": "U2FsdGVkX1/WXMYGeA4NPdvDO5KUXH0wD6JlBD5jlqLlxHNOVfj6Et1zSPvmOfJT",
                    "comment": ""
                }
            ]
        }
    ],
    "wallets": [
        {
            "walletID": "170d00da-949d-4171-b64b-db25c3a8b58e",
            "alias": "U2FsdGVkX19WGzjR+oivOtIg/xb3+Lz6dZYImvT5qK4=",
            "comment": "",
            "materials": [
                {
                    "materialID": "94377270-b99f-42e9-a2f7-6c808d5c9ddd",
                    "material_type": "U2FsdGVkX1/9Sxmtx0Oglc19tOG/WCOPHD4RL1FT49lqxH8LTKGwrL29yR9Hb5jg",
                    "location": "U2FsdGVkX18ni80JhgGs2AM7EqFpK3SA9sK8Rm4F0lPAZeQYBK16Sho5XVXq0Mg5",
                    "comment": ""
                },
                {
                    "materialID": "3a33b259-ecc9-42a6-9470-46108f7811ce",
                    "material_type": "U2FsdGVkX1+0WvpfEYrhELaBHL7wa8zQgWF+PxAV5+QbhO9pXkJ5FjuuQcTEx3i6",
                    "location": "U2FsdGVkX1+joLB7mzKUjqXQEGgSpTTIpn3NE5qWQQAt45qY6xG1WdokLs+/5lFb",
                    "comment": ""
                }
            ]
        }
    ],
    "devices": [
        {
            "deviceID": "fb17e271-27a9-4d2a-b2fe-a828b7b0627b",
            "alias": "U2FsdGVkX1/e6Ahu6NDff1SBsWN631hoVF81RaYzHsI=",
            "location": "U2FsdGVkX1/qTCBpWJ589glvcRvoGM4qodIdRYd4jzOV7RHEC8oVAHry3Remb4dhIXltBDFEomnlTdo8zPy6EA==",
            "comment": "",
            "selected_wallets": [
                "U2FsdGVkX18o2YISpsRrHi6OuUibtyMiXn/RtkBrzGM="
            ],
            "materials": [
                {
                    "materialID": "213635c3-7ed4-48b4-bdc4-0fea60e924bd",
                    "material_type": "U2FsdGVkX18IjH5ZBpx4fJzics4uUI7AIRMBj6whD2k=",
                    "location": "U2FsdGVkX1+IJ1wosNyFqRVERcbf15aq8yqDJ28ylGHRgfx1o7gp5uguBW1OU7yq",
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
            "share": "U2FsdGVkX1+7xtm0y+zAah1/NnazTRX7p7o1NCvCdqc=",
            "location": "U2FsdGVkX1/YDfA15EG28VXmoZasptijAarUdrSYsfJ4ITLF0TaQBnpMOKYOAoab",
            "birthday": "U2FsdGVkX1/q10hWGronXwdhQFSdWyPL82gmOoYuyMY=",
            "relationship": "U2FsdGVkX1+/2wNC4eLMcUpRhyD/5LQaWZWkFfReZj4=",
            "comment": ""
        },
        {
            "heirID": "d2be65b0-aea4-4ffb-b49d-ee8b64c42773",
            "first": "Karl",
            "last": "Meier",
            "share": "U2FsdGVkX18Xo/ooNpUFJTlTTiD3d0+/ghB9vmkXDwQ=",
            "location": "U2FsdGVkX1/dhCARYhTG0j3auIWVRz38yb/ud1ZsNBJ4ZpggzVoumDUyfG1BOZYM",
            "birthday": "U2FsdGVkX1/DzOU9Fbx4eUWltwP03FgMDRgmsV7CeF8=",
            "relationship": "U2FsdGVkX192wdHI7MRWXJOM0zZoTAClHtiKrujS2ag=",
            "comment": ""
        }
    ],
    "details": {
        "date": "2023-01-02",
        "comment": ""
    },
    "checksums": {
        "total": "e68ee2f7325f84c21f3abff3bece947376bb3c0214330575e577a4b2295e8ebe",
        "start": "5b697782fc027ec9102377529e675568628ad2bd117d0decad07eec7446ec954",
        "exchanges": "18853b6c65f3a84b20e04c91c219a6c12b57c57d893d2dcf8d6dc0a53dc45bac",
        "wallets": "26ed08e029cd68a9366a93bd977509910348b100b5a13f24746b8e047f2aa61a",
        "devices": "8c30912744d4f4ddc8754a3cd024d36a506d5366c375a031bc35c69c27a9efe0",
        "heirs": "a1845c173e19f26d69cf1f54968b8bcc069b822fb4145f22a982d32906a8b025",
        "details": "7a896fe0c98991d6d5355c0253306aba435613eda1451b158b3a722dad416e91"
    }
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

function calculateChecksums(obj) {
  delete obj['checksums'];
  const checksums = {
    "total": calculateChecksum(obj)
  }
  Object.keys(obj).forEach((key, _) => {
    checksums[key] = calculateChecksum(obj[key]);
  });
  return checksums;
}

function calculateChecksum(plan) {
  const serialised = serialize(plan);
  // eslint-disable-next-line new-cap
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

test('test checksums matches', () => {
  const checksums = calculateChecksums(encryptedSamplePlan());
  expect(checksums["total"]).toBe(encryptedSamplePlan()["checksums"]["total"]);
  expect(checksums["heirs"]).toBe(encryptedSamplePlan()["checksums"]["heirs"]);
  expect(checksums["wallets"]).toBe(encryptedSamplePlan()["checksums"]["wallets"]);
  expect(checksums["devices"]).toBe(encryptedSamplePlan()["checksums"]["devices"]);
  expect(checksums["exchanges"]).toBe(encryptedSamplePlan()["checksums"]["exchanges"]);
  expect(checksums["details"]).toBe(encryptedSamplePlan()["checksums"]["details"]);
});
