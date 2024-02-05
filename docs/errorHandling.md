---
title: "client-js: Error Handling"
layout: home
---

# Error Handling

Every operation on the `FanPointsClient` returns a promise with the result of the operation.

## Missing Configuration

If the client is not properly configured, the promise is rejected with an `Error` error.

## Request Errors

If an operation fails, the promise is rejected with an `RequestError` error. The `RequestError` object contains an attribute `errors` that is an array of the specific error codes that occurred during the operation:

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
    loyaltyProgramConfig: {
        loyaltyProgramId: "the loyalty program id",
        clientId: 'the client id',
        secret: 'the client secret',
    },
});

client.statusPoints
    .undoAction('user_id', 'action_id')
    .catch((error) => {
        console.error("Thrown errors:", error.errors);
    });
```

The error codes thrown by each operation are documented in the [API Reference](https://fanpoints.github.io/server-js/api/index.html).