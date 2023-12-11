import { createClient } from './FanPointsClient';

export type { ClientConfig } from './FanPointsClient';
export { default as FanPointsClient, createClient } from './FanPointsClient';

export * from './UserModule';
export * from './FanPointsModule';
export * from './StatusPointsModule';

const client = createClient({
    projectId: 'projectId',
    clientId: 'clientId',
    secret: 'clientSecret',
});

const usersModule = client.users;
const fanPointsModule = client.fanPoints;

usersModule.addUser('new_user_id', 'new_user_email');
fanPointsModule.getFanPointsBalance('user_id').then(({ result, errors }) => {
    console.log(result, errors);
});
