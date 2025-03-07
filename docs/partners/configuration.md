---
title: 'client-js: Configuration'
layout: default
parent: Partners
nav_order: 2
---

# Configuration
{: .no_toc }

1. TOC
{:toc}

## Configuring a Single Partner 

Every operation is performed on a `FanPointsClient` object.

You can specify the partner you want to manage by using the following snippet:

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
    defaultPartnerConfig: {
        partnerId: 'the partner id',
        clientId: 'the client id',
        secret: 'the client secret',
        defaultCurrency: 'chf'
    },
});
```

You can generate the `clientId` and `secret` in the [*FanPoints* dashboard](https://dashboard.fanpoints.ch).

## Configuring Multiple Partner

You can also specify multiple partners and use the same client to interact with them:

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
    otherPartnerConfigs: [
        {
            partnerId: 'the partner id',
            clientId: 'the client id',
            secret: 'the client secret',
            defaultCurrency: 'chf'
        },
        {
            partnerId: 'the partner id',
            clientId: 'the client id',
            secret: 'the client secret',
            defaultCurrency: 'chf'
        },
    ],
});
```

Configuring multiple partners allows you to e.g. register a purchase with items bought at different partners.

### Partner Labels

You can specify the partner labels that are used by the partner. This allows you to assign purchase items to the partners without having to specify the partner id for each purchase item. You can specify the purchase labels in the partner configuration:

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
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