export type User = {
    name: string;
    age: number;
};

export const generateOlderUser = (): User => {
    return {
        name: 'John',
        age: 50,
    };
};
