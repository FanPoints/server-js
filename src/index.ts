import type { User } from './utils';

export { generateOlderUser } from './utils';

export const generateUser = (): User => {
    return {
        name: 'John',
        age: 30,
    };
};
