# server-js

A javascript SDK to integrate FanPoints into your server.

## Usage

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

### 🤐 Working with Secrets

This repository is using Doppler to manage secrets.
