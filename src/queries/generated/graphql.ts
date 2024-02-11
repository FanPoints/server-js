/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never;
      };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    Long: { input: any; output: any };
};

export type AcceptFriendRequestResult = {
    invalid_friend_error: Maybe<InvalidFriendError>;
    invalid_friend_request_error: Maybe<InvalidFriendRequestError>;
};

export type AchievementCompletedEventDetails = {
    achievement_category: Maybe<Scalars['String']['output']>;
    achievement_id: Scalars['String']['output'];
    event_type: EventType;
};

export type AddSeasonResult = {
    invalid_dates_error: Maybe<InvalidDatesError>;
    season: Maybe<Season>;
};

export type AddUserResult = {
    invalid_birthdate_error: Maybe<InvalidBirthdateError>;
    invalid_username_error: Maybe<InvalidUsernameError>;
    user: Maybe<User>;
    user_already_exists_error: Maybe<UserAlreadyExistsError>;
};

export type Address = {
    city: Scalars['String']['output'];
    street: Scalars['String']['output'];
    zip_code: Scalars['String']['output'];
};

export type AddressInput = {
    city: Scalars['String']['input'];
    street: Scalars['String']['input'];
    zip_code: Scalars['String']['input'];
};

export type AlreadyClaimedRewardError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type AlreadyOpenedLootboxError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type AlreadyRedeemedError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type ApplySkinResult = {
    invalid_skin_error: Maybe<InvalidSkinError>;
};

export type Area = {
    area_description: Scalars['String']['output'];
    area_id: Scalars['String']['output'];
    area_name: Scalars['String']['output'];
    center_coordinates: Coordinates;
    polygon_coordinates: Array<Coordinates>;
    unlocked: Scalars['Boolean']['output'];
};

export type BasicCompletionDetails = {
    completed: Scalars['Boolean']['output'];
    completion_date: Maybe<Scalars['String']['output']>;
};

export type BuyItemResult = {
    invalid_option_error: Maybe<InvalidOptionError>;
    invalid_reward_id_error: Maybe<InvalidRewardIdError>;
    too_few_available: Maybe<TooFewAvailableError>;
    too_few_fan_points: Maybe<TooFewFanPointsError>;
    too_few_status_points: Maybe<TooFewStatusPointsError>;
};

export type CanClaimRewardResult = {
    can_claim: Scalars['Boolean']['output'];
    missing_claim_id_error: Maybe<MissingClaimIdError>;
};

export type Card = {
    amount: Scalars['Int']['output'];
    card_set_id: Scalars['String']['output'];
    cards_needed_for_next_level: Maybe<Scalars['Int']['output']>;
    height_cm: Maybe<Scalars['Int']['output']>;
    level: Maybe<Scalars['Int']['output']>;
    num_collected: Maybe<Scalars['Int']['output']>;
    player_name: Scalars['String']['output'];
    player_position: Scalars['String']['output'];
    player_surname: Scalars['String']['output'];
    power_level: Maybe<Scalars['Int']['output']>;
    rarity: Rarity;
    reward_id: Scalars['String']['output'];
    reward_type: Scalars['String']['output'];
    weight_kg: Maybe<Scalars['Int']['output']>;
};

export type CardLootboxProgress = {
    cards_needed_for_lootbox: Scalars['Int']['output'];
    current_progress: Scalars['Int']['output'];
};

export type CardSet = {
    card_set_id: Scalars['String']['output'];
    cup_name: Maybe<Scalars['String']['output']>;
    cup_result: Maybe<Scalars['String']['output']>;
    description: Scalars['String']['output'];
    hidden: Scalars['Boolean']['output'];
    international_name: Maybe<Scalars['String']['output']>;
    international_result: Maybe<Scalars['String']['output']>;
    league_name: Maybe<Scalars['String']['output']>;
    league_rank: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    required_achievement_id: Maybe<Scalars['String']['output']>;
    set_year: Maybe<Scalars['Int']['output']>;
};

export type CardSetUnlockedEventDetails = {
    card_set_id: Scalars['String']['output'];
    event_type: EventType;
};

export type ClaimAchievementRewardResult = {
    already_claimed_reward_error: Maybe<AlreadyClaimedRewardError>;
    not_yet_completed_error: Maybe<NotYetCompletedError>;
    rewards: Array<RewardTransaction>;
};

export type ClaimInSeasonRewardResult = {
    invalid_reward_error: Maybe<InvalidRewardError>;
    not_enough_status_points_error: Maybe<NotEnoughStatusPointsError>;
    rewards: Array<RewardTransaction>;
};

export type ClaimLootboxRewardsResult = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type ClaimRewardResult = {
    missing_claim_id_error: Maybe<MissingClaimIdError>;
    rewards: Maybe<Array<RewardTransaction>>;
};

export type ClosedVotingError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type CompletedFanAchievement = {
    achievement_id: Scalars['String']['output'];
    fan_id: Scalars['String']['output'];
};

export type CompletionDetails =
    | BasicCompletionDetails
    | ListCompletionDetails
    | NumericalCompletionDetails;

export type ConsumeRewardResult = {
    invalid_content_id: Maybe<InvalidContentIdError>;
    unknown_error: Maybe<UnkownError>;
};

export type Contact = {
    address: Address;
    contact_name: Maybe<Scalars['String']['output']>;
    email: Scalars['String']['output'];
    legal_name: Scalars['String']['output'];
};

export type ContactInput = {
    address: AddressInput;
    contact_name: InputMaybe<Scalars['String']['input']>;
    email: Scalars['String']['input'];
    legal_name: Scalars['String']['input'];
};

export type Content = Image | Post | Video;

export type ContentFeedItem = {
    consumption_reward: Scalars['Int']['output'];
    content: Content;
    content_id: Scalars['String']['output'];
    date_published: Scalars['String']['output'];
    views: Scalars['Int']['output'];
};

export type Coordinates = {
    latitude: Scalars['String']['output'];
    longitude: Scalars['String']['output'];
};

export type Coupon = {
    chosen_option: Maybe<Scalars['String']['output']>;
    coupon_type: CouponType;
    description: Scalars['String']['output'];
    discount: Scalars['Int']['output'];
    expiration_date: Scalars['String']['output'];
    is_distributed: Scalars['Boolean']['output'];
    monetary_value: Maybe<Scalars['Int']['output']>;
    options: Maybe<Array<Scalars['String']['output']>>;
    partner_id: Scalars['String']['output'];
    quality: Maybe<Scalars['String']['output']>;
    rarity: Rarity;
    redeemed: Scalars['Boolean']['output'];
    redemption_conditions: Maybe<RedemptionConditions>;
    reward_id: Scalars['String']['output'];
    reward_type: Scalars['String']['output'];
    s3_key_image: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
};

export type CouponClaimResult = {
    invalid_coupon_error: Maybe<InvalidCouponError>;
    too_few_available: Maybe<TooFewAvailableError>;
};

