module.exports = {
	name: 'decrypt',

	title: 'Decrypt',

	description: '',
	version: 'v1',

	input: {
		title: 'Decrypt',
		type: 'object',
		properties: {
			encryptedMessage: {
				title: 'Your encrypted message',
				type: 'string',
				minLength: 1,
				format: 'textarea',
				description: 'Your message to be decrypted'
			},
			passphrase: {
				title: 'Your passphrase',
				type: 'string',
				minLength: 1,
				format: 'textarea',
				description: 'Your passphrase for your private key'
			},
			privateKey: {
				title: 'Your private key',
				type: 'string',
				minLength: 1,
				format: 'textarea',
				description: 'Your private key'
			},
			publicKey: {
				title: 'Your public key',
				type: 'string',
				minLength: 1,
				format: 'textarea',
				description: 'Your public key'
			}
		}
	},

	output: {
		title: 'output',
		type: 'object',
		properties: {
			decryptedMessage: {
				title: 'Your Decrypted Message',
				type: 'string',
				displayTitle: 'Your Decrypted Message',
				description: 'Your Decrypted Message'
			}
		}
	},

	mock_input: {
		encryptedMessage: `-----BEGIN PGP MESSAGE-----
Version: OpenPGP.js v4.10.1
Comment: https://openpgpjs.org

wV4DScDz6YQnxN0SAQdAkB4hQETYuv5VAXALh48uNX32MkAu3cVeYevCuYXS
f2EweT79VIAd+ECn78zlUxXhR9LJc/wn+dtilmR2waycBcE7esloM4lsF/2j
uKixprDT0kUBVd838wnJ8+mMzR8LAg8GnRGsPymflhZV81lNude0b/W49kHn
GpXPs/SPi3ePZC9biRCxUUR3ba2NLt0Nh2M9L+spu3A=
=IWBo
-----END PGP MESSAGE-----`,

		passphrase: 'xdadd2321a@32#!112',

		privateKey: `-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: OpenPGP.js v4.10.1
Comment: https://openpgpjs.org

xYYEXpn1lBYJKwYBBAHaRw8BAQdAO6DHeE0vgDoJnR9Ww8hq1LTtUiZ29D0q
w1o5IIze7yr+CQMIfGLhhmQi6/fgufiXB0v0sA16BaydDWsAuAgga+GRaF3Q
FTRs+ougXWgAqUQj/0GZqQyM/kV+o9cX6Tp5zFni35YbP0opcs5xpa9N6RuU
b80fSGFycnkgUG90dGVyIDxsYXNrYXJAZ21haWwuY29tPsJ4BBAWCgAgBQJe
mfWUBgsJBwgDAgQVCAoCBBYCAQACGQECGwMCHgEACgkQ3sV3ZCra/lA29AEA
qSEaDzPeQC9kqfe4hU9NOmbdPMw0167iAfL6C+kmWEABANEP1p3dgMEAN4fE
ZB6lrQCtzYV0EowvveOj7oj0PMsFx4sEXpn1lBIKKwYBBAGXVQEFAQEHQKQD
niZcZgRMRSZB2bqK4nrw6zz7xO3D6iqVjv94PmItAwEIB/4JAwgurzpdfTxa
2uCzpB8zGY87Tl/jYot7bXBORpbW1Tnu8Z+TtgQe+fe8/ekzJJA+3QqS9zVu
pyFFzVT421uyTUrmPg8hB+4Nmvuy3yMyS91awmEEGBYIAAkFAl6Z9ZQCGwwA
CgkQ3sV3ZCra/lBNqgEA3R17L3QcvVi7pMYuQl4VI3b7EDnf6fYWd7+0va4v
vrEBAOUXTG6QFVX4CjUm38+PSa+UsTgLbL9/7nOPQxr5tdUG
=oDGB
-----END PGP PRIVATE KEY BLOCK-----`,

		publicKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: Keybase OpenPGP v1.0.0
Comment: https://keybase.io/crypto

xm8EXqZyjRMFK4EEACIDAwSBBYMUAQokHW2bgUJMvlBe4sVoHhTPM+aC3VGpyU8A
JOpeladAHLA1IJRIQXtdFIZRNLCRT8oBYoC/fr5htZl+Kg4Rbxj5SxnPJHD9TW9q
yMfDdNBCeOjwzP1tfHJVKF3NI0pvbiBEb2UgPGpvbmRvZXRlc3RpbmcyMUBnbWFp
bC5jb20+wo8EExMKABcFAl6mco0CGy8DCwkHAxUKCAIeAQIXgAAKCRDlMbTcBDrs
nU+MAX9GtwReG1CviuQuYnljyP3oawFW7/vP4gK+GTcIUZnzJGJrO0RIoR+Ox5RD
qldP9q8BgKNZEJX51LR7rMgUpx5CmHnkgQT+LQnNtXMGU1FejV6qaOCxRL7drfhy
4THHgvvC3s5SBF6mco0TCCqGSM49AwEHAgMEFndV4FvQ9lszI4kF2oA/Uvq+/3OF
N7JqeQxY9Y+mpLzuaA8Oc+kMtyKW/rspUWDr9HhReolpET8coXHUNk7/CsLAJwQY
EwoADwUCXqZyjQUJDwmcAAIbLgBqCRDlMbTcBDrsnV8gBBkTCgAGBQJepnKNAAoJ
ELphN/x7qjYqbbQBAMhL8Hq0yC6HJthFQErxqTxV27+WZC8dzlm1hmcBP66rAP42
evK8eCpUa35qMphSBqjciOol8MU7uWcMqj9FNETIJFH+AXkBmF+sdF0rbrp81+Z8
Z0mdtqq98b8vEVHVnMMhakc86ap0qFWqjsJgahAPeRvjxIIBfiHpS9NBA0Pe7veO
ngrGHAM8h4FS4IarhSmtmCpCHk3uwZIGK9+FxM2QesPBw609Ks5SBF6mco0TCCqG
SM49AwEHAgMEVRs35MJZpF9eiMvAKXmlWbQz4jQkoCgNgicJK8rLTHlgHb1OqL8m
mX8mO0xaybEbVasSztEfAdhiaVBPaMHR1sLAJwQYEwoADwUCXqZyjQUJDwmcAAIb
LgBqCRDlMbTcBDrsnV8gBBkTCgAGBQJepnKNAAoJED31Tap1YZgCCTQA+gM8YQb+
ftBI2fV2M9upYFN98t9unIls53AVAt4geSQSAQCz8NQCEn8Ks1AREIxXHCOU5JOn
54iy4v44jPXUwRuFRh5gAX9ZBuNYDtLLMHHmlyzLNOtcZF+MbEowE1oM+ob48Zzx
RLVsHQ/2HO8yFRBLFn24qBUBgMtkUYwwniniEDfS6AxxXYncOMeQsYV+C3131Lcb
nXBNPzW7AH96ksANvTiFV1D1SQ==
=j5tW
-----END PGP PUBLIC KEY BLOCK-----`
	},

	execute: function (input, output) {
		const openpgp = require('openpgp');

		(async () => {
			try {
				const {
					keys: [privateKey]
				} = await openpgp.key.readArmored(input.privateKey);
				await privateKey.decrypt(input.passphrase);

				const {
					data: decrypted
				} = await openpgp.decrypt({
					message: await openpgp.message.readArmored(input.encryptedMessage),
					publicKeys: (await openpgp.key.readArmored(input.publicKey)).keys,
					privateKeys: [privateKey]
				});

				output(null, {
					decryptedMessage: decrypted
				});
			} catch (err) {
				console.log(err);
			}
		})();
	}
};