---
title: "Tutorial: Setting up a Loyalty Program"
layout: default
parent: Loyalty Programs
nav_order: 1
---

# Setting up a Loyalty Program
{: .no_toc }

This guide shows you how to create a new loyalty program. Furthermore, we look at how you can use the *FanPoints* SDK to let your users participate in the loyalty program.

1. TOC
{:toc}

## Creating a New Loyalty Program

Open the *FanPoints* dashboard and create a new account. Once logged in, use the *Create New* button to create a new loyalty program.

## Accepting Partners

Open the newly created partner and navigate to the *Partners* tab. When a partner requests to join your loyalty program, you can accept or decline the request. This will allow users to interact with the loyalty program at this partner.

> You can always use the *Example Partner* to test your integration. This partner is open to everyone and can be used for testing purposes.

## Setting up the *FanPoints* SDK

Now you're ready to integrate the *FanPoints* SDK into your infrastructure. You can use the SDK to let users enter your loyalty program.

Currently, only a server-side typescript SDK is available. It needs to be used in your backend, as user-level authorization is not yet supported. We are working on a client-side SDK that will allow you to use the SDK in your client-side code.

### Installing the SDK

You can install the SDK using npm:

```bash
npm install @fanpoints/server-js
```

### Getting Access Tokens

To access the *FanPoints* API, you first need to generate access tokens. Go to the dashboard, navigate to your loyalty program, click on *Settings* and then on *Tokens*. You can generate a new token there. Each token consists of a *client id* and a *secret*.

### Configuring a Client

All operations are performed on a `FanPointsClient` object. With the generated access tokens, you can create a client for your partner:

```typescript
import { createClient } from '@fanpoints/server-js';

const client = createClient({
    loyaltyProgramConfig: {
        loyaltyProgramId: 'the layalty program id',
        clientId: 'the client id',
        secret: 'the client secret',
    },
});
```

You can use the `ping` function to test if the client is working:

```typescript
client.misc.ping().then(() => {
    console.log("The client is working!");
});
```

## Using the *FanPoints* SDK

You are now ready to register your users in the loyalty program. You could decide that all your existing users are automatically registered in the loyalty program. You can also let users manually opt-in into the loyalty program.

Either way, you can use the following code to register a user in the loyalty program:

```typescript
await client.users.addUser('your user id', '<the users mail address>');
```

Now the user is registered in the loyalty program and can start collecting and spending fan points.
