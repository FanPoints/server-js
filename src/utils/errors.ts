class RequestError extends Error {
    constructor(
        message: string,
        public errors: string[],
    ) {
        super(message);
    }
}

function unwrap<E extends object>({
    errors,
}: {
    result?: never;
    errors?: E;
}): undefined;
function unwrap<T, E extends object>({
    result,
    errors,
}: {
    result?: T;
    errors?: E;
}): T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function unwrap(args: any) {
    if (args.result) return args.result;

    const errorStrings = [];
    for (const key in args.errors) {
        if (args.errors[key]) {
            errorStrings.push(key);
        }
    }

    throw new RequestError('Request failed.', errorStrings);
}

export { unwrap, RequestError };