export type CouponConditionInput = {
    day_of_weeks: Array<Scalars['Int']['input']>;
    specific_dates: Array<Scalars['String']['input']>;
    time_conditions: Array<TimeConditionInput>;
};

export type CouponRedemptionResult = {
    already_redeemed_error: Maybe<AlreadyRedeemedError>;
    invalid_coupon_error: Maybe<InvalidCouponError>;
};

export enum CouponType {
    Default = 'default',
    Shop = 'shop',
}

export type DeleteSeasonResult = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type DeletionStatus = {
    status: Scalars['String']['output'];
};

export type DistributionDetails = {
    campaign_end: Maybe<Scalars['String']['output']>;
    campaign_start: Scalars['String']['output'];
    fan_segmentation: FanSegmentation;
    only_teasered: Maybe<Scalars['Boolean']['output']>;
    price_fan_points: Maybe<Scalars['Int']['output']>;
    required_status_points: Maybe<Scalars['Int']['output']>;
    total_amount_distributed: Maybe<Scalars['Long']['output']>;
    total_amount_to_distribute: Maybe<Scalars['Long']['output']>;
    total_amount_to_distribute_daily: Maybe<Scalars['Long']['output']>;
};

export type Employee = {
    employee_id: Scalars['String']['output'];
    employments: Array<Employment>;
    name: Scalars['String']['output'];
    surname: Scalars['String']['output'];
};

export type EmployeeDeletionStatus = {
    status: Scalars['String']['output'];
};

export type Employment = {
    partner_id: Scalars['String']['output'];
    role: Scalars['String']['output'];
};

export type EmploymentDeletionStatusloyment = {
    status: Scalars['String']['output'];
};

export type EmptyResult = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type EndOfSeasonReward = {
    is_guaranteed: Scalars['Boolean']['output'];
    price_value: Scalars['Int']['output'];
    required_trophy: Scalars['String']['output'];
    reward: Reward;
    season_id: Scalars['String']['output'];
};

export type Event = {
    date: Scalars['String']['output'];
    date_first_seen: Scalars['String']['output'];
    details: EventDetails;
    event_id: Scalars['String']['output'];
    fan_id: Scalars['String']['output'];
    has_shown_popup: Scalars['Boolean']['output'];
    path: Scalars['String']['output'];
    push_notification_sent: Scalars['Boolean']['output'];
};

export type EventDetails =
    | AchievementCompletedEventDetails
    | CardSetUnlockedEventDetails
    | FriendRequestEventDetails
    | MatchStatusChangedEventDetails
    | NewInSeasonRewardEventDetails
    | NewRewardEventDetails
    | NewShopProductEventDetails
    | NewTrophyEventDetails;

export enum EventType {
    AchievementCompleted = 'achievement_completed',
    CardSetUnlocked = 'card_set_unlocked',
    MatchStatusChanged = 'match_status_changed',
    NewCard = 'new_card',
    NewCardProgressLootbox = 'new_card_progress_lootbox',
    NewCoupon = 'new_coupon',
    NewExperience = 'new_experience',
    NewFanPoints = 'new_fan_points',
    NewFriendRequest = 'new_friend_request',
    NewInSeasonReward = 'new_in_season_reward',
    NewLootbox = 'new_lootbox',
    NewProduct = 'new_product',
    NewStatusPoints = 'new_status_points',
    NewTrophy = 'new_trophy',
}

export type ExpiredQrCodeError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type Fan = {
    fan_id: Scalars['String']['output'];
    num_coupons_redeemed_7d: Scalars['Int']['output'];
    num_coupons_redeemed_30d: Scalars['Int']['output'];
    num_coupons_redeemed_total: Scalars['Int']['output'];
    username: Scalars['String']['output'];
    verified: Scalars['String']['output'];
};

export type FanAchievement = {
    achievement_group_id: Scalars['String']['output'];
    achievement_id: Scalars['String']['output'];
    achievement_points: Scalars['Int']['output'];
    achievement_progression: Scalars['Int']['output'];
    category: Scalars['String']['output'];
    claimed_reward: Scalars['Boolean']['output'];
    completion_details: CompletionDetails;
    description: Scalars['String']['output'];
    fan_id: Scalars['String']['output'];
    num_card_packs: Scalars['Int']['output'];
    num_status_points: Scalars['Int']['output'];
    previous_achievements_in_group: Array<FanAchievement>;
    title: Scalars['String']['output'];
    unlocked_card_set_ids: Array<Scalars['String']['output']>;
};

export type FanBalance = {
    num_fan_points: Scalars['Int']['output'];
    num_status_points: Scalars['Int']['output'];
};

export type FanCardSet = {
    card_set_id: Scalars['String']['output'];
    collected_cards: Array<Card>;
    cup_name: Maybe<Scalars['String']['output']>;
    cup_result: Maybe<Scalars['String']['output']>;
    description: Scalars['String']['output'];
    fan_id: Scalars['String']['output'];
    hidden: Scalars['Boolean']['output'];
    international_name: Maybe<Scalars['String']['output']>;
    international_result: Maybe<Scalars['String']['output']>;
    league_name: Maybe<Scalars['String']['output']>;
    league_rank: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    num_collected_cards: Scalars['Int']['output'];
    num_common_cards: Scalars['Int']['output'];
    num_epic_cards: Scalars['Int']['output'];
    num_legendary_cards: Scalars['Int']['output'];
    num_rare_cards: Scalars['Int']['output'];
    num_total_cards: Scalars['Int']['output'];
    remaining_cards: Array<Card>;
    required_achievement_id: Maybe<Scalars['String']['output']>;
    set_year: Maybe<Scalars['Int']['output']>;
    unlocked: Scalars['Boolean']['output'];
};

export type FanPointsReward = {
    amount: Scalars['Int']['output'];
    reward_id: Scalars['String']['output'];
    reward_type: Scalars['String']['output'];
};

export type FanSeasonProgress = {
    current_trophy: Scalars['String']['output'];
    fan_id: Scalars['String']['output'];
    rank: Maybe<Scalars['Int']['output']>;
    season_percentile: Scalars['Int']['output'];
    season_status_points: Scalars['Int']['output'];
    username: Scalars['String']['output'];
};

export type FanSeasonProgressInput = {
    current_trophy: Scalars['String']['input'];
    fan_id: Scalars['String']['input'];
    rank: InputMaybe<Scalars['Int']['input']>;
    season_percentile: Scalars['Int']['input'];
    season_status_points: Scalars['Int']['input'];
    username: Scalars['String']['input'];
};

export type FanSegmentation = {
    age_groups: Array<Maybe<Scalars['String']['output']>>;
    visit_frequency_type: Scalars['String']['output'];
};

export type FanSegmentationInput = {
    age_groups: Array<InputMaybe<Scalars['String']['input']>>;
    visit_frequency_type: Scalars['String']['input'];
};

