// @ts-check

/**
 * @typedef {import('./src/types/types').User} User
 */

/**
 * @returns {User}
 */
const generateUser = () => {
    return {
        name: 'John',
        age: 42,
    };
};

export default generateUser;
