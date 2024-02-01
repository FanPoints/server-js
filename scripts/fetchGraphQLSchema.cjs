/**
 * This script is used by graphql-codegen to fetch the GraphQL schema from the backend repository
 * (https://github.com/FanPoints/backend).
 *
 * Change the `version` constant to specify the schema version that is fetched.
 */

const request = require('sync-request');
const credentials = require('./backendRepoCredentials.json');
const version = 'feat-rewrite-sdk';
const url = `https://raw.githubusercontent.com/FanPoints/backend/${version}/api/generated/merged_schema_with_directives.graphql`;
const token = credentials.githubApiRepoAccessToken;

const schema = request('GET', url, {
    headers: {
        Authorization: `token ${token}`,
    },
}).getBody('utf8');

module.exports = schema;
