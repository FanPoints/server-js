# @fanpoints/server-js

A javascript SDK to integrate FanPoints into your server.

## Usage

```typescript
import { createClient } from '@fanpoints/client-js';

const client = createClient({
    loyaltyProgramConfig: {
        loyaltyProgramId: 'the loyalty program id',
        clientId: 'the client id',
        secret: 'the client secret',
    },
});

const usersModule = client.users;
const fanPointsModule = client.fanPoints;

await usersModule.addUser('new_user_id', 'new_user@gmail.com');

const balance = await fanPointsModule.getBalance('new_user_id');
console.log(balance);
```
