class RequestError extends Error {
    /** @hidden */
    constructor(
        message: string,
        /** A list of the exact errors thrown by the request. The specific error codes
         * can be found in the documentation of the different methods in the "Throws"
         * section.
         */
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
    if (args.result !== undefined && args.result !== null) return args.result;
    if (args.errors === undefined || args.errors === null) return undefined;

    const errorStrings = [];
    for (const key in args.errors) {
        if (args.errors[key]) {
            errorStrings.push(key);
        }
    }

    throw new RequestError('Request failed.', errorStrings);
}

export { unwrap, RequestError };
