---
title: 'client-js: Configuration'
layout: default
parent: Loyalty Programs
nav_order: 2
---

# Configuration
{: .no_toc }

1. TOC
{:toc}

## Configuring a Loyalty Program

Use the following code to create a client for your loyalty program:

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
    loyaltyProgramConfig: {
        loyaltyProgramId: 'the loyalty program id', // can be found in the dashboard
        clientId: 'the client id',
        secret: 'the client secret',
    },
});
```

You can use the `ping` function to test if the client is working:

```typescript
client.ping().then(() => {
    console.log("The client is working!");
});
```

You can generate the `clientId` and `secret` in the [*FanPoints* dashboard](https://backend-app-svelte-aec.pages.dev).

## Configuring Partners and Loyalty Programs

You can also configure the client to interact with both loyalty programs and partners:

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
    loyaltyProgramConfig: {
        loyaltyProgramId: 'the loyalty program id',
        clientId: 'the client id',
        secret: 'the client secret',
    },
    otherPartnerConfigs: [
        {
            partnerId: 'the partner id',
            clientId: 'the client id',
            secret: 'the client secret'
            partnerLabels: ['tickets', 'gift_cards'],
            defaultCurrency: 'chf'
        },
        {
            partnerId: 'the partner id',
            clientId: 'the client id',
            secret: 'the client secret'
            partnerLabels: ['merchandise', 'sports_equipment'],
            defaultCurrency: 'chf'
        },
    ],
});
```