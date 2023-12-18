import { createClient } from './FanPointsClient';

export type { ClientConfig } from './FanPointsClient';
export { default as FanPointsClient, createClient } from './FanPointsClient';

export { UserModule } from './UserModule';
export { FanPointsModule } from './FanPointsModule';
export { StatusPointsModule } from './StatusPointsModule';

const client = createClient({
    projectId: 'FCB',
    clientId: '2nmql0lj74lof47i0dd3uk4etb',
    secret: 'lq8rag6of5pnqrllehgjhfs1ul9jvnuuldp6g1btnhskmuommb1',
});

const func = async () => {
    const a = await client.fanPoints.getBalance('U1');
    console.log(a);
};

func();
