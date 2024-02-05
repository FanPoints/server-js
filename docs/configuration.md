---
title: "client-js: Configuration"
layout: home
---

# Configuration

Every operation is performed on a `FanPointsClient` object. When creating the client, you can configure the loyalty program or the partner you want to manage. You can use the same client to interact a loyalty programs and / or multiple partners.

## Configuration for Loyalty Program Owners

You the following code to create a client for your loyalty program:

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
    loyaltyProgramConfig: {
        loyaltyProgramId: "the loyalty program id",
        clientId: 'the client id',
        secret: 'the client secret',
    },
});
```

You can generate the `clientId` and `secret` in the FanPoints backend.

## Configuration for Partners

You can specify the partner you want to manage by using the following snippet:

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
    defaultPartnerConfig: {
        partnerId: 'the partner id',
        clientId: 'the client id',
        secret: 'the client secret',
    },
});
```

You can also specify multiple partners and use the same client to interact with them:

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
    partnerConfigs: [
        {
            partnerId: 'the partner id',
            clientId: 'the client id',
            secret: 'the client secret'
        },
        {
            partnerId: 'the partner id',
            clientId: 'the client id',
            secret: 'the client secret'
        },
    ],
});
```

Configuring multiple partners allows you to e.g. register a purchase with items bought at different shops.

### Partner Labels

You can also specify the purchase labels that are used by the partner. This allows you to assign purchase items to the partners without having to specify the partner id for each purchase item. You can specify the purchase labels in the partner configuration:

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
    partnerConfigs: [
        {
            partnerId: 'the partner id',
            clientId: 'the client id',
            secret: 'the client secret'
            partnerLabels: ['tickets', 'gift_cards'],
        },
        {
            partnerId: 'the partner id',
            clientId: 'the client id',
            secret: 'the client secret'
            partnerLabels: ['merchandise', 'sports_equipment'],
        },
    ],
});
```

## Configuration for Loyalty Program Owners and Partners

You can also configure the client to interact with both loyalty programs and partners:

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
    loyaltyProgramConfig: {
        loyaltyProgramId: "the loyalty program id",
        clientId: 'the client id',
        secret: 'the client secret',
    },
    partnerConfigs: [
        {
            partnerId: 'the partner id',
            clientId: 'the client id',
            secret: 'the client secret'
            partnerLabels: ['tickets', 'gift_cards'],
        },
        {
            partnerId: 'the partner id',
            clientId: 'the client id',
            secret: 'the client secret'
            partnerLabels: ['merchandise', 'sports_equipment'],
        },
    ],
});
```