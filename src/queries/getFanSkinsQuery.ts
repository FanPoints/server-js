import { graphql } from '../queries/generated';

export const query = graphql(/* GraphQL */ `
    query get_fan_skins($fan_id: String!) {
        get_fan_skins(fan_id: $fan_id) {
            reward_id
            skin_name
            applied
        }
    }
`);
