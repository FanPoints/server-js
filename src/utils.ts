/**
 * A user type storing the name and age.
 */
export type User = {
    name: string;
    age: number;
};

/**
 * @returns An example user of older age.
 */
export const generateOlderUser = (): User => {
    return {
        name: 'John',
        age: 50,
    };
};
