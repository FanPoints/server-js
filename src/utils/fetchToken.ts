/**
 * This manages an OAuth session. It allows to fetch and refetch a
 * JWT token from the given OAuth endpoint and stores the fetched
 * token.
 */
export class AuthSession {
    private currentToken?: string;

    /**
     * @param clientId - The client ID of the Cognito app.
     * @param secret - The secret of the Cognito app.
     * @param oAuthDomain - The OAuth endpoint to fetch the JWT token from.
     */
    constructor(
        private clientId: string,
        private secret: string,
        private oAuthDomain: string,
    ) {}

    /**
     * Fetches a JWT token from the Cognito OAuth endpoint.
     *
     * @param clientId - The client ID of the Cognito app.
     * @param secret - The secret of the Cognito app.
     * @returns A JWT token (Base64 encoded).
     */
    private async fetchToken(
        clientId: string,
        secret: string,
    ): Promise<string> {
        const bearerToken = btoa(`${clientId}:${secret}`);

        const response = await fetch(this.oAuthDomain, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${bearerToken}`,
            },
            body: 'grant_type=client_credentials&scope=resource-server/api',
        });
        const json = await response.json();

        if (!json.access_token) {
            throw new Error(
                'Authentification failed. Are your client ID and secret correct?',
            );
        }

        const token = json.access_token as string;
        return token;
    }

    /**
     * Returns the current JWT token. If no token is available, a new one is fetched.
     * @returns A JWT token (Base64 encoded).
     */
    public async getToken() {
        if (!this.currentToken) {
            this.currentToken = await this.fetchToken(
                this.clientId,
                this.secret,
            );
        }
        return this.currentToken;
    }

    /**
     * Fetches a new JWT token and returns it.
     * @returns A JWT token (Base64 encoded).
     */
    public async refreshToken() {
        this.currentToken = await this.fetchToken(this.clientId, this.secret);
        return this.currentToken;
    }
}
