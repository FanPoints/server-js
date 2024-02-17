---
layout: default
title: "Tutorial: Setting up a Partner"
parent: Partners
nav_order: 1
---

# Setting up a Partner
{: .no_toc }

This guide shows you how to create a new partner and how to join a loyalty program. Furthermore, we look at how you can use the *FanPoints* SDK to let users collect and spend Fan Points in your app or website.

1. TOC
{:toc}

## Creating a New Partner

Open the [*FanPoints* dashboard](https://backend-app-svelte-aec.pages.dev) and create a new account. Once logged in, use the *Create New* button to create a new partner.

## Joining a Loyalty Program

Open the newly created partner and navigate to the *Loyalty Programs* tab. You can send a request to join a loyalty program. This will allow users in this loyalty program to interact in your app. It might take a few days until the loyalty program (hopefully) accepts your request.

> You can always use the *Example Loyalty Program* to test your integration. This loyalty program is open to everyone and can be used for testing purposes.

## Using the *FanPoints* Partner App

If you want users to collect and spend Fan Points in your physical stores without any further integration, you can use the *FanPoints* partner app. It will be available for download shortly and will allow you to distribute and collect Fan Points by simply scanning users QR codes.

## Setting up the *FanPoints* SDK

Now you are ready to integrate the *FanPoints* SDK into your infrastructure. You can use the SDK to let users collect and spend Fan Points.

Currently, only a server-side typescript SDK is available. It needs to be used in your backend, as user-level authorization is not yet supported. We are working on a client-side SDK that will allow you to use the SDK in your client-side code.

### Installing the SDK

You can install the SDK using npm:

```bash
npm install @fanpoints/server-js
```

### Getting Access Tokens

To access the *FanPoints* API, you first need to generate access tokens. Go to the dashboard, navigate to your partner, click on *Settings* and then on *Tokens*. You can generate a new token there. Each token consists of a *client id* and a *secret*.

### Configuring a Client

All operations are performed on a `FanPointsClient` object. With the generated access tokens, you can create a client for your partner:

```typescript
import { createClient } from '@fanpoints/server-js';

const client = createClient({
    defaultPartnerConfig: {
        partnerId: 'the partner id',    // can be found in the dashboard
        clientId: 'the client id',
        secret: 'the client secret',
        defaultCurrency: 'chf'
    },
});
```

You can use the `ping` function to test if the client is working:

```typescript
client.ping().then(() => {
    console.log("The client is working!");
});
```

## Using the *FanPoints* SDK

In the following, we will use the *Example Loyalty Program* to demonstrate how to use the configured *FanPoints* client. If you want to follow the tutorial, make sure to join the *Example Loyalty Program*.

### Distributing Fan Points

Let's assume you want to distribute Fan Points to a user upon a purchase at your store.

You first need to get the *FanPoints* user id, for example by letting users enter their id in your app or website as part of the purchase process.

Every distribution of Fan Points is associated with a purchase. A purchase consists of one or more items. The price of the items determines the amount of Fan Points that are distributed to the user. For now, we will use the default commission of 2% which will be distributed as Fan Points. You can use *commission rate labels* to customize the rates.

```typescript
const result = await client.fanPoints.giveFanPointsOnPurchase(
    'user-a',   // this is a known user of the Example Loyalty Program
    [
        {
            title: 'T-Shirt',
            description: 'T-Shirt off-white (women, size M)',
            price: 70.0,
        },
        {
            title: 'Socks',
            description: 'Socks black (size S)',
            price: 10.0,
        },
    ]
);

/**
 *  result = [
 *    {
 *      "purchaseId": "<purchase-id>",
 *      "userId": "user-a",
 *      "transactionType": "distributed_on_purchase",
 *      "purchaseItems": [
 *        {
 *          "purchaseItemId": "<purchase-item-id>",
 *          "partnerId": "<your partner id>",
 *          "title": "T-Shirt",
 *          "description": "T-Shirt off-white (women, size M)",
 *          "price": 70,
 *          "currency": "chf",
 *          "amount": 70,
 *          "rateLabel": null,
 *          "date": "2024-02-17 12:08:43.488364"
 *        },
 *        {
 *          "purchaseItemId": "<purchase-item-id>",
 *          "partnerId": "<your partner id>",
 *          "title": "Socks",
 *          "description": "Socks black (size S)",
 *          "price": 10,
 *          "currency": "chf",
 *          "amount": 10,
 *          "rateLabel": null,
 *          "date": "2024-02-17 12:08:43.488364"
 *        }
 *      ]
 *    }
 *  ]
 * /
```

### Purchasing with Fan Points

Letting users purchase items with Fan Points is as easy as distributing them. You can use the `purchaseWithFanPoints` function to let users purchase items with Fan Points:

```typescript
const result = await client.fanPoints.payPurchaseWithFanPoints(
    'user-a', // this is a known user of the Example Loyalty Program
    [
        {
            title: 'T-Shirt',
            description: 'T-Shirt off-white (women, size M)',
            price: 70.0,
        },
        {
            title: 'Socks',
            description: 'Socks black (size S)',
            price: 10.0,
        },
    ],
);

/**
 *  result = [
 *    {
 *      "purchaseId": "<purchase-id>",
 *      "userId": "user-a",
 *      "transactionType": "purchased_with_fanpoints",
 *      "purchaseItems": [
 *        {
 *          "purchaseItemId": "<purchase-item-id>",
 *          "partnerId": "<your partner id>",
 *          "title": "T-Shirt",
 *          "description": "T-Shirt off-white (women, size M)",
 *          "price": 70.0,
 *          "currency": "chf",
 *          "amount": -7000,
 *          "rateLabel": null,
 *          "date": "2024-02-17 12:12:34.824832"
 *        },
 *        {
 *          "purchaseItemId": "<purchase-item-id>",
 *          "partnerId": "<your partner id>",
 *          "title": "Socks",
 *          "description": "Socks black (size S)",
 *          "price": 10.0,
 *          "currency": "chf",
 *          "amount": -1000,
 *          "rateLabel": null,
 *          "date": "2024-02-17 12:12:34.824832"
 *        }
 *      ]
 *    }
 *  ]
 * /
```

The `purchaseWithFanPoints` function will throw a `RequestError` if the user does not have enough Fan Points to purchase the items. You can catch this error and handle it in your app or website:

```typescript
try {
    const result = await client.fanPoints.payPurchaseWithFanPoints(
       ...
    );
} catch (error) {
    if (error.errors?.includes('tooFewAvailableError')) {
        console.log(
            'The user does not have enough Fan Points to purchase the items.',
        );
    } else {
        // another error occurred
        throw error;
    }
}
```

If you want to check the Fan Points balance before the purchase, you can use the following method to check the number of Fan Points the user has collected and the corresponding monetary value of the Fan Points:

```typescript
const balance = await client.fanPoints.getBalance('user-a');
// balance = { fanPoints: 3465, monetaryValue: 34.65, currency: 'chf' }
```

You can also use the following method to check the number of Fan Points a user would have to spend to purchase a given item:

```typescript
const fanPointsNeeded = await client.fanPoints.getPriceInFanPoints(70.0);
// fanPointsNeeded = 7000
```

## Next Steps

You can now use the *FanPoints* SDK to let users collect and spend Fan Points in your app or website. If you want to learn more about the SDK, check out the other parts of the documentation.