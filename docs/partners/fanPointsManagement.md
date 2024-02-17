---
title: "client-js: Fan Points Management"
layout: default
parent: Partners
---

# Fan Points Management

Here we look at how you can manage fan points for a user.

## Access the Transactions of a User at a Partner

As a partner, you can access the transactions of a user at your store using the following code. Every transaction represents a purchase where the user has been given fan points or a purchase that the user has payed with fan points.

```typescript
client.fanPoints.getTransactions('user id').then((transactions) => {
    console.log("The user has made the following transactions:", transactions);
});
```

You can paginate the results:

```typescript
// get only the last 10 transactions
client.fanPoints
    .getTransactions('user id', 10)

// get only the last 10 transactions earlier than the given date
client.fanPoints
    .getTransactions('user id', 10, new Date())
```

## Give FanPoints to a User after a Purchase

When a user makes a purchase and you want to give them fan points as a partner, you can use the following operation. The first argument specifies the user id, the second argument is an array of purchase items.

```typescript
client.fanPoints.giveFanPointsOnPurchase(
    'user id',
    [
        {
            title: 'Ticket',
            description: 'Ticket Category B for FC Basel vs. FC Zürich',
            price: 65.0,
        },
    ],
);
```

For each purchase item, you can specify a rate label that determines how many fan points the user gets for every CHF on the purchase. If no rate label is given, the default rate is used. You can configure the different rate categories in the FanPoints backend.

```typescript
client.fanPoints.giveFanPointsOnPurchase(
    'user id',
    [
        {
            title: 'Ticket',
            description: 'Ticket Category B for FC Basel vs. FC Zürich',
            price: 65.0,
            currency: 'chf',
            rateLabel: 'ticket'
        },
        {
            title: 'Shirt men',
            description: 'The current FC Basel shirt for men (size S)',
            price: 100.0,
            currency: 'chf',
            rateLabel: 'default'
        },
    ],
);
```

Furthermore, you can assign each purchase item a specific partner using the partner id or a partner label. Note that the partners must be configured upon creation of the client.

```typescript
client.fanPoints.giveFanPointsOnPurchase(
    'user id',
    [
        {
            title: 'Ticket',
            description: 'Ticket Category B for FC Basel vs. FC Zürich',
            price: 65.0,
            currency: 'chf',
            partnerId: 'the partner id',
        },
        {
            title: 'Shirt men',
            description: 'The current FC Basel shirt for men (size S)',
            price: 100.0,
            currency: 'chf',
            partnerLabel: 'partner label',
        },
    ],
);
```

You can set your own `purchaseId` and your own `purchaseItemId`'s:

```typescript
client.fanPoints.giveFanPointsOnPurchase(
    'user id',
    [
        {
            title: 'Ticket',
            description: 'Ticket Category B for FC Basel vs. FC Zürich',
            price: 65.0,
            currency: 'chf',
            customPurchaseItemId: 'your internal item id'
        },
        {
            title: 'Shirt men',
            description: 'The current FC Basel shirt for men (size S)',
            price: 100.0,
            currency: 'chf',
            customPurchaseItemId: 'your internal item id'
        },
    ],
    'your internal purchase id'
);
```

## Pay with FanPoints

When a user wants to pay a purchase with fan points, you can use the `payPurchaseWithFanPoints` operation. It has the exact same interface as the `giveFanPointsOnPurchase` operation:


```typescript
client.fanPoints.payPurchaseWithFanPoints(
    'user id',
    [
        {
            title: 'Ticket',
            description: 'Ticket Category B for FC Basel vs. FC Zürich',
            price: 65.0,
            currency: 'chf',
            partnerId: 'the partner id A',
        },
        {
            title: 'Shirt men',
            description: 'The current FC Basel shirt for men (size S)',
            price: 100.0,
            currency: 'chf',
            partnerLabel: 'partner label',
        },
    ],
);
```

## Undo a Purchase

You can undo purchase items connected to a fan points transaction using the following snippet:

```typescript
client.fanPoints.undoPurchase(
    'user id',
    'purchase id',
    [
        {
            purchaseItemId: 'purchase item id',
        },
        {
            purchaseItemId: 'purchase item id',
        }
    ]
);
```

You don't have to undo all purchase items of a purchase.

If multiple partners are configured, you have to specify at which partner you want to undo the purchase using the partner id or one of the partner labels:

```typescript
client.fanPoints.undoPurchase(
    'user id',
    'purchase id',
    [
        {
            purchaseItemId: 'purchase item id',
            partnerId: 'partner id',
        },
        {
            purchaseItemId: 'purchase item id',
            partnerLabel: 'partner label',
        }
    ]
);
```