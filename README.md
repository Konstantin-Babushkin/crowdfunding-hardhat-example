# Sample Crowdfunding Hardhat Project
[![Developed by Mad Devs](https://maddevs.io/badge-dark.svg)](https://maddevs.io/blockchain/)

[//]: # TODO add links to writeup

> [!NOTE]
> This repository was developed as a practical example for an article [Challenges and Pitfalls for Beginner Front-End Blockchain Developers](url-to-writeup).

This project demonstrates a basic Hardhat use case. It comes with a sample contract for managing crowdfunding campaigns

### Installation and local development:
(1) install dependencies, compile contracts and run local node
```shell
npm install &&
npx hardhat compile &&
npx hardhat node
```

(2) deploy contracts
```shell
 npx hardhat run --network localhost scripts/deploy.ts
```

(3) run front-end app [crowdfunding-frontend-example](https://github.com/maddevsio/crowdfunding-frontend-example)
