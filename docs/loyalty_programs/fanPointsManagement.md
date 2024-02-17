---
title: "client-js: Fan Points Management"
layout: default
parent: Loyalty Programs
nav_order: 4
---

# Fan Points Management
{: .no_toc }

Here we look at how you can manage Fan Points for a user as a loyalty program owner.

1. TOC
{:toc}

## Access the Number of Fan Points for a User

As a loyalty program owner, you can access the number of Fan Points a user has collected using the following function:

```typescript
client.fanPoints.getBalance('user id').then(({ fanPoints }) => {
    console.log("The user has", fanPoints, "fan points");
});
```