export type FanVoting = {
    details: Voting;
    fan_id: Scalars['String']['output'];
    has_voted: Scalars['Boolean']['output'];
    num_status_points_received: Maybe<Scalars['Int']['output']>;
    voted_for: Maybe<Scalars['String']['output']>;
};

export type FinishSeasonResult = {
    _empty: Maybe<Scalars['String']['output']>;
    invalid_season_error: Maybe<InvalidSeasonError>;
};

export type FriendRequestEventDetails = {
    event_type: EventType;
    requesting_fan_id: Scalars['String']['output'];
};

export type GeoFence = {
    geo_fence_id: Scalars['String']['output'];
    polygon_coordinates: Array<Coordinates>;
};

export type GetCurrentSeasonResult = {
    no_current_season_error: Maybe<NoCurrentSeasonError>;
    season: Maybe<Season>;
};

export type GetEndOfSeasonRewardsResult = {
    invalid_season_error: Maybe<InvalidSeasonError>;
    rewards: Maybe<Array<EndOfSeasonReward>>;
};

export type GetInSeasonRewardsResult = {
    invalid_season_error: Maybe<InvalidSeasonError>;
    rewards: Maybe<Array<InSeasonReward>>;
};

export type GetSeasonProgressResult = {
    invalid_season_error: Maybe<InvalidSeasonError>;
    no_current_season_error: Maybe<NoCurrentSeasonError>;
    progress: Maybe<FanSeasonProgress>;
};

export type GetTrophyRankingResult = {
    invalid_season_error: Maybe<InvalidSeasonError>;
    no_current_season_error: Maybe<NoCurrentSeasonError>;
    ranking: Maybe<Array<FanSeasonProgress>>;
};

export type GetUserResult = {
    user: Maybe<User>;
    user_not_found_error: Maybe<UserNotFoundError>;
};

export type Image = {
    content_type: Scalars['String']['output'];
    s3_keys_images: Array<Scalars['String']['output']>;
};

export type ImageBlock = {
    block_type: Scalars['String']['output'];
    image_url: Scalars['String']['output'];
};

export type InSeasonReward = {
    already_claimed: Scalars['Boolean']['output'];
    in_season_reward_id: Scalars['String']['output'];
    required_status_points: Scalars['Int']['output'];
    reward: Reward;
    season_id: Scalars['String']['output'];
};

export type InvalidActionError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidBirthdateError = {
    reason: Scalars['String']['output'];
};

export type InvalidContentIdError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidCouponError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidDatesError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidFriendError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidFriendRequestError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidLevelError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidLootboxError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidOptionError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidPlayersError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidQrCodeError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidRewardAmountError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidRewardError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidRewardIdError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidSeasonError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidSeasonIdError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidSkinError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidStatusPointsError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidTrophyError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidUsernameError = {
    reason: Scalars['String']['output'];
};

export type InvalidationResult = {
    _empty: Maybe<Scalars['String']['output']>;
};

export enum InvalidationType {
    PopupShown = 'popup_shown',
    RemoveFromOutstanding = 'remove_from_outstanding',
}

export type IssuePartnerRewardResult = {
    invalid_reward_amount_error: Maybe<InvalidRewardAmountError>;
    rewards: Maybe<Array<RewardTransaction>>;
};

export type LevelUpCardResult = {
    invalid_level_error: Maybe<InvalidLevelError>;
    invalid_reward_id_error: Maybe<InvalidRewardIdError>;
    too_few_cards_error: Maybe<TooFewCardsError>;
    unkown_error: Maybe<UnkownError>;
};

export type ListCompletionDetails = {
    completed: Scalars['Boolean']['output'];
    completion_date: Maybe<Scalars['String']['output']>;
    current: Array<Scalars['String']['output']>;
    target_items: Array<Scalars['String']['output']>;
    target_number: Maybe<Scalars['Int']['output']>;
};

export type LootBox = {
    lootbox_type: Scalars['String']['output'];
    opened: Scalars['Boolean']['output'];
    reward_id: Scalars['String']['output'];
    reward_type: Scalars['String']['output'];
};

export type Match = {
    current_extra_time: Scalars['Int']['output'];
    current_minute: Scalars['Int']['output'];
    date: Scalars['String']['output'];
    guest_team: Team;
    guest_team_result: Maybe<TeamResult>;
    home_team: Team;
    home_team_result: Maybe<TeamResult>;
    league: Scalars['String']['output'];
    status: Scalars['String']['output'];
};

export type MatchEvent = {
    extra_time: Scalars['Int']['output'];
    minute: Scalars['Int']['output'];
    player_name: Scalars['String']['output'];
};

export type MatchIdentifier = {
    match_id: Scalars['String']['output'];
};

export type MatchStatusChangedEventDetails = {
    event_type: EventType;
    match_id: Scalars['String']['output'];
    new_status: Scalars['String']['output'];
};

export type MissingClaimIdError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type ModifySeasonResult = {
    invalid_season_error: Maybe<InvalidSeasonError>;
    season: Maybe<Season>;
};

export type ModifyUserResult = {
    invalid_username_error: Maybe<InvalidUsernameError>;
    user_already_exists_error: Maybe<UserAlreadyExistsError>;
    user_not_found_error: Maybe<UserNotFoundError>;
};

export type Mutation = {
    _empty: Maybe<Scalars['String']['output']>;
    accept_friend_request: AcceptFriendRequestResult;
    add_card: Card;
    add_card_set: CardSet;
    add_employee: Employee;
    add_employment: Employment;
    add_partner: Partner;
    add_partner_coupon_campaign: RewardToDistribute;
    add_season: AddSeasonResult;
    add_shop_coupon: RewardToDistribute;
    add_user: AddUserResult;
    apply_skin: ApplySkinResult;
    buy_item: BuyItemResult;
    change_username: DeletionStatus;
    claim_achievement_reward: ClaimAchievementRewardResult;
    claim_coupon: CouponClaimResult;
    claim_in_season_reward: ClaimInSeasonRewardResult;
    claim_lootbox_rewards: ClaimLootboxRewardsResult;
    claim_reward: ClaimRewardResult;
    delete_card: DeletionStatus;
    delete_card_set: DeletionStatus;
    delete_employee: EmployeeDeletionStatus;
    delete_employment: EmploymentDeletionStatusloyment;
    delete_fan: DeletionStatus;
    delete_partner: PartnerDeletionStatus;
    delete_partner_coupon_campaign: DeletionStatus;
    delete_season: DeleteSeasonResult;
    enter_geo_fence: EmptyResult;
    finish_season: FinishSeasonResult;
    generate_qr_code: QrCode;
    invalidate_events: InvalidationResult;
    issue_partner_reward: IssuePartnerRewardResult;
    level_up_card: LevelUpCardResult;
    modify_card: Card;
    modify_card_set: CardSet;
    modify_employee: Employee;
    modify_employment: Employment;
    modify_partner: Partner;
    modify_partner_coupon_campaign: RewardToDistribute;
    modify_season: ModifySeasonResult;
    modify_shop_coupon: RewardToDistribute;
    modify_user: ModifyUserResult;
    open_lootbox: OpenLootBoxResult;
    refuse_friend_request: RefuseFriendRequestResult;
    register_action: RegisterActionResult;
    register_coupon_redemption: CouponRedemptionResult;
    register_opening: ConsumeRewardResult;
    remove_friend: RemoveFriendResult;
    send_friend_request: SendFriendRequestResult;
    set_as_in_season_reward: SetInSeasonRewardResult;
    set_offered_players: SetPlayersResult;
    set_wanted_players: SetPlayersResult;
    trigger_achievement_completed: Maybe<CompletedFanAchievement>;
    trigger_current_match: Maybe<MatchIdentifier>;
    trigger_goal_scored: Maybe<MatchEvent>;
    trigger_new_outstanding_events: Maybe<NewOutstandingEvents>;
    trigger_votings_changed: Maybe<MatchIdentifier>;
    unlock_area: EmptyResult;
    unset_as_in_season_reward: UnsetInSeasonRewardResult;
    vote: VoteResult;
};

