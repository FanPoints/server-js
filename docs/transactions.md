---
title: The Transaction System
layout: home
---

# Overview

On this page, we explain how transactions work in the FanPoints system.

Most operations in a FanPoints project (distributing points, collecting cards, opening lootboxes etc.) are implemented as **transactions**. Transactions are atomic operations that move rewards (e.g. Fan Points, Status Points, cards...) from one account (partner or user) to another.

```typescript
type RewardTransaction = {
  ownerId: string
  oldOwnerId: string

  groupId: string
  groupSize: int
  nr: int

  reward: Reward

  details: TransactionDetails

  onlyReserved: boolean
  reservationDate: string
  claimedDate: string
}
``````

# Transaction Groups

Transactions are grouped into **transaction groups**. A transaction group is a set of transactions that are executed atomically. This means that either all transactions in a transaction group are executed or none of them.

Each transaction group has a **transaction group id**. The transaction group ID is a unique identifier for the transaction group. The transactions within a group are identified by their **transaction nr**.

Execution of a transaction group with a given group ID is idempotent: A transaction group with a given transaction group ID can only be executed once. If a transaction group with a given transaction group ID is executed a second time, the second execution will be ignored.

# Example: Distribution of Fan Points to a User

If a partner distributes Fan Points to a user, this corresponds to a transaction group with two transactions:

1. A transaction that moves the Fan Points from the FanPoints account to the partners's account.

2. A transaction that moves the Fan Points from the partner's account to the user's account.

Note that the balance of the partner does not change as both transactions are executed atomically. We use two transactions to very explicitly model the flow of Fan Points.

# Undoing Transactions

A transaction group can be undone by executing a new transaction group with the same rewards but with the accounts swapped. The new transactions are linked to the original transactions.
