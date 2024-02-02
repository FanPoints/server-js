---
title: "client-js: Fan Points Management"
layout: home
---

# Fan Points Management

Here we look at how you can manage fan points for a user.

## As a Loyalty Program Owner

### Access the Number of Fan Points for a User

As a loyalty program owner, you can access the number of fan points a user has collected using the following code:

```typescript
client.fanPoints.getBalance('user id').then((balance) => {
    console.log("The user has", balance, "fan points");
});
```

## As a Partner

### Access the Transactions of a User at a Partner

As a partner, you can access the transactions of a user at your store using the following code. Every transaction represents a purchase where the user has been given fan points or a purchase that the user has payed with fan points.

```typescript
client.fanPoints.getTransactions('user id').then((transactions) => {
    console.log("The user has made the following transactions:", transactions);
});
```

If you configured multiple partners, getTransactions returns the transactions at all configured partners by default. You can you the `specificPartnerId` attribute to get the transactions at a specific partner:

```typescript
client.fanPoints.getTransactions('user id', 'specific partner id').then((transactions) => {
    console.log("The user has made the following transactions:", transactions);
});
```

You can paginate the results:

```typescript
// get only the last 10 transactions
client.fanPoints
    .getTransactions({
        userId: 'user id',
        limit: 10,
    })

// get only the last 10 transactions earlier than the given date
client.fanPoints
    .getTransactions({
        userId: 'user id',
        limit: 10,
        earlierThan: new Date(),
    })
```

### Give FanPoints to a User after a Purchase

When a user makes a purchase and you want to give them fan points as a partner, you can use the following operation:

```typescript
client.fanPoints.giveFanPointsOnPurchase({
    userId: 'user id',
    purchaseItems: [
        {
            title: 'Ticket',
            description: 'Ticket Category B for FC Basel vs. FC Zürich',
            price: 65.0,
            currency: 'chf',
        },
    ],
});
```

For each purchase item, you can specify a rate category that determines how many fan points the user gets for every CHF on the purchase. If no rate category is given, the default rate is used. You can configure the different rate categories in the FanPoints backend.

```typescript
client.fanPoints.giveFanPointsOnPurchase({
    userId: 'user id',
    purchaseItems: [
        {
            title: 'Ticket',
            description: 'Ticket Category B for FC Basel vs. FC Zürich',
            price: 65.0,
            currency: 'chf',
        },
        {
            title: 'Shirt men',
            description: 'The current FC Basel shirt for men (size S)',
            price: 100.0,
            currency: 'chf',
            rate_category: 'merchandise'
        },
    ],
});
```

Furthermore, you can assign each purchase item a specific partner. Note that the partners must be configured upon creation of the client:

```typescript
client.fanPoints.giveFanPointsOnPurchase({
    userId: 'user id',
    purchaseItems: [
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
            partnerId: 'the partner id B',
        },
    ],
});
```

### Pay with FanPoints

When a user wants to pay a purchase with fan points, you can use the `payPurchaseWithFanPoints` operation. It has the exact same interface as the `giveFanPointsOnPurchase` operation:

```typescript
client.fanPoints.payPurchaseWithFanPoints({
    userId: 'user id',
    purchaseItems: [
        {
            title: 'Ticket',
            description: 'Ticket Category B for FC Basel vs. FC Zürich',
            price: 65.0,
            currency: 'chf',
        },
    ],
});
```

You can also set different rates and assign different partners the same way as whon above.

### Undo a Purchase

You can undo a purchase connected to a fan points transaction using the following code:

```typescript
client.fanPoints.undoPurchase({
    userId: 'user id',
    purchaseId: 'purchaseId'
});
```

It is also possible to only undo a single purchase item:

```typescript
client.fanPoints.undoPurchase({
    userId: 'user id',
    purchaseId: 'purchase id'
    purchaseItemId: 'purchaseItem id'
});
```

If multiple partners are configured, you have to specify at which partner you want to undo the purchase:

```typescript
client.fanPoints.undoPurchase({
    userId: 'user id',
    specificPartnerId: 'partner id',
    purchaseId: 'purchase id'
    purchaseItemId: 'purchaseItem id'
});
```