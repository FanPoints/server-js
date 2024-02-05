---
title: "client-js: User Management"
layout: home
---

# User Management

Here we look at how you can manage users of your loyalty program.

## Add Users

You can register a user in your loyalty program using the following function:

```typescript
await client.users.addUser('user id', 'email');
```

## Modify Users

You can modify an existing user's user id or email using the following functions:

```typescript
await client.users.changeUserId('old user id', 'new user id');
await client.users.changeMailAddress('user id', 'new email');
```

## Delete Users

You can delete a user from your loyalty program using the following function:

```typescript
await client.users.deleteUser('user id');
```

## Get User Details

You can access the details of a user using the following function:

```typescript
const user = await client.users.getUser('user id');
console.log("The user has the following details:", user);
```