export type MutationAccept_Friend_RequestArgs = {
    requested_fan_id: Scalars['String']['input'];
    requesting_fan_id: Scalars['String']['input'];
};

export type MutationAdd_CardArgs = {
    card_set_id: Scalars['String']['input'];
    height_cm: InputMaybe<Scalars['Int']['input']>;
    player_name: Scalars['String']['input'];
    player_position: Scalars['String']['input'];
    player_surname: Scalars['String']['input'];
    rarity: Rarity;
    weight_kg: InputMaybe<Scalars['Int']['input']>;
};

export type MutationAdd_Card_SetArgs = {
    cup_name: InputMaybe<Scalars['String']['input']>;
    cup_result: InputMaybe<Scalars['String']['input']>;
    description: Scalars['String']['input'];
    hidden: Scalars['Boolean']['input'];
    international_name: InputMaybe<Scalars['String']['input']>;
    international_result: InputMaybe<Scalars['String']['input']>;
    league_name: InputMaybe<Scalars['String']['input']>;
    league_rank: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
    required_achievement_id: InputMaybe<Scalars['String']['input']>;
    set_year: InputMaybe<Scalars['Int']['input']>;
};

export type MutationAdd_EmployeeArgs = {
    name: Scalars['String']['input'];
    surname: Scalars['String']['input'];
};

export type MutationAdd_EmploymentArgs = {
    employee_id: Scalars['String']['input'];
    partner_id: Scalars['String']['input'];
    role: Scalars['String']['input'];
};

export type MutationAdd_PartnerArgs = {
    billing_contact: ContactInput;
    description: Scalars['String']['input'];
    email: Scalars['String']['input'];
    general_contact: ContactInput;
    industry: Scalars['String']['input'];
    mailing_contact: ContactInput;
    name: Scalars['String']['input'];
    s3_key_logo: Scalars['String']['input'];
    s3_keys_images: Array<Scalars['String']['input']>;
    status: Scalars['String']['input'];
    stores: Array<StoreInput>;
    website: InputMaybe<Scalars['String']['input']>;
};

export type MutationAdd_Partner_Coupon_CampaignArgs = {
    campaign_end: InputMaybe<Scalars['String']['input']>;
    campaign_start: Scalars['String']['input'];
    coupon_type: CouponType;
    description: Scalars['String']['input'];
    discount: InputMaybe<Scalars['Int']['input']>;
    is_distributed: Scalars['Boolean']['input'];
    monetary_value: InputMaybe<Scalars['Int']['input']>;
    partner_id: Scalars['String']['input'];
    rarity: Rarity;
    redemption_conditions: RedemptionConditionsInput;
    s3_key_image: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
    total_amount_to_distribute: InputMaybe<Scalars['Long']['input']>;
    total_amount_to_distribute_daily: InputMaybe<Scalars['Long']['input']>;
};

export type MutationAdd_SeasonArgs = {
    end_of_season_purpose_bronze: Scalars['String']['input'];
    end_of_season_purpose_crystal: Scalars['String']['input'];
    end_of_season_purpose_diamond: Scalars['String']['input'];
    end_of_season_purpose_gold: Scalars['String']['input'];
    end_of_season_purpose_platinum: Scalars['String']['input'];
    end_of_season_purpose_silver: Scalars['String']['input'];
    season_ending_date: Scalars['String']['input'];
    season_name: Scalars['String']['input'];
    season_start_date: Scalars['String']['input'];
};

export type MutationAdd_Shop_CouponArgs = {
    campaign_start: Scalars['String']['input'];
    description: Scalars['String']['input'];
    is_experience: Scalars['Boolean']['input'];
    only_teasered: InputMaybe<Scalars['Boolean']['input']>;
    options: InputMaybe<Array<Scalars['String']['input']>>;
    partner_id: Scalars['String']['input'];
    price_fan_points: Scalars['Int']['input'];
    quality: Scalars['String']['input'];
    redemption_conditions: RedemptionConditionsInput;
    required_status_points: Scalars['Int']['input'];
    s3_key_image: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
    total_amount_to_distribute: InputMaybe<Scalars['Long']['input']>;
};

export type MutationAdd_UserArgs = {
    birthdate: Scalars['String']['input'];
    user_id: Scalars['String']['input'];
    username: Scalars['String']['input'];
};

export type MutationApply_SkinArgs = {
    fan_id: Scalars['String']['input'];
    reward_id: Scalars['String']['input'];
};

export type MutationBuy_ItemArgs = {
    chosen_option: InputMaybe<Scalars['String']['input']>;
    fan_id: Scalars['String']['input'];
    reward_id: Scalars['String']['input'];
};

export type MutationChange_UsernameArgs = {
    fan_id: Scalars['String']['input'];
    new_username: Scalars['String']['input'];
};

export type MutationClaim_Achievement_RewardArgs = {
    achievement_id: Scalars['String']['input'];
    fan_id: Scalars['String']['input'];
};

export type MutationClaim_CouponArgs = {
    fan_id: Scalars['String']['input'];
    partner_id: Scalars['String']['input'];
    reward_id: Scalars['String']['input'];
};

export type MutationClaim_In_Season_RewardArgs = {
    fan_id: Scalars['String']['input'];
    in_season_reward_id: Scalars['String']['input'];
    reward_id: Scalars['String']['input'];
    season_id: Scalars['String']['input'];
};

export type MutationClaim_Lootbox_RewardsArgs = {
    fan_id: Scalars['String']['input'];
    rewards_transaction_group_id: Scalars['String']['input'];
};

export type MutationClaim_RewardArgs = {
    claim_id: InputMaybe<Scalars['String']['input']>;
    fan_id: Scalars['String']['input'];
    reward_purpose: Scalars['String']['input'];
};

