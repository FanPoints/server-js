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

## Return Values

All methods return a promise that resolves to an object with the at most two keys:

- `result`: The result of the operation, if any.
- `errors`: An object containing errors that occurred during the operation, if any.

The error object has one key per possible error. If an error ocurred, the corresponding value is an object with (potentially) more information about the error. If no error occurred, the corresponding value is `undefined`.
