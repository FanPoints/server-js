## Development

### 👋 Quick Start

After cloning the repository, run the following commands:

```
npm i
npx husky install
```

Furthermore, you have to:

1. [Install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) to use the AWS Amplify features. Make sure that your AWS IAM account is correctly configured. To set up your IAM account, run `aws configure`. Other options to authenticate with your IAM account can be found [here](https://registry.terraform.io/providers/hashicorp/aws/latest/docs).
2. [Install the Doppler CLI](https://docs.doppler.com/docs/cli) to fetch the necessary secrets from Doppler. To set up Doppler run `doppler login` and `doppler setup` after installing the Doppler CLI.

### 🔧 Useful Commands

The following are some useful commands:

-   `npm run lint`: run ESLint.
-   `npm run format`: run prettier.
-   `npm run check-types`: run the TypeScript compiler to check types.
-   `npm run docs`: build the auto-generated API reference.
-   `npm run generate-graphql`: generate the GraphQL types.

### ✏️ Documentation

This repo uses [TypeDoc](https://typedoc.org/) to automatically generate an API reference from the source code. To generate the documentation, run `npm run docs`. The generated documentation can be found in the `docs` folder.

Furthermore, you can add markdown files to the `docs` folder to add additional documentation.

A live version of the documentation can be found [here](https://fanpoints.github.io/server-js/). It is automatically updated on every push to the `main` branch.

### 🤐 Working with Secrets

This repository uses Doppler to manage secrets.
