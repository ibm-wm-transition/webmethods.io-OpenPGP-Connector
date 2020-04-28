# webmethods.io-OpenPGP-Connector
This is a Webmethods.io community connector that uses the [OpenPGP](https://www.openpgp.org/) protocol to perform encryption and decryption of string data. Two actions are supported - encrypt and decrypt.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
This connector requires any [Node](https://nodejs.org/dist/) version between 8.14.0 and 10.14.2.

Note: If you have installed any other Node version on your system, you can:
1. Use tools to switch between different versions of Node

  - For Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades).
  
  - For Mac, use [homebrew](https://brew.sh/).
2. Build your app using your existing Node version and then transpile your code using a transpiler like [Babel](https://babeljs.io/).

The connector has been built with [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI tool and [openpgp.js](https://www.npmjs.com/package/openpgp), a JavaScript implementation of the OpenPGP protocol. 

### Installing
1. Clone the repo `https://github.com/yuvanmytri/webmethods.io-BambooHR-Community-Connector.git`.
2. Run `npm install -g @webmethodsio/wmiocli`.
3. Login to your webmethods.io tenant using `wmio login`.
4. Execute `wmio init` to get started.
5. Finally, execute `wmio deploy` to deploy this connector to your tenant.

Once deployed, it’ll be automatically registered with webMethods.io Integration and will be available to you locally in the Connectors panel under the Services tab.

## Deployment
Execute `wmio deploy` to deploy this connector to your webmethods.io tenant. And `wmio unpublish` to unpublish the published connector app along with triggers and actions associated with the app.

![OpenPGP Connector](https://user-images.githubusercontent.com/16189220/80452074-136dd280-8943-11ea-8f32-7c82c2472623.png)

## Format Examples

### Private Key
-----BEGIN PGP PRIVATE KEY BLOCK-----

Version: OpenPGP.js v4.10.1

Comment: https://openpgpjs.org

xYYEXpp6ShYJKwYBBAHaRw8BAQdAga7oNUZdvOY/wXPKJzdeCH0wR7xh8w1n
nHRp1a8M8gX+CQMIJ1BlF5ePBnngwka9etyN+CdyEi5jdRb6gInN9dHh/KmZ
oK+b+moL5Axcn9s30jQLfe56L3CobMPlsW2OgctNMJUO1UXSAK0qpHRrMTfW
+80wTmF3YWppc2ggQW53YXIgTGFza2FyIDxsYXNrYXJuYXdhamlzaEBnbWFp
bC5jb20+wngEEBYKACAFAl6aekoGCwkHCAMCBBUICgIEFgIBAAIZAQIbAwIe
AQAKCRBJzb+mLBbCl2IQAP0UZ955NHn+zaNs2B5gSB9Jo02Yyyxhy5LviHX+
bfFGLwD/c13akRqfvI9FK/OZjdUWJ3exnfJbFT2U78CCwwW2qA7HiwRemnpK
EgorBgEEAZdVAQUBAQdAT43+Wztu14vzSYBMG+ysqg4+dGNXj16n9awhmYlF
YG0DAQgH/gkDCMUO5+uv/pn/4CJaUpHZUKinTSQQGKOCaWDoQ07/dvKwfpVZ
wXOdxIk5C9LOhuxW/wfFmWsyPQKdbNfRtkYTHmVOOGplVek1vt1JTLFzWd/nC
YQQYFggACQUCXpp6SgIbDAAKCRBJzb+mLBbCl+4xAP9TGfUg3CttGw5iqaaq
DT5wzDYfvFkHNTugPcUR6Yhr5gD/d5Ab97PZ4FW9c54N3BfXEJlkmxc36K83
7Clg2qAR3Q4=
=amNl
-----END PGP PRIVATE KEY BLOCK-----

### Public Key
-----BEGIN PGP PUBLIC KEY BLOCK-----

Version: OpenPGP.js v4.10.1

Comment: https://openpgpjs.org

xjMEXpVmuRYJKwYBBAHaRw8BAQdAZClo0cLMW8jQf80AHG0tQcLAtH8cIkTz
FwQPrrii6unNG0pvbiBTbWl0aCA8am9uQGV4YW1wbGUuY29tPsJ4BBAWCgAg
BKEelWa5BgsJBwgDAgQVCAoCBBYCAQACGQECGwMCHgEACgkQRSSb10eAnOCr
pAD/VB6MLtaIiGeiD6oDye/4YtJedw0oRTS9sbh7AFj17nkA/3EvsUWPnEwh
t3Km6v8MYwlVspVRWhgJteyHP5umSsIKzjgEXpVmuRIKKwYBBAGXVQEFAQEH
QL+mk9GFkAko6sbF4uMteg+NNZALs1Wz1OZR1f6CAuABAwEIB8JhBBgWCAAJ
BQJelWa5AhsMAAoJEEUkmodHgJzgUk8A/Av96VGZoY/9CI4SPXTPLXzu1+R+
N5gtAdB5g4zxvCmRAP0bRPxuUyhlROeQPYxRiKkoRBXo8Be1YDE1g5VOLzgH
Dg==
=m8ZK
-----END PGP PUBLIC KEY BLOCK-----

### Encrypted Message
-----BEGIN PGP MESSAGE-----

Version: OpenPGP.js v4.10.1

Comment: https://openpgpjs.org

wV4DJi2QPUvgAfQSAQdAsR4JrLaXoA9MRbfEuhozE+qBq2ddQqaLIR2fJhvo
GA8wQg6ZnMSbMRHWsgUq5QlWtGKyCM49XA2SYlO72rv+JERbFXJOnwmldHo4
/oUOOGuu0kUBZI/XTLuerhI+4gp6xLIURu+3erZeWA5DsdiHFyj4ebJ0S+9e
+g32wtukL5ks+vHBO/KQK2NNr880/znnU/aFZfREMjI=
=ls5I
-----END PGP MESSAGE-----

## Built With
Node v8.14.0 and [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI.

## Contributors
[Anshuman Saikia](https://github.com/anshu96788) |
[Dipankar Dutta](https://github.com/DipankarDDUT) |
[Nawajish Laskar](https://github.com/Nawajish)

## License
This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/SoftwareAG/webmethods-microservicesruntime-samples/blob/master/LICENSE) file for details

______________________
These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.

Contact us at [TECHcommunity](mailto:technologycommunity@softwareag.com?subject=Github/SoftwareAG) if you have any questions.
