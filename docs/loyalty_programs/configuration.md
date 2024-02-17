---
title: 'client-js: Configuration'
layout: default
parent: Loyalty Programs
---

# Configuration

You the following code to create a client for your loyalty program:

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
    loyaltyProgramConfig: {
        loyaltyProgramId: 'the loyalty program id',
        clientId: 'the client id',
        secret: 'the client secret',
    },
});
```

You can generate the `clientId` and `secret` in the *FanPoints* dashboard.

## Configuration for Loyalty Program Owners and Partners

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