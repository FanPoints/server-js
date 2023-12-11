# SDK API Specifications

## Overview

This documentation contains the API specifications for the **client-js** SDK.

## General Usage

```typescript
import { createClient } from '@fanpoints/client-js'

const client = createClient({
    projectId: 'projectId',
    clientId: 'clientId',
    secret: 'secret',
});

const usersModule = client.users;
const fanPointsModule = client.fanPoints;

usersModule.addUser('new_user_id', 'new_user_email');
fanPointsModule.getFanPointsBalance('user_id').then(({ result, errors }) => {
    console.log(result, errors);
});
``````
