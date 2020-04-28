module.exports = {
	name: 'encrypt',

	title: 'Encrypt',

	description: '',
	version: 'v1',

	input: {
		title: 'Encrypt',
		type: 'object',
		properties: {
			message: {
				title: 'Your message',
				type: 'string',
				minLength: 1,
				description: 'Your message to be encrypted'
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
			encryptedMessage: {
				title: 'Your Encrypted Message',
				displayTitle: 'Your Encrypted Message',
				description: 'Your Encrypted Message',
				type: 'string'
			}
		}
	},

	mock_input: {
		message: 'Hello world',

		publicKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v4.10.1
Comment: https://openpgpjs.org

xjMEXpVmuRYJKwYBBAHaRw8BAQdAZClo0cLMW8jQf80AHG0tQcLAtH8cIkTz
FwQPrrii6unNG0pvbiBTbWl0aCA8am9uQGV4YW1wbGUuY29tPsJ4BBAWCgAg
BQJelWa5BgsJBwgDAgQVCAoCBBYCAQACGQECGwMCHgEACgkQRSSb10eAnOCr
pAD/VB6MLtaIiGeiD6oDyw/4YtJedw0oRTS9sbh7AFj17nkA/3EvsUWPnEwh
t3Km6v8MYwlVspVRWhgJteyHP5umSsIKzjgEXpVmuRIKKwYBBAGXVQEFAQEH
QL+mk9GFkAko6sbF4uMteg+NNZALs1Wz1OZR1f6CAuABAwEIB8JhBBgWCAAJ
BQJelWa5AhsMAAoJEEUkm9dHgJzgUk8A/Av96VGZoY/9CI4SPXTPLXzu1+R+
N5gtAdB5g4zxvCmRAP0bRZxuUyhlROeQPYxRiKkoRBXo8Be1YDE1g5VOLzgH
Dg==
=m8ZK
-----END PGP PUBLIC KEY BLOCK-----`
	},

	execute: function (input, output) {
		const openpgp = require('openpgp');

		(async () => {
			await openpgp.initWorker({
				path: 'openpgp.worker.js'
			});

			try {
				const {
					data: encrypted
				} = await openpgp.encrypt({
					message: openpgp.message.fromText(input.message),
					publicKeys: (await openpgp.key.readArmored(input.publicKey)).keys
				});
				output(null, {
					encryptedMessage: encrypted
				});
			} catch (err) {
				output(null, err);
			}
		})();
	}
};