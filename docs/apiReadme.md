# SDK API Specifications

## Overview

This documentation contains the API specifications for the **server-js** SDK.

## General Usage

```typescript
import { createClient } from '@fanpoints/server-js'

const client = createClient({
    projectId: 'projectId',
    clientId: 'clientId',
    secret: 'secret',
});

const usersModule = client.users;
const fanPointsModule = client.fanPoints;

await usersModule.addUser('new_user_id', 'new_user@gmail.com');

const { result, errors } = await fanPointsModule.getFanPointsBalance('new_user_id');
console.log(result, errors);
``````
