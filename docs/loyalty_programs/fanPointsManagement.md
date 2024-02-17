---
title: "client-js: Fan Points Management"
layout: default
parent: Loyalty Programs
---

# Fan Points Management

Here we look at how you can manage fan points for a user.

## Access the Number of Fan Points for a User

As a loyalty program owner, you can access the number of fan points a user has collected using the following function:

```typescript
client.fanPoints.getBalance('user id').then(({ fanPoints }) => {
    console.log("The user has", fanPoints, "fan points");
});
```