export type MutationDelete_CardArgs = {
    reward_id: Scalars['String']['input'];
};

export type MutationDelete_Card_SetArgs = {
    card_set_id: Scalars['String']['input'];
};

export type MutationDelete_EmploymentArgs = {
    employee_id: Scalars['String']['input'];
    partner_id: Scalars['String']['input'];
};

export type MutationDelete_FanArgs = {
    fan_id: Scalars['String']['input'];
};

export type MutationDelete_PartnerArgs = {
    partner_id: Scalars['String']['input'];
};

export type MutationDelete_Partner_Coupon_CampaignArgs = {
    partner_id: Scalars['String']['input'];
    reward_id: Scalars['String']['input'];
};

export type MutationDelete_SeasonArgs = {
    season_id: Scalars['String']['input'];
};

export type MutationEnter_Geo_FenceArgs = {
    fan_id: Scalars['String']['input'];
    geo_fence_id: Scalars['String']['input'];
};

export type MutationFinish_SeasonArgs = {
    season_id: Scalars['String']['input'];
};

export type MutationGenerate_Qr_CodeArgs = {
    action_data: Scalars['String']['input'];
    action_type: Scalars['String']['input'];
    generating_user_id: Scalars['String']['input'];
};

export type MutationInvalidate_EventsArgs = {
    event_type: InputMaybe<EventType>;
    fan_id: Scalars['String']['input'];
    invalidation_type: InvalidationType;
    path_prefix: Scalars['String']['input'];
};

export type MutationIssue_Partner_RewardArgs = {
    fan_id: Scalars['String']['input'];
    num_fan_points: Scalars['Int']['input'];
    num_lootboxes: Scalars['Int']['input'];
    partner_id: Scalars['String']['input'];
};

export type MutationLevel_Up_CardArgs = {
    card_level: Scalars['Int']['input'];
    fan_id: Scalars['String']['input'];
    reward_id: Scalars['String']['input'];
};

export type MutationModify_CardArgs = {
    card_set_id: Scalars['String']['input'];
    height_cm: InputMaybe<Scalars['Int']['input']>;
    player_name: Scalars['String']['input'];
    player_position: Scalars['String']['input'];
    player_surname: Scalars['String']['input'];
    rarity: Rarity;
    reward_id: Scalars['String']['input'];
    weight_kg: InputMaybe<Scalars['Int']['input']>;
};

export type MutationModify_Card_SetArgs = {
    card_set_id: Scalars['String']['input'];
    cup_name: InputMaybe<Scalars['String']['input']>;
    cup_result: InputMaybe<Scalars['String']['input']>;
    description: Scalars['String']['input'];
    hidden: Scalars['Boolean']['input'];
    international_name: InputMaybe<Scalars['String']['input']>;
    international_result: InputMaybe<Scalars['String']['input']>;
    league_name: InputMaybe<Scalars['String']['input']>;
    league_rank: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
    required_achievement_id: InputMaybe<Scalars['String']['input']>;
    set_year: InputMaybe<Scalars['Int']['input']>;
};

export type MutationModify_EmployeeArgs = {
    employee_id: Scalars['String']['input'];
    name: Scalars['String']['input'];
    surname: Scalars['String']['input'];
};

export type MutationModify_EmploymentArgs = {
    employee_id: Scalars['String']['input'];
    partner_id: Scalars['String']['input'];
    role: Scalars['String']['input'];
};

export type MutationModify_PartnerArgs = {
    billing_contact: ContactInput;
    description: Scalars['String']['input'];
    email: Scalars['String']['input'];
    general_contact: ContactInput;
    industry: Scalars['String']['input'];
    mailing_contact: ContactInput;
    name: Scalars['String']['input'];
    partner_id: Scalars['String']['input'];
    s3_key_logo: Scalars['String']['input'];
    s3_keys_images: Array<Scalars['String']['input']>;
    status: Scalars['String']['input'];
    stores: Array<StoreInput>;
    website: InputMaybe<Scalars['String']['input']>;
};

export type MutationModify_Partner_Coupon_CampaignArgs = {
    coupon_type: CouponType;
    description: Scalars['String']['input'];
    discount: Scalars['Int']['input'];
    monetary_value: InputMaybe<Scalars['Int']['input']>;
    partner_id: Scalars['String']['input'];
    rarity: Rarity;
    redemption_conditions: RedemptionConditionsInput;
    reward_id: Scalars['String']['input'];
    s3_key_image: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
};

export type MutationModify_SeasonArgs = {
    end_of_season_purpose_bronze: Scalars['String']['input'];
    end_of_season_purpose_crystal: Scalars['String']['input'];
    end_of_season_purpose_diamond: Scalars['String']['input'];
    end_of_season_purpose_gold: Scalars['String']['input'];
    end_of_season_purpose_platinum: Scalars['String']['input'];
    end_of_season_purpose_silver: Scalars['String']['input'];
    season_id: Scalars['String']['input'];
    season_name: Scalars['String']['input'];
};

export type MutationModify_Shop_CouponArgs = {
    description: Scalars['String']['input'];
    monetary_value: InputMaybe<Scalars['Int']['input']>;
    only_teasered: InputMaybe<Scalars['Boolean']['input']>;
    options: InputMaybe<Array<Scalars['String']['input']>>;
    partner_id: Scalars['String']['input'];
    price_fan_points: Scalars['Int']['input'];
    quality: Scalars['String']['input'];
    redemption_conditions: RedemptionConditionsInput;
    required_status_points: Scalars['Int']['input'];
    reward_id: Scalars['String']['input'];
    s3_key_image: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
};

export type MutationModify_UserArgs = {
    icon_id: Scalars['Int']['input'];
    user_id: Scalars['String']['input'];
    username: Scalars['String']['input'];
};

export type MutationOpen_LootboxArgs = {
    fan_id: Scalars['String']['input'];
    transaction_group_id: Scalars['String']['input'];
    transaction_nr: Scalars['Int']['input'];
};

export type MutationRefuse_Friend_RequestArgs = {
    requested_fan_id: Scalars['String']['input'];
    requesting_fan_id: Scalars['String']['input'];
};

export type MutationRegister_ActionArgs = {
    action: Scalars['String']['input'];
    user_id: Scalars['String']['input'];
};

export type MutationRegister_Coupon_RedemptionArgs = {
    fan_id: Scalars['String']['input'];
    partner_id: Scalars['String']['input'];
    transaction_group_id: Scalars['String']['input'];
    transaction_nr: Scalars['Int']['input'];
    transaction_type: Scalars['String']['input'];
};

export type MutationRegister_OpeningArgs = {
    content_id: Scalars['String']['input'];
    date_published: Scalars['String']['input'];
};

export type MutationRemove_FriendArgs = {
    fan_id: Scalars['String']['input'];
    friend_id: Scalars['String']['input'];
};

export type MutationSend_Friend_RequestArgs = {
    fan_id: Scalars['String']['input'];
    friend_id: InputMaybe<Scalars['String']['input']>;
    friend_username: InputMaybe<Scalars['String']['input']>;
};

export type MutationSet_As_In_Season_RewardArgs = {
    required_status_points: Scalars['Int']['input'];
    reward_id: Scalars['String']['input'];
    season_id: Scalars['String']['input'];
};

export type MutationSet_Offered_PlayersArgs = {
    fan_id: Scalars['String']['input'];
    players: Array<OfferedPlayerInput>;
};

export type MutationSet_Wanted_PlayersArgs = {
    fan_id: Scalars['String']['input'];
    players: Array<WantedPlayerInput>;
};

export type MutationTrigger_Achievement_CompletedArgs = {
    achievement_id: Scalars['String']['input'];
    fan_id: Scalars['String']['input'];
};

export type MutationTrigger_Current_MatchArgs = {
    match_id: Scalars['String']['input'];
};

export type MutationTrigger_New_Outstanding_EventsArgs = {
    fan_id: Scalars['String']['input'];
};

export type MutationTrigger_Votings_ChangedArgs = {
    match_id: Scalars['String']['input'];
};

export type MutationUnlock_AreaArgs = {
    area_id: Scalars['String']['input'];
    fan_id: Scalars['String']['input'];
};

export type MutationUnset_As_In_Season_RewardArgs = {
    reward_id: Scalars['String']['input'];
    season_id: Scalars['String']['input'];
};

export type MutationVoteArgs = {
    fan_id: Scalars['String']['input'];
    match_id: Scalars['String']['input'];
    voted_for: Scalars['String']['input'];
    voting_id: Scalars['String']['input'];
};

export type MysteryCard = {
    coordinates: Coordinates;
    creation_date: Scalars['String']['output'];
    mystery_card_id: Scalars['String']['output'];
};

export type NewInSeasonRewardEventDetails = {
    event_type: EventType;
};

export type NewOutstandingEvents = {
    fan_id: Scalars['String']['output'];
};

export type NewRewardEventDetails = {
    event_type: EventType;
    reward_id: Scalars['String']['output'];
};

export type NewShopProductEventDetails = {
    event_type: EventType;
    reward_id: Scalars['String']['output'];
};

export type NewTrophyEventDetails = {
    event_type: EventType;
    new_trophy: Scalars['String']['output'];
};

export type NoCurrentSeasonError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type NotEnoughStatusPointsError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type NotYetCompletedError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type NumericalCompletionDetails = {
    completed: Scalars['Boolean']['output'];
    completion_date: Maybe<Scalars['String']['output']>;
    current: Scalars['Int']['output'];
    target: Scalars['Int']['output'];
};

export type OfferedPlayer = {
    card_id: Scalars['String']['output'];
    fan_wants: Scalars['Boolean']['output'];
};

export type OfferedPlayerInput = {
    card_id: Scalars['String']['input'];
    fan_wants: Scalars['Boolean']['input'];
};

export type OpenLootBoxResult = {
    already_opened_lootbox_error: Maybe<AlreadyRedeemedError>;
    invalid_lootbox_error: Maybe<InvalidLootboxError>;
    rewards: Array<RewardTransaction>;
};

export type ParagraphBlock = {
    block_type: Scalars['String']['output'];
    content: Scalars['String']['output'];
};

export type Partner = {
    billing_contact: Contact;
    description: Scalars['String']['output'];
    email: Scalars['String']['output'];
    general_contact: Contact;
    industry: Scalars['String']['output'];
    mailing_contact: Contact;
    name: Scalars['String']['output'];
    num_coupon_campaigns_7d: Scalars['Int']['output'];
    num_coupon_campaigns_30d: Scalars['Int']['output'];
    num_coupon_campaigns_total: Scalars['Int']['output'];
    num_distributed_coupons_7d: Scalars['Int']['output'];
    num_distributed_coupons_30d: Scalars['Int']['output'];
    num_distributed_coupons_total: Scalars['Int']['output'];
    num_redeemed_coupons_7d: Scalars['Int']['output'];
    num_redeemed_coupons_30d: Scalars['Int']['output'];
    num_redeemed_coupons_total: Scalars['Int']['output'];
    partner_id: Scalars['String']['output'];
    rating: Scalars['Float']['output'];
    s3_key_logo: Scalars['String']['output'];
    s3_keys_images: Array<Scalars['String']['output']>;
    status: Scalars['String']['output'];
    stores: Array<Store>;
    website: Maybe<Scalars['String']['output']>;
};

export type PartnerDeletionStatus = {
    status: Scalars['String']['output'];
};

export type Post = {
    blocks: Array<PostBlock>;
    content_type: Scalars['String']['output'];
    s3_key_header_image: Scalars['String']['output'];
    title: Scalars['String']['output'];
};

export type PostBlock =
    | ImageBlock
    | ParagraphBlock
    | QuoteBlock
    | SubtitleBlock
    | VideoBlock;

export type QrCode = {
    action_data: Scalars['String']['output'];
    action_type: Scalars['String']['output'];
    expiration_date: Scalars['String']['output'];
    generating_user_id: Scalars['String']['output'];
    qr_id: Scalars['String']['output'];
};

export type Query = {
    _empty: Maybe<Scalars['String']['output']>;
    echo: Scalars['String']['output'];
    get_all_employees: Array<Employee>;
    get_all_fans: Array<Fan>;
    get_all_partners: Array<Partner>;
    get_all_seasons: Array<Season>;
    get_areas: Array<Area>;
    get_best_end_of_season_rewards: GetEndOfSeasonRewardsResult;
    get_card_lootbox_progress: CardLootboxProgress;
    get_content_feed: Array<ContentFeedItem>;
    get_current_match: Maybe<Match>;
    get_current_mystery_cards: Array<MysteryCard>;
    get_current_season: GetCurrentSeasonResult;
    get_employee: Employee;
    get_employments: Array<Employment>;
    get_fan_achievement: FanAchievement;
    get_fan_achievements: Array<FanAchievement>;
    get_fan_balance: FanBalance;
    get_fan_card: Card;
    get_fan_card_set: FanCardSet;
    get_fan_card_sets: Array<FanCardSet>;
    get_fan_coupons: Array<RewardTransaction>;
    get_fan_lootboxes: Array<RewardTransaction>;
    get_fan_shop_coupons: Array<Coupon>;
    get_fan_skins: Array<Skin>;
    get_finished_votings: Array<FanVoting>;
    get_friend: User;
    get_friends: Array<User>;
    get_geo_fences: Array<GeoFence>;
    get_guaranteed_end_of_season_rewards: GetEndOfSeasonRewardsResult;
    get_in_season_rewards: GetInSeasonRewardsResult;
    get_league_standings: Array<TeamStanding>;
    get_matching_users: Array<User>;
    get_non_guaranteed_end_of_season_rewards: GetEndOfSeasonRewardsResult;
    get_open_votings: Array<FanVoting>;
    get_outstanding_events: Array<Event>;
    get_partner: Partner;
    get_partner_coupon_campaigns: Array<RewardToDistribute>;
    get_previous_matches: Array<Match>;
    get_received_friend_requests: Array<User>;
    get_season_progress: GetSeasonProgressResult;
    get_sent_friend_requests: Array<User>;
    get_shop_experiences: Array<RewardToDistribute>;
    get_shop_products: Array<RewardToDistribute>;
    get_trophy_ranking: GetTrophyRankingResult;
    get_upcoming_matches: Array<Match>;
    get_user_by_id: GetUserResult;
    get_user_by_username: GetUserResult;
    is_new_reward_available: CanClaimRewardResult;
    send_notification: Scalars['String']['output'];
    verify_qr_code: VerifyQrCodeResult;
};

export type QueryEchoArgs = {
    message: Scalars['String']['input'];
};

export type QueryGet_All_EmployeesArgs = {
    partner_id: Scalars['String']['input'];
};

export type QueryGet_AreasArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Best_End_Of_Season_RewardsArgs = {
    num_results: Scalars['Int']['input'];
    season_id: Scalars['String']['input'];
};

export type QueryGet_Card_Lootbox_ProgressArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Current_Mystery_CardsArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_EmployeeArgs = {
    employee_id: Scalars['String']['input'];
};

export type QueryGet_EmploymentsArgs = {
    employee_id: Scalars['String']['input'];
};

export type QueryGet_Fan_AchievementArgs = {
    achievement_id: Scalars['String']['input'];
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Fan_AchievementsArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Fan_BalanceArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Fan_CardArgs = {
    fan_id: Scalars['String']['input'];
    reward_id: Scalars['String']['input'];
};

export type QueryGet_Fan_Card_SetArgs = {
    card_set_id: Scalars['String']['input'];
    fan_id: Scalars['String']['input'];
    return_collected_cards: Scalars['Boolean']['input'];
    return_remaining_cards: Scalars['Boolean']['input'];
};

export type QueryGet_Fan_Card_SetsArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Fan_CouponsArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Fan_LootboxesArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Fan_Shop_CouponsArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Fan_SkinsArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Finished_VotingsArgs = {
    fan_id: Scalars['String']['input'];
    match_id: Scalars['String']['input'];
};

export type QueryGet_FriendArgs = {
    fan_id: Scalars['String']['input'];
    friend_id: Scalars['String']['input'];
};

export type QueryGet_FriendsArgs = {
    fan_id: Scalars['String']['input'];
    page_size: InputMaybe<Scalars['Int']['input']>;
    page_start_index: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGet_Guaranteed_End_Of_Season_RewardsArgs = {
    season_id: Scalars['String']['input'];
    trophy: Scalars['String']['input'];
};

export type QueryGet_In_Season_RewardsArgs = {
    fan_id: Scalars['String']['input'];
    season_id: Scalars['String']['input'];
};

export type QueryGet_Matching_UsersArgs = {
    query: Scalars['String']['input'];
};

export type QueryGet_Non_Guaranteed_End_Of_Season_RewardsArgs = {
    season_id: Scalars['String']['input'];
    trophy: Scalars['String']['input'];
};

export type QueryGet_Open_VotingsArgs = {
    fan_id: Scalars['String']['input'];
    match_id: Scalars['String']['input'];
};

export type QueryGet_Outstanding_EventsArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_PartnerArgs = {
    partner_id: Scalars['String']['input'];
};

export type QueryGet_Partner_Coupon_CampaignsArgs = {
    partner_id: Scalars['String']['input'];
};

export type QueryGet_Received_Friend_RequestsArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Season_ProgressArgs = {
    fan_id: Scalars['String']['input'];
    season_id: InputMaybe<Scalars['String']['input']>;
};

export type QueryGet_Sent_Friend_RequestsArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Shop_ExperiencesArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Shop_ProductsArgs = {
    fan_id: Scalars['String']['input'];
};

export type QueryGet_Trophy_RankingArgs = {
    last_returned_rank: InputMaybe<FanSeasonProgressInput>;
    page_size: Scalars['Int']['input'];
    season_id: InputMaybe<Scalars['String']['input']>;
    trophy: Scalars['String']['input'];
};

export type QueryGet_User_By_IdArgs = {
    user_id: Scalars['String']['input'];
};

export type QueryGet_User_By_UsernameArgs = {
    username: Scalars['String']['input'];
};

export type QueryIs_New_Reward_AvailableArgs = {
    claim_id: InputMaybe<Scalars['String']['input']>;
    fan_id: Scalars['String']['input'];
    reward_purpose: Scalars['String']['input'];
};

export type QuerySend_NotificationArgs = {
    body: Scalars['String']['input'];
    delay_seconds: Scalars['Int']['input'];
    title: Scalars['String']['input'];
    user_id: Scalars['String']['input'];
};

export type QueryVerify_Qr_CodeArgs = {
    qr_id: Scalars['String']['input'];
    verifying_user_id: Scalars['String']['input'];
};

export type QuoteBlock = {
    attribution: Maybe<Scalars['String']['output']>;
    block_type: Scalars['String']['output'];
    content: Scalars['String']['output'];
};

export enum Rarity {
    Common = 'common',
    Epic = 'epic',
    Legendary = 'legendary',
    Rare = 'rare',
}

export type RedemptionConditions = {
    end_time: Maybe<Scalars['Float']['output']>;
    manual_conditions: Maybe<Array<Scalars['String']['output']>>;
    start_time: Maybe<Scalars['Float']['output']>;
    weekday: Maybe<Scalars['Int']['output']>;
};

export type RedemptionConditionsInput = {
    end_time: InputMaybe<Scalars['Float']['input']>;
    manual_conditions: InputMaybe<Array<Scalars['String']['input']>>;
    start_time: InputMaybe<Scalars['Float']['input']>;
    weekday: InputMaybe<Scalars['Int']['input']>;
};

export type RefuseFriendRequestResult = {
    invalid_friend_error: Maybe<InvalidFriendError>;
    invalid_friend_request_error: Maybe<InvalidFriendRequestError>;
};

export type RegisterActionResult = {
    invalid_action_error: Maybe<InvalidActionError>;
};

export type RemoveFriendResult = {
    invalid_friend_error: Maybe<InvalidFriendError>;
};

export type Reward =
    | Card
    | Coupon
    | FanPointsReward
    | LootBox
    | StatusPointsReward;

export type RewardToDistribute = {
    balance: Scalars['Long']['output'];
    distribution_policy: DistributionDetails;
    owner_id: Scalars['String']['output'];
    reward_id: Scalars['String']['output'];
    reward_type: Scalars['String']['output'];
    template: Maybe<Reward>;
};

export type RewardTransaction = {
    claimed_date: Maybe<Scalars['String']['output']>;
    details: TransactionDetails;
    group_id: Scalars['String']['output'];
    group_size: Scalars['Int']['output'];
    key: Scalars['String']['output'];
    nr: Scalars['Int']['output'];
    old_owner_id: Scalars['String']['output'];
    only_reserved: Scalars['Boolean']['output'];
    owner_id: Scalars['String']['output'];
    reservation_date: Maybe<Scalars['String']['output']>;
    reward: Reward;
};

export type Season = {
    end_of_season_purpose_bronze: Scalars['String']['output'];
    end_of_season_purpose_crystal: Scalars['String']['output'];
    end_of_season_purpose_diamond: Scalars['String']['output'];
    end_of_season_purpose_gold: Scalars['String']['output'];
    end_of_season_purpose_platinum: Scalars['String']['output'];
    end_of_season_purpose_silver: Scalars['String']['output'];
    season_ending_date: Scalars['String']['output'];
    season_id: Scalars['String']['output'];
    season_name: Scalars['String']['output'];
    season_start_date: Scalars['String']['output'];
};

export type SendFriendRequestResult = {
    invalid_friend_error: Maybe<InvalidFriendError>;
};

export type SetInSeasonRewardResult = {
    invalid_reward_id_error: Maybe<InvalidRewardIdError>;
    invalid_season_id_error: Maybe<InvalidSeasonIdError>;
    invalid_status_points_error: Maybe<InvalidStatusPointsError>;
};

export type SetPlayersResult = {
    invalid_players_error: Maybe<InvalidPlayersError>;
};

export type Skin = {
    applied: Scalars['Boolean']['output'];
    reward_id: Scalars['String']['output'];
    skin_name: Scalars['String']['output'];
};

export type StatusPointsReward = {
    amount: Scalars['Int']['output'];
    reward_id: Scalars['String']['output'];
    reward_type: Scalars['String']['output'];
};

export type Store = {
    address: Address;
    area_id: Scalars['String']['output'];
    coordinates: Coordinates;
    name: Scalars['String']['output'];
};

export type StoreInput = {
    address: AddressInput;
    name: Scalars['String']['input'];
};

export type Subscription = {
    _empty: Maybe<Scalars['String']['output']>;
    achievement_completed: Maybe<CompletedFanAchievement>;
    current_match: Maybe<MatchIdentifier>;
    goal_scored: Maybe<MatchEvent>;
    new_outstanding_events: Maybe<NewOutstandingEvents>;
    votings_changed: Maybe<MatchIdentifier>;
};

export type SubscriptionAchievement_CompletedArgs = {
    fan_id: Scalars['String']['input'];
};

export type SubscriptionNew_Outstanding_EventsArgs = {
    fan_id: Scalars['String']['input'];
};

export type SubtitleBlock = {
    block_type: Scalars['String']['output'];
    content: Scalars['String']['output'];
};

export type Team = {
    is_fcb_men: Scalars['Boolean']['output'];
    is_fcb_women: Scalars['Boolean']['output'];
    logo_url: Scalars['String']['output'];
    name: Scalars['String']['output'];
    team_id: Scalars['String']['output'];
};

export type TeamResult = {
    red_cards: Array<MatchEvent>;
    scores: Array<MatchEvent>;
    yellow_cards: Array<MatchEvent>;
};

export type TeamStanding = {
    drawn: Scalars['Int']['output'];
    games_played: Scalars['Int']['output'];
    goal_difference: Scalars['Int']['output'];
    goals_against: Scalars['Int']['output'];
    goals_for: Scalars['Int']['output'];
    last_5: Array<Scalars['String']['output']>;
    league: Scalars['String']['output'];
    lost: Scalars['Int']['output'];
    points: Scalars['Int']['output'];
    position: Scalars['Int']['output'];
    team: Team;
    won: Scalars['Int']['output'];
};

export type TimeConditionInput = {
    end_time: Scalars['Float']['input'];
    start_time: Scalars['Float']['input'];
};

export type TooFewAvailableError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type TooFewCardsError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type TooFewFanPointsError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type TooFewStatusPointsError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type TransactionDetails = {
    transaction_type: Scalars['String']['output'];
};

export type UnknownVotingError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type UnkownError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type UnsetInSeasonRewardResult = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type User = {
    birthdate: Scalars['String']['output'];
    icon_id: Scalars['Int']['output'];
    num_cards: Scalars['Int']['output'];
    num_fan_points: Scalars['Int']['output'];
    num_status_points: Scalars['Int']['output'];
    offered_players: Array<OfferedPlayer>;
    user_id: Scalars['String']['output'];
    username: Scalars['String']['output'];
    wanted_players: Array<WantedPlayer>;
};

export type UserAlreadyExistsError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type UserNotFoundError = {
    _empty: Maybe<Scalars['String']['output']>;
};

export type VerifyQrCodeResult = {
    expired_qr_code_error: Maybe<ExpiredQrCodeError>;
    invalid_qr_code_error: Maybe<InvalidQrCodeError>;
    qr_code: Maybe<QrCode>;
};

export type Video = {
    content_type: Scalars['String']['output'];
    stream_url: Scalars['String']['output'];
    title: Scalars['String']['output'];
};

export type VideoBlock = {
    block_type: Scalars['String']['output'];
    stream_url: Scalars['String']['output'];
};

export type VoteResult = {
    closed_voting_error: Maybe<ClosedVotingError>;
    unknown_voting_error: Maybe<UnknownVotingError>;
};

export type Voting = {
    date: Scalars['String']['output'];
    match_at_creation: Match;
    match_id: Scalars['String']['output'];
    open_until: Scalars['String']['output'];
    option_a: Scalars['String']['output'];
    option_b: Scalars['String']['output'];
    question: Scalars['String']['output'];
    resolution_status: Scalars['String']['output'];
    s3_key_sponsor_logo: Scalars['String']['output'];
    sponsor_name: Scalars['String']['output'];
    votes_option_a: Scalars['Int']['output'];
    votes_option_b: Scalars['Int']['output'];
    voting_id: Scalars['String']['output'];
};

export type WantedPlayer = {
    card_id: Scalars['String']['output'];
    fan_owns: Scalars['Boolean']['output'];
};

export type WantedPlayerInput = {
    card_id: Scalars['String']['input'];
    fan_owns: Scalars['Boolean']['input'];
};

export type Get_Fan_SkinsQueryVariables = Exact<{
    fan_id: Scalars['String']['input'];
}>;

export type Get_Fan_SkinsQuery = {
    get_fan_skins: Array<{
        reward_id: string;
        skin_name: string;
        applied: boolean;
    }>;
};

export const Get_Fan_SkinsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'get_fan_skins' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'fan_id' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'get_fan_skins' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'fan_id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'fan_id' },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reward_id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'skin_name' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'applied' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<Get_Fan_SkinsQuery, Get_Fan_SkinsQueryVariables>;
