import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Long: { input: any; output: any; }
};

export type AcceptPartnershipRequestResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type AcceptProposedPartnershipModuleErrors = {
  invalid_module_id_error: Maybe<InvalidModuleIdError>;
  unknown_partnership_error: Maybe<UnknownPartnershipError>;
};

export type AcceptProposedPartnershipModuleResult = {
  errors: Maybe<AcceptProposedPartnershipModuleErrors>;
};

export type AchievementCategory =
  | 'collection'
  | 'esports'
  | 'exploration'
  | 'general'
  | 'rare'
  | 'social';

export type AchievementTemplate = {
  achievement_id: Scalars['String']['output'];
  achievement_points: Scalars['Int']['output'];
  aggregate_type: AggregateType;
  category: AchievementCategory;
  description: Scalars['String']['output'];
  num_status_points: Scalars['Int']['output'];
  relevant_event_type: Scalars['String']['output'];
  target: Maybe<Scalars['Int']['output']>;
  target_items: Maybe<Array<Scalars['String']['output']>>;
  target_number: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
};

export type AddProductResult = {
  result: Product;
};

export type AddProjectAchievementTemplateErrors = {
  invalid_reward_error: Maybe<InvalidRewardError>;
  invalid_target_error: Maybe<InvalidTargetError>;
};

export type AddProjectAchievementTemplateResult = {
  errors: Maybe<AddProjectAchievementTemplateErrors>;
  result: Maybe<AchievementTemplate>;
};

export type AddPromotionDistributionPolicyErrors = {
  invalid_period_error: Maybe<InvalidPeriodError>;
  invalid_reward_amount_error: Maybe<InvalidRewardAmountError>;
  unknown_product_error: Maybe<UnknownProductError>;
};

export type AddPromotionDistributionPolicyResult = {
  errors: Maybe<AddPromotionDistributionPolicyErrors>;
  result: Maybe<RewardToDistribute>;
};

export type AddShopDistributionPolicyErrors = {
  invalid_period_error: Maybe<InvalidPeriodError>;
  invalid_prize_error: Maybe<InvalidRewardAmountError>;
  invalid_reward_amount_error: Maybe<InvalidRewardAmountError>;
  unknown_product_error: Maybe<UnknownProductError>;
};

export type AddShopDistributionPolicyResult = {
  errors: Maybe<AddShopDistributionPolicyErrors>;
  result: Maybe<RewardToDistribute>;
};

export type AddStoreErrors = {
  invalid_address_error: Maybe<InvalidAddressError>;
  invalid_name_error: Maybe<InvalidNameError>;
};

export type AddStoreResult = {
  errors: Maybe<AddStoreErrors>;
  result: Maybe<Store>;
};

export type AddUserErrors = {
  invalid_mail_address_error: Maybe<InvalidMailAddressError>;
  invalid_user_id_error: Maybe<InvalidUserIdError>;
  user_already_exists_error: Maybe<UserAlreadyExistsError>;
};

export type AddUserResult = {
  errors: Maybe<AddUserErrors>;
  result: Maybe<User>;
};

export type Address = {
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  street: Scalars['String']['output'];
  zip_code: Scalars['String']['output'];
};

export type AddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  street: Scalars['String']['input'];
  zip_code: Scalars['String']['input'];
};

export type Aggregate = {
  date: Scalars['String']['output'];
  metric: Scalars['String']['output'];
  period: Period;
  value: Scalars['Float']['output'];
};

export type AggregateType =
  | 'basic'
  | 'list'
  | 'numerical';

export type AlreadyExecutedError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type AlreadyOpenedError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type ApprovalStatus =
  | 'approved'
  | 'pending'
  | 'rejected';

export type ApproveDistributionPolicyErrors = {
  unknown_product_error: Maybe<UnknownProductError>;
};

export type ApproveDistributionPolicyResult = {
  errors: Maybe<ApproveDistributionPolicyErrors>;
};

export type ApproveProductErrors = {
  unknown_product_error: Maybe<UnknownProductError>;
};

export type ApproveProductResult = {
  errors: Maybe<ApproveProductErrors>;
};

export type AuctionResultStatus =
  | 'distributed'
  | 'not_yet_distributed'
  | 'too_few_available'
  | 'too_few_bids';

export type BackendUserInvitation = {
  role: Role;
  username: Scalars['String']['output'];
};

export type BasicDistributionPolicy = {
  campaign_end: Maybe<Scalars['String']['output']>;
  campaign_start: Maybe<Scalars['String']['output']>;
  distribution_policy_id: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

export type Bid = {
  bidder_id: Scalars['String']['output'];
  by_current_user: Scalars['Boolean']['output'];
  date: Scalars['String']['output'];
  fan_points: Scalars['Int']['output'];
};

export type BidOnShopItemErrors = {
  invalid_bid_amount_error: Maybe<InvalidRewardAmountError>;
  too_few_available_error: Maybe<TooFewAvailableError>;
  unknown_product_error: Maybe<UnknownProductError>;
  unknown_user_error: Maybe<UnknownUserError>;
};

export type BidOnShopItemResult = {
  errors: Maybe<BidOnShopItemErrors>;
};

export type BiddingStatus = {
  bids: Array<Bid>;
  current_highest_bid_fan_points: Scalars['Int']['output'];
  current_user_bid_fan_points: Maybe<Scalars['Int']['output']>;
  is_bidding_open: Scalars['Boolean']['output'];
  is_user_highest_bidder: Scalars['Boolean']['output'];
  next_higher_bid_fan_points: Scalars['Int']['output'];
};

export type BillingInfoNotSetError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type Branding = {
  banner_url: Maybe<Scalars['String']['output']>;
  logo_black_url: Maybe<Scalars['String']['output']>;
  logo_color_url: Maybe<Scalars['String']['output']>;
  logo_white_url: Maybe<Scalars['String']['output']>;
};

export type BrandingUploadUrls = {
  banner_upload_params: Scalars['String']['output'];
  banner_upload_url: Scalars['String']['output'];
  logo_black_upload_params: Scalars['String']['output'];
  logo_black_upload_url: Scalars['String']['output'];
  logo_color_upload_params: Scalars['String']['output'];
  logo_color_upload_url: Scalars['String']['output'];
  logo_white_upload_params: Scalars['String']['output'];
  logo_white_upload_url: Scalars['String']['output'];
};

export type ChangePartnerApprovalSettingsResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type ChangeUserIdErrors = {
  invalid_user_id_error: Maybe<InvalidUserIdError>;
  unknown_user_error: Maybe<UnknownUserError>;
  user_already_exists_error: Maybe<UserAlreadyExistsError>;
};

export type ChangeUserIdResult = {
  errors: Maybe<ChangeUserIdErrors>;
};

export type ChangeUserMailAddressErrors = {
  invalid_mail_address_error: Maybe<InvalidMailAddressError>;
  unknown_user_error: Maybe<UnknownUserError>;
};

export type ChangeUserMailAddressResult = {
  errors: Maybe<ChangeUserMailAddressErrors>;
};

export type ClaimLootboxRewardsErrors = {
  unknown_lootbox_error: Maybe<UnknownLootboxError>;
  unknown_user_error: Maybe<UnknownUserError>;
};

export type ClaimLootboxRewardsResult = {
  errors: Maybe<ClaimLootboxRewardsErrors>;
};

export type Contact = {
  address: Address;
  contact_name: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  legal_name: Scalars['String']['output'];
};

export type Coordinates = {
  latitude: Scalars['String']['output'];
  longitude: Scalars['String']['output'];
};

export type CreatePartnerErrors = {
  invalid_name_error: Maybe<InvalidNameError>;
};

export type CreatePartnerResult = {
  errors: Maybe<CreatePartnerErrors>;
  result: Maybe<Partner>;
};

export type CreateProjectErrors = {
  invalid_name_error: Maybe<InvalidNameError>;
};

export type CreateProjectResult = {
  errors: Maybe<CreateProjectErrors>;
  result: Maybe<Project>;
};

export type CreateTokenErrors = {
  invalid_expiration_time_error: Maybe<InvalidExpirationTimeError>;
};

export type CreateTokenResult = {
  errors: Maybe<CreateTokenErrors>;
  result: Maybe<GeneratedToken>;
};

export type Currency =
  | 'chf'
  | 'eur'
  | 'fp'
  | 'usd';

export type DeclinePartnershipRequestResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeclineProposedPartnershipModuleErrors = {
  invalid_module_id_error: Maybe<InvalidModuleIdError>;
  unknown_partnership_error: Maybe<UnknownPartnershipError>;
};

export type DeclineProposedPartnershipModuleResult = {
  errors: Maybe<DeclineProposedPartnershipModuleErrors>;
};

export type DeleteBackendUserInvitationResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeleteBackendUserResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeleteFanPointsRateResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeletePartnerResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeletePartnershipRequestResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeleteProductResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeleteProjectAchievementTemplateResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeleteProjectResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeleteProposedPartnershipModuleResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeleteShopDistributionPolicyResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeleteStoreResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeleteTokenResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeleteUserErrors = {
  unknown_user_error: Maybe<UnknownUserError>;
};

export type DeleteUserResult = {
  errors: Maybe<DeleteUserErrors>;
};

export type DeletionStatus = {
  status: Scalars['String']['output'];
};

export type DeliveryStatus =
  | 'delivered'
  | 'not_delivered';

export type DistributionPolicy = BasicDistributionPolicy | PromotionDistributionPolicy | ShopAuctionDistributionPolicy | ShopLotteryDistributionPolicy | ShopPurchaseDistributionPolicy;

export type EmptyResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type EstimateGivenOutFanPointsResult = {
  errors: Maybe<EstimateGivenOutFanPointsResultErrors>;
  result: Maybe<Scalars['Int']['output']>;
};

export type EstimateGivenOutFanPointsResultErrors = {
  invalid_rate_label_error: Maybe<InvalidRateLabelError>;
};

export type EventType = {
  aggregate_type: AggregateType;
  event_type: Scalars['String']['output'];
  possible_items: Maybe<Array<Scalars['String']['output']>>;
};

export type ExecuteFanPointsTransactionResult = {
  errors: Maybe<ExecuteTransactionErrors>;
  result: Maybe<FanPointsTransaction>;
};

export type ExecuteShopTransactionErrors = {
  invalid_reward_amount_error: Maybe<InvalidRewardAmountError>;
  too_few_available_error: Maybe<TooFewAvailableError>;
  unknown_product_error: Maybe<UnknownProductError>;
  unknown_user_error: Maybe<UnknownUserError>;
};

export type ExecuteShopTransactionResult = {
  errors: Maybe<ExecuteShopTransactionErrors>;
  result: Maybe<RewardTransaction>;
};

export type ExecuteStatusPointsTransactionResult = {
  errors: Maybe<ExecuteTransactionErrors>;
  result: Maybe<StatusPointsTransaction>;
};

export type ExecuteTransactionErrors = {
  already_executed_error: Maybe<AlreadyExecutedError>;
  invalid_action_category_error: Maybe<InvalidActionCategoryError>;
  invalid_rate_label_error: Maybe<InvalidRateLabelError>;
  invalid_reward_amount_error: Maybe<InvalidRewardAmountError>;
  invalid_transaction_id_error: Maybe<InvalidTransactionIdError>;
  non_unique_purchase_item_ids_error: Maybe<NonUniquePurchaseItemIdsError>;
  too_few_available_error: Maybe<TooFewAvailableError>;
  transaction_not_found_error: Maybe<TransactionNotFoundError>;
  unknown_user_error: Maybe<UnknownUserError>;
};

export type FanPointsBalance = {
  currency: Currency;
  fan_points: Scalars['Int']['output'];
  monetary_value: Scalars['Float']['output'];
};

export type FanPointsRate = {
  currency: Currency;
  fan_points_rate: Scalars['Float']['output'];
  fan_points_rate_type: FanPointsRateType;
  partner_id: Scalars['String']['output'];
  rate_label: Scalars['String']['output'];
};

export type FanPointsRateType =
  | 'absolute'
  | 'relative';

export type FanPointsReward = {
  amount: Scalars['Int']['output'];
  reward_id: Scalars['String']['output'];
  reward_type: Scalars['String']['output'];
};

export type FanPointsTransaction = {
  date: Scalars['String']['output'];
  purchase_id: Scalars['String']['output'];
  purchase_items: Array<PurchaseItem>;
  transaction_type: FanPointsTransactionType;
  user_id: Scalars['String']['output'];
};

export type FanPointsTransactionType =
  | 'distributed_on_purchase'
  | 'purchased_with_fanpoints'
  | 'undo_distributed_on_purchase'
  | 'undo_purchased_with_fanpoints';

export type FanSegmentation = {
  age_groups: Array<Maybe<Scalars['String']['output']>>;
  visit_frequency_type: Scalars['String']['output'];
};

export type FanSegmentationInput = {
  age_groups: Array<InputMaybe<Scalars['String']['input']>>;
  visit_frequency_type: Scalars['String']['input'];
};

export type GenerateProductImageUploadUrlErrors = {
  unknown_product_error: Maybe<UnknownProductError>;
};

export type GenerateProductImageUploadUrlResult = {
  errors: Maybe<GenerateProductImageUploadUrlErrors>;
  result: Maybe<ImageUploadUrl>;
};

export type GenerateUploadUrlResult = {
  result: ImageUploadUrl;
};

export type GenerateWalletPassResult = {
  result: Scalars['String']['output'];
};

export type GeneratedToken = {
  client_id: Scalars['String']['output'];
  creation_date: Scalars['String']['output'];
  expiration_date: Scalars['String']['output'];
  name: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type GetBackendUserInvitationsResult = {
  result: Maybe<Array<BackendUserInvitation>>;
};

export type GetBackendUsersResult = {
  result: Maybe<Array<RoleAttachment>>;
};

export type GetBoughtProductsErrors = {
  unknown_user_error: Maybe<UnknownUserError>;
};

export type GetBoughtProductsResult = {
  errors: Maybe<GetBoughtProductsErrors>;
  result: Maybe<Array<RewardTransaction>>;
};

export type GetCurrentBiddingStatusErrors = {
  unknown_product_error: Maybe<UnknownProductError>;
  unknown_user_error: Maybe<UnknownUserError>;
};

export type GetCurrentBiddingStatusResult = {
  errors: Maybe<GetCurrentBiddingStatusErrors>;
  result: Maybe<BiddingStatus>;
};

export type GetDailyPartnerStatisticsResult = {
  result: PartnerStatistics;
};

export type GetDailyProjectStatisticsResult = {
  result: ProjectStatistics;
};

export type GetEventTypesResult = {
  result: Array<EventType>;
};

export type GetFanPointsBalanceErrors = {
  unknown_user_error: Maybe<UnknownUserError>;
};

export type GetFanPointsBalanceResult = {
  errors: Maybe<GetFanPointsBalanceErrors>;
  result: Maybe<FanPointsBalance>;
};

export type GetFanPointsRatesResult = {
  result: Maybe<Array<FanPointsRate>>;
};

export type GetFanPointsTransactionErrors = {
  transaction_not_found_error: Maybe<TransactionNotFoundError>;
  unknown_user_error: Maybe<UnknownUserError>;
};

export type GetFanPointsTransactionHistoryErrors = {
  transaction_not_found_error: Maybe<TransactionNotFoundError>;
  unknown_user_error: Maybe<UnknownUserError>;
};

export type GetFanPointsTransactionHistoryResult = {
  errors: Maybe<GetFanPointsTransactionHistoryErrors>;
  result: Maybe<Array<RewardTransaction>>;
};

export type GetFanPointsTransactionResult = {
  errors: Maybe<GetFanPointsTransactionErrors>;
  result: Maybe<FanPointsTransaction>;
};

export type GetFanPointsTransactionsErrors = {
  unknown_user_error: Maybe<UnknownUserError>;
};

export type GetFanPointsTransactionsResult = {
  errors: Maybe<GetFanPointsTransactionsErrors>;
  result: Maybe<Array<FanPointsTransaction>>;
};

export type GetLootboxInfoResult = {
  result: LootboxInfo;
};

export type GetLootboxSettingsResult = {
  result: LootboxSettings;
};

export type GetLootboxesErrors = {
  unknown_user_error: Maybe<UnknownUserError>;
};

export type GetLootboxesResult = {
  errors: Maybe<GetLootboxesErrors>;
  result: Maybe<Array<RewardTransaction>>;
};

export type GetModulesResult = {
  result: Maybe<Array<Module>>;
};

export type GetMyPartnerResult = {
  result: PartnerWithRole;
};

export type GetMyPartnersResult = {
  result: Array<PartnerWithRole>;
};

export type GetMyProjectResult = {
  result: ProjectWithRole;
};

export type GetMyProjectsResult = {
  result: Array<ProjectWithRole>;
};

export type GetNumStatusPointsForActionErrors = {
  invalid_action_category_error: Maybe<InvalidActionCategoryError>;
};

export type GetNumStatusPointsForActionResult = {
  errors: Maybe<GetNumStatusPointsForActionErrors>;
  result: Maybe<Scalars['Int']['output']>;
};

export type GetPartnerApprovalSettingsResult = {
  result: Array<PartnerApprovalSettings>;
};

export type GetPartnerBillingInfoErrors = {
  billing_info_to_set_error: Maybe<BillingInfoNotSetError>;
};

export type GetPartnerBillingInfoResult = {
  errors: Maybe<GetPartnerBillingInfoErrors>;
  result: Maybe<PartnerBillingInfo>;
};

export type GetPartnerInvoicesErrors = {
  billing_info_to_set_error: Maybe<BillingInfoNotSetError>;
};

export type GetPartnerInvoicesResult = {
  errors: Maybe<GetPartnerInvoicesErrors>;
  result: Maybe<Array<Invoice>>;
};

export type GetPartnerProductResult = {
  errors: Maybe<GetProductErrors>;
  result: ProductWithInventory;
};

export type GetPartnerProductsResult = {
  result: Array<ProductWithInventory>;
};

export type GetPartnerResult = {
  result: Partner;
};

export type GetPartnerStoreErrors = {
  unknown_store_error: Maybe<UnknownStoreError>;
};

export type GetPartnerStoreResult = {
  errors: Maybe<GetPartnerStoreErrors>;
  result: Maybe<Store>;
};

export type GetPartnersResult = {
  result: Array<Partner>;
};

export type GetPartnershipsResult = {
  result: Array<Partnership>;
};

export type GetPotentialPartnershipsResult = {
  result: Array<PartnershipParty>;
};

export type GetPriceInFanPointsErrors = {
  invalid_reward_amount_error: Maybe<InvalidRewardAmountError>;
};

export type GetPriceInFanPointsResult = {
  errors: Maybe<GetPriceInFanPointsErrors>;
  result: Maybe<Scalars['Int']['output']>;
};

export type GetProductErrors = {
  unknown_product_error: Maybe<UnknownProductError>;
};

export type GetProductResult = {
  errors: Maybe<GetProductErrors>;
  result: Maybe<Product>;
};

export type GetProductsResult = {
  result: Array<Product>;
};

export type GetProjectAchievementTemplatesResult = {
  result: Array<AchievementTemplate>;
};

export type GetProjectResult = {
  result: Project;
};

export type GetProjectsResult = {
  result: Array<Project>;
};

export type GetPromotionDistributionPoliciesResult = {
  result: Array<RewardToDistribute>;
};

export type GetPromotionDistributionPolicyErrors = {
  unknown_promotion_error: Maybe<UnknownPromotionError>;
};

export type GetPromotionDistributionPolicyResult = {
  errors: Maybe<GetRewardToDistributeErrors>;
  result: Maybe<RewardToDistribute>;
};

export type GetQrCodeResult = {
  errors: Maybe<GetQrCodeResultErrors>;
  result: Maybe<Scalars['String']['output']>;
};

export type GetQrCodeResultErrors = {
  unknown_user_error: Maybe<UnknownUserError>;
};

export type GetReceivedPartnershipRequestsResult = {
  result: Array<PartnershipRequest>;
};

export type GetRewardToDistributeErrors = {
  unknown_product_error: Maybe<UnknownProductError>;
};

export type GetRewardToDistributeResult = {
  errors: Maybe<GetRewardToDistributeErrors>;
  result: Maybe<RewardToDistribute>;
};

export type GetRewardsToDistributeResult = {
  result: Array<RewardToDistribute>;
};

export type GetSentPartnershipRequestsResult = {
  result: Array<PartnershipRequest>;
};

export type GetShopItemErrors = {
  unknown_product_error: Maybe<UnknownProductError>;
};

export type GetShopItemResult = {
  errors: Maybe<GetShopItemErrors>;
  result: Maybe<RewardToDistribute>;
};

export type GetShopItemsResult = {
  result: Array<RewardToDistribute>;
};

export type GetStatusPointsBalanceResult = {
  errors: Maybe<GetStatusPointsErrors>;
  result: Maybe<Scalars['Int']['output']>;
};

export type GetStatusPointsErrors = {
  unknown_user_error: Maybe<UnknownUserError>;
};

export type GetStatusPointsTransactionHistoryErrors = {
  transaction_not_found_error: Maybe<TransactionNotFoundError>;
  unknown_user_error: Maybe<UnknownUserError>;
};

export type GetStatusPointsTransactionHistoryResult = {
  errors: Maybe<GetStatusPointsTransactionHistoryErrors>;
  result: Maybe<Array<RewardTransaction>>;
};

export type GetStatusPointsTransactionsErrors = {
  unknown_user_error: Maybe<UnknownUserError>;
};

export type GetStatusPointsTransactionsResult = {
  errors: Maybe<GetStatusPointsTransactionsErrors>;
  result: Maybe<Array<StatusPointsTransaction>>;
};

export type GetTokensResult = {
  result: Maybe<Array<Token>>;
};

export type GetUserErrors = {
  unknown_user_error: Maybe<UnknownUserError>;
};

export type GetUserResult = {
  errors: Maybe<GetUserErrors>;
  result: Maybe<User>;
};

export type GetUsersResult = {
  result: Array<User>;
};

export type GetWalletCustomizationResult = {
  result: WalletCustomization;
};

export type ImageUploadUrl = {
  upload_params: Scalars['String']['output'];
  upload_url: Scalars['String']['output'];
};

export type InfoMissingError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidActionCategoryError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidAddressError = {
  reason: Scalars['String']['output'];
};

export type InvalidDateError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidEmailError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidExpirationTimeError = {
  reason: Scalars['String']['output'];
};

export type InvalidIbanError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidMailAddressError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidModuleIdError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidNameError = {
  reason: Scalars['String']['output'];
};

export type InvalidPeriodError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidRateError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidRateLabelError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidRewardAmountError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidRewardError = {
  message: Scalars['String']['output'];
};

export type InvalidTargetError = {
  message: Scalars['String']['output'];
};

export type InvalidTransactionIdError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidTrophyError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidUserIdError = {
  reason: Scalars['String']['output'];
};

export type InvalidWebsiteError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InviteBackendUserResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type Invoice = {
  amount: Scalars['Float']['output'];
  currency: Currency;
  invoice_file_url: Maybe<Scalars['String']['output']>;
  invoice_id: Scalars['String']['output'];
  invoiced_purchases_file_url: Maybe<Scalars['String']['output']>;
  partner_id: Scalars['String']['output'];
  payed: Scalars['Boolean']['output'];
  period_end: Scalars['String']['output'];
  period_finished: Scalars['Boolean']['output'];
  period_start: Scalars['String']['output'];
};

export type InvoicePeriod =
  | 'biweekly'
  | 'monthly'
  | 'weekly';

export type Lootbox = {
  opened: Scalars['Boolean']['output'];
  reward_id: Scalars['String']['output'];
  reward_type: Scalars['String']['output'];
};

export type LootboxFrequency =
  | 'daily'
  | 'weekly';

export type LootboxInfo = {
  projected_num_distributed_prizes: Array<Aggregate>;
};

export type LootboxSettings = {
  frequency: LootboxFrequency;
  project_id: Scalars['String']['output'];
};

export type LotteryDrawStatus =
  | 'drawn'
  | 'not_yet_drawn'
  | 'partially_drawn'
  | 'too_few_available'
  | 'too_few_tickets';

export type LotteryTicket = {
  currency: Currency;
  description: Scalars['String']['output'];
  image_ids: Array<Scalars['String']['output']>;
  image_urls: Array<Scalars['String']['output']>;
  lottery_end_date: Scalars['String']['output'];
  lottery_shop_item_reward_id: Scalars['String']['output'];
  lottery_start_date: Scalars['String']['output'];
  partner_id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  project_id: Scalars['String']['output'];
  reward_id: Scalars['String']['output'];
  reward_type: Scalars['String']['output'];
  shop_item_category: ProductCategory;
  title: Scalars['String']['output'];
};

export type MarkProductAsDeliveredErrors = {
  unknown_product_error: Maybe<UnknownProductError>;
};

export type MarkProductAsDeliveredResult = {
  errors: Maybe<MarkProductAsDeliveredErrors>;
};

export type ModificationNotAllowedError = {
  message: Scalars['String']['output'];
};

export type ModifyBackendUserErrors = {
  unknown_policy_attachment_error: Maybe<UnknownPolicyAttachmentError>;
};

export type ModifyBackendUserResult = {
  errors: Maybe<ModifyBackendUserErrors>;
};

export type ModifyBrandingResult = {
  result: BrandingUploadUrls;
};

export type ModifyLootboxSettingsResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type ModifyPartnerBillingInfoErrors = {
  info_missing_error: Maybe<InfoMissingError>;
  invalid_address_error: Maybe<InvalidAddressError>;
  invalid_email_error: Maybe<InvalidEmailError>;
  invalid_iban_error: Maybe<InvalidIbanError>;
};

export type ModifyPartnerBillingInfoResult = {
  errors: Maybe<ModifyPartnerBillingInfoErrors>;
};

export type ModifyPartnerErrors = {
  invalid_name_error: Maybe<InvalidNameError>;
  invalid_website_error: Maybe<InvalidWebsiteError>;
};

export type ModifyPartnerResult = {
  errors: Maybe<ModifyPartnerErrors>;
};

export type ModifyProductErrors = {
  modification_not_allowed_error: Maybe<ModificationNotAllowedError>;
};

export type ModifyProductResult = {
  errors: Maybe<ModifyProductErrors>;
  result: Maybe<Product>;
};

export type ModifyProjectAchievementTemplateErrors = {
  invalid_reward_error: Maybe<InvalidRewardError>;
  invalid_target_error: Maybe<InvalidTargetError>;
  unknown_achievement_template_error: Maybe<UnknownAchievementTemplateError>;
};

export type ModifyProjectAchievementTemplateResult = {
  errors: Maybe<ModifyProjectAchievementTemplateErrors>;
  result: Maybe<AchievementTemplate>;
};

export type ModifyProjectDetailsErrors = {
  invalid_name_error: Maybe<InvalidNameError>;
  invalid_website_error: Maybe<InvalidWebsiteError>;
};

export type ModifyProjectDetailsResult = {
  errors: Maybe<ModifyProjectDetailsErrors>;
};

export type ModifyPromotionDistributionPolicyErrors = {
  invalid_period_error: Maybe<InvalidPeriodError>;
  invalid_reward_amount_error: Maybe<InvalidRewardAmountError>;
  modification_not_allowed_error: Maybe<ModificationNotAllowedError>;
  unknown_product_error: Maybe<UnknownProductError>;
};

export type ModifyPromotionDistributionPolicyResult = {
  errors: Maybe<ModifyPromotionDistributionPolicyErrors>;
  result: Maybe<RewardToDistribute>;
};

export type ModifyShopDistributionPolicyErrors = {
  invalid_period_error: Maybe<InvalidPeriodError>;
  invalid_prize_error: Maybe<InvalidRewardAmountError>;
  invalid_reward_amount_error: Maybe<InvalidRewardAmountError>;
  modification_not_allowed_error: Maybe<ModificationNotAllowedError>;
  unknown_product_error: Maybe<UnknownProductError>;
};

export type ModifyShopDistributionPolicyResult = {
  errors: Maybe<ModifyShopDistributionPolicyErrors>;
  result: Maybe<RewardToDistribute>;
};

export type ModifyStoreErrors = {
  invalid_address_error: Maybe<InvalidAddressError>;
  invalid_name_error: Maybe<InvalidNameError>;
  unknown_store_error: Maybe<UnknownStoreError>;
};

export type ModifyStoreResult = {
  errors: Maybe<ModifyStoreErrors>;
};

export type Module = {
  active: Scalars['Boolean']['output'];
  can_be_deactivated: Scalars['Boolean']['output'];
  module_id: Scalars['String']['output'];
};

export type ModuleCannotBeDeactivatedError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  _empty: Maybe<Scalars['String']['output']>;
  accept_partnership_request: AcceptPartnershipRequestResult;
  accept_proposed_partnership_module: AcceptProposedPartnershipModuleResult;
  activate_module: ToggleModuleResult;
  add_bidding_distribution_policy: AddShopDistributionPolicyResult;
  add_lottery_distribution_policy: AddShopDistributionPolicyResult;
  add_product: AddProductResult;
  add_project_achievement_template: AddProjectAchievementTemplateResult;
  add_promotion_distribution_policy: AddPromotionDistributionPolicyResult;
  add_shop_purchase_distribution_policy: AddShopDistributionPolicyResult;
  add_store: AddStoreResult;
  add_user: AddUserResult;
  approve_distribution_policy: ApproveDistributionPolicyResult;
  bid_on_shop_item: BidOnShopItemResult;
  change_partner_approval_settings: ChangePartnerApprovalSettingsResult;
  change_user_id: ChangeUserIdResult;
  change_user_mail_address: ChangeUserMailAddressResult;
  claim_lootbox_rewards: ClaimLootboxRewardsResult;
  create_partner: CreatePartnerResult;
  create_partner_token: CreateTokenResult;
  create_project: CreateProjectResult;
  create_project_token: CreateTokenResult;
  deactivate_module: ToggleModuleResult;
  decline_partnership_request: DeclinePartnershipRequestResult;
  decline_proposed_partnership_module: DeclineProposedPartnershipModuleResult;
  delete_fan_points_rate: DeleteFanPointsRateResult;
  delete_partner: DeletePartnerResult;
  delete_partner_token: DeleteTokenResult;
  delete_partner_user: DeleteBackendUserResult;
  delete_partner_user_invitation: DeleteBackendUserInvitationResult;
  delete_partnership_request: DeletePartnershipRequestResult;
  delete_product: DeleteProductResult;
  delete_project: DeleteProjectResult;
  delete_project_achievement_template: DeleteProjectAchievementTemplateResult;
  delete_project_token: DeleteTokenResult;
  delete_project_user: DeleteBackendUserResult;
  delete_project_user_invitation: DeleteBackendUserInvitationResult;
  delete_proposed_partnership_module: DeleteProposedPartnershipModuleResult;
  delete_shop_distribution_policy: DeleteShopDistributionPolicyResult;
  delete_store: DeleteStoreResult;
  delete_user: DeleteUserResult;
  distribute_status_points: ExecuteStatusPointsTransactionResult;
  generate_apple_wallet_pass: GenerateWalletPassResult;
  generate_google_wallet_pass: GenerateWalletPassResult;
  generate_product_upload_url: GenerateProductImageUploadUrlResult;
  generate_wallet_icon_upload_url: GenerateUploadUrlResult;
  give_fan_points_on_purchase: ExecuteFanPointsTransactionResult;
  invite_partner_user: InviteBackendUserResult;
  invite_project_user: InviteBackendUserResult;
  mark_product_as_delivered: MarkProductAsDeliveredResult;
  modify_bidding_distribution_policy: ModifyShopDistributionPolicyResult;
  modify_lootbox_settings: ModifyLootboxSettingsResult;
  modify_lottery_distribution_policy: ModifyShopDistributionPolicyResult;
  modify_partner: ModifyPartnerResult;
  modify_partner_billing_info: ModifyPartnerBillingInfoResult;
  modify_partner_branding: ModifyBrandingResult;
  modify_partner_user: ModifyBackendUserResult;
  modify_product: ModifyProductResult;
  modify_project: ModifyProjectDetailsResult;
  modify_project_achievement_template: ModifyProjectAchievementTemplateResult;
  modify_project_branding: ModifyBrandingResult;
  modify_project_user: ModifyBackendUserResult;
  modify_promotion_distribution_policy: ModifyPromotionDistributionPolicyResult;
  modify_shop_purchase_distribution_policy: ModifyShopDistributionPolicyResult;
  modify_store: ModifyStoreResult;
  open_lootbox: OpenLootBoxResult;
  pay_purchase_with_fan_points: ExecuteFanPointsTransactionResult;
  propose_partnership_module: ProposePartnershipModuleResult;
  purchase_lottery_ticket: ExecuteShopTransactionResult;
  purchase_shop_item: ExecuteShopTransactionResult;
  refund_shop_item: ExecuteShopTransactionResult;
  reject_distribution_policy: RejectDistributionPolicyResult;
  request_fan_points_for_partner: RequestFanPointsResult;
  reset_partner_branding: ResetBrandingResult;
  reset_project_branding: ResetBrandingResult;
  send_partnership_request: SendPartnershipRequestResult;
  set_fan_points_rate: SetFanPointsRateResult;
  set_wallet_customization: SetWalletCustomizationResult;
  transfer_partner_ownership: TransferOwnershipResult;
  transfer_project_ownership: TransferOwnershipResult;
  undo_fan_points_transaction: ExecuteFanPointsTransactionResult;
  undo_status_points_transaction: ExecuteStatusPointsTransactionResult;
};


export type MutationAccept_Partnership_RequestArgs = {
  requested_id: Scalars['String']['input'];
  requesting_id: Scalars['String']['input'];
};


export type MutationAccept_Proposed_Partnership_ModuleArgs = {
  accepting_id: Scalars['String']['input'];
  module_id: Scalars['String']['input'];
  partnership_id: Scalars['String']['input'];
};


export type MutationActivate_ModuleArgs = {
  module_id: Scalars['String']['input'];
  scope_id: Scalars['String']['input'];
  scope_type: ScopeType;
};


export type MutationAdd_Bidding_Distribution_PolicyArgs = {
  auction_end_date: Scalars['String']['input'];
  auction_start_date: Scalars['String']['input'];
  currency: Currency;
  enabled: Scalars['Boolean']['input'];
  min_bid: Scalars['Float']['input'];
  partner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type MutationAdd_Lottery_Distribution_PolicyArgs = {
  currency: Currency;
  enabled: Scalars['Boolean']['input'];
  lottery_end_date: Scalars['String']['input'];
  lottery_start_date: Scalars['String']['input'];
  num_tickets_to_draw: Scalars['Int']['input'];
  partner_id: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  project_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type MutationAdd_ProductArgs = {
  description: Scalars['String']['input'];
  external_product_id: InputMaybe<Scalars['String']['input']>;
  num_available: Scalars['Int']['input'];
  partner_id: Scalars['String']['input'];
  product_category: ProductCategory;
  title: Scalars['String']['input'];
};


export type MutationAdd_Project_Achievement_TemplateArgs = {
  achievement_points: Scalars['Int']['input'];
  aggregate_type: AggregateType;
  category: AchievementCategory;
  description: Scalars['String']['input'];
  num_status_points: Scalars['Int']['input'];
  project_id: Scalars['String']['input'];
  relevant_event_type: Scalars['String']['input'];
  target: InputMaybe<Scalars['Int']['input']>;
  target_items: InputMaybe<Array<Scalars['String']['input']>>;
  target_number: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};


export type MutationAdd_Promotion_Distribution_PolicyArgs = {
  campaign_end_date: Scalars['String']['input'];
  campaign_start_date: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
  partner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
  total_amount_to_distribute: Scalars['Int']['input'];
};


export type MutationAdd_Shop_Purchase_Distribution_PolicyArgs = {
  currency: Currency;
  enabled: Scalars['Boolean']['input'];
  partner_id: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  project_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
  sale_start_date: InputMaybe<Scalars['String']['input']>;
};


export type MutationAdd_StoreArgs = {
  address: AddressInput;
  name: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
};


export type MutationAdd_UserArgs = {
  mail_address: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationApprove_Distribution_PolicyArgs = {
  distribution_policy_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type MutationBid_On_Shop_ItemArgs = {
  bid_fan_points: Scalars['Int']['input'];
  delivery_address: AddressInput;
  delivery_name: Scalars['String']['input'];
  distribution_policy_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationChange_Partner_Approval_SettingsArgs = {
  auto_approve_marketplace_products: InputMaybe<Scalars['Boolean']['input']>;
  auto_approve_prizes: InputMaybe<Scalars['Boolean']['input']>;
  partner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
};


export type MutationChange_User_IdArgs = {
  new_user_id: Scalars['String']['input'];
  old_user_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
};


export type MutationChange_User_Mail_AddressArgs = {
  new_mail_address: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationClaim_Lootbox_RewardsArgs = {
  project_id: Scalars['String']['input'];
  rewards_transaction_group_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationCreate_PartnerArgs = {
  name: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationCreate_Partner_TokenArgs = {
  expires_in_days: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
};


export type MutationCreate_ProjectArgs = {
  name: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationCreate_Project_TokenArgs = {
  expires_in_days: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
};


export type MutationDeactivate_ModuleArgs = {
  module_id: Scalars['String']['input'];
  scope_id: Scalars['String']['input'];
};


export type MutationDecline_Partnership_RequestArgs = {
  reason: Scalars['String']['input'];
  requested_id: Scalars['String']['input'];
  requesting_id: Scalars['String']['input'];
};


export type MutationDecline_Proposed_Partnership_ModuleArgs = {
  declining_id: Scalars['String']['input'];
  module_id: Scalars['String']['input'];
  partnership_id: Scalars['String']['input'];
};


export type MutationDelete_Fan_Points_RateArgs = {
  partner_id: Scalars['String']['input'];
  rate_label: Scalars['String']['input'];
};


export type MutationDelete_PartnerArgs = {
  partner_id: Scalars['String']['input'];
};


export type MutationDelete_Partner_TokenArgs = {
  client_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
};


export type MutationDelete_Partner_UserArgs = {
  partner_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationDelete_Partner_User_InvitationArgs = {
  partner_id: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDelete_Partnership_RequestArgs = {
  requested_id: Scalars['String']['input'];
  requesting_id: Scalars['String']['input'];
};


export type MutationDelete_ProductArgs = {
  partner_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type MutationDelete_ProjectArgs = {
  project_id: Scalars['String']['input'];
};


export type MutationDelete_Project_Achievement_TemplateArgs = {
  achievement_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
};


export type MutationDelete_Project_TokenArgs = {
  client_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
};


export type MutationDelete_Project_UserArgs = {
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationDelete_Project_User_InvitationArgs = {
  project_id: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDelete_Proposed_Partnership_ModuleArgs = {
  module_id: Scalars['String']['input'];
  partnership_id: Scalars['String']['input'];
  proposing_id: Scalars['String']['input'];
};


export type MutationDelete_Shop_Distribution_PolicyArgs = {
  distribution_policy_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type MutationDelete_StoreArgs = {
  partner_id: Scalars['String']['input'];
  store_id: Scalars['String']['input'];
};


export type MutationDelete_UserArgs = {
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationDistribute_Status_PointsArgs = {
  action_category: Scalars['String']['input'];
  custom_action_id: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  project_id: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationGenerate_Apple_Wallet_PassArgs = {
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationGenerate_Google_Wallet_PassArgs = {
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationGenerate_Product_Upload_UrlArgs = {
  partner_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type MutationGenerate_Wallet_Icon_Upload_UrlArgs = {
  project_id: Scalars['String']['input'];
};


export type MutationGive_Fan_Points_On_PurchaseArgs = {
  custom_purchase_id: InputMaybe<Scalars['String']['input']>;
  partner_id: Scalars['String']['input'];
  project_id: InputMaybe<Scalars['String']['input']>;
  purchase_items: Array<PurchaseItemInput>;
  user_id: Scalars['String']['input'];
};


export type MutationInvite_Partner_UserArgs = {
  partner_id: Scalars['String']['input'];
  role: Role;
  username: Scalars['String']['input'];
};


export type MutationInvite_Project_UserArgs = {
  project_id: Scalars['String']['input'];
  role: Role;
  username: Scalars['String']['input'];
};


export type MutationMark_Product_As_DeliveredArgs = {
  group_id: Scalars['String']['input'];
  nr: Scalars['Int']['input'];
  partner_id: Scalars['String']['input'];
};


export type MutationModify_Bidding_Distribution_PolicyArgs = {
  auction_end_date: InputMaybe<Scalars['String']['input']>;
  auction_start_date: InputMaybe<Scalars['String']['input']>;
  currency: InputMaybe<Currency>;
  distribution_policy_id: Scalars['String']['input'];
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  min_bid: InputMaybe<Scalars['Float']['input']>;
  partner_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type MutationModify_Lootbox_SettingsArgs = {
  frequency: LootboxFrequency;
  project_id: Scalars['String']['input'];
};


export type MutationModify_Lottery_Distribution_PolicyArgs = {
  currency: InputMaybe<Currency>;
  distribution_policy_id: Scalars['String']['input'];
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  lottery_end_date: InputMaybe<Scalars['String']['input']>;
  lottery_start_date: InputMaybe<Scalars['String']['input']>;
  num_tickets_to_draw: InputMaybe<Scalars['Int']['input']>;
  partner_id: Scalars['String']['input'];
  price: InputMaybe<Scalars['Float']['input']>;
  reward_id: Scalars['String']['input'];
};


export type MutationModify_PartnerArgs = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  partner_id: Scalars['String']['input'];
  primary_currency: InputMaybe<Currency>;
  website: InputMaybe<Scalars['String']['input']>;
};


export type MutationModify_Partner_Billing_InfoArgs = {
  billing_address: InputMaybe<AddressInput>;
  billing_contact_name: InputMaybe<Scalars['String']['input']>;
  billing_mail_address: InputMaybe<Scalars['String']['input']>;
  iban: InputMaybe<Scalars['String']['input']>;
  invoice_period: InputMaybe<InvoicePeriod>;
  partner_id: Scalars['String']['input'];
};


export type MutationModify_Partner_BrandingArgs = {
  partner_id: Scalars['String']['input'];
};


export type MutationModify_Partner_UserArgs = {
  partner_id: Scalars['String']['input'];
  role: Role;
  user_id: Scalars['String']['input'];
};


export type MutationModify_ProductArgs = {
  delta_num_available: InputMaybe<Scalars['Int']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  external_product_id: InputMaybe<Scalars['String']['input']>;
  image_ids: InputMaybe<Array<Scalars['String']['input']>>;
  partner_id: Scalars['String']['input'];
  product_category: InputMaybe<ProductCategory>;
  reward_id: Scalars['String']['input'];
  title: InputMaybe<Scalars['String']['input']>;
};


export type MutationModify_ProjectArgs = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  primary_currency: InputMaybe<Currency>;
  project_id: Scalars['String']['input'];
  website: InputMaybe<Scalars['String']['input']>;
};


export type MutationModify_Project_Achievement_TemplateArgs = {
  achievement_id: Scalars['String']['input'];
  achievement_points: Scalars['Int']['input'];
  aggregate_type: AggregateType;
  category: AchievementCategory;
  description: Scalars['String']['input'];
  num_status_points: Scalars['Int']['input'];
  project_id: Scalars['String']['input'];
  relevant_event_type: Scalars['String']['input'];
  target: InputMaybe<Scalars['Int']['input']>;
  target_items: InputMaybe<Array<Scalars['String']['input']>>;
  target_number: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};


export type MutationModify_Project_BrandingArgs = {
  project_id: Scalars['String']['input'];
};


export type MutationModify_Project_UserArgs = {
  project_id: Scalars['String']['input'];
  role: Role;
  user_id: Scalars['String']['input'];
};


export type MutationModify_Promotion_Distribution_PolicyArgs = {
  campaign_end_date: InputMaybe<Scalars['String']['input']>;
  campaign_start_date: InputMaybe<Scalars['String']['input']>;
  distribution_policy_id: Scalars['String']['input'];
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  partner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
  total_amount_to_distribute: InputMaybe<Scalars['Int']['input']>;
};


export type MutationModify_Shop_Purchase_Distribution_PolicyArgs = {
  currency: InputMaybe<Currency>;
  distribution_policy_id: Scalars['String']['input'];
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  partner_id: Scalars['String']['input'];
  plan_sale_start: InputMaybe<Scalars['Boolean']['input']>;
  price: InputMaybe<Scalars['Float']['input']>;
  reward_id: Scalars['String']['input'];
  sale_start_date: InputMaybe<Scalars['String']['input']>;
};


export type MutationModify_StoreArgs = {
  address: InputMaybe<AddressInput>;
  name: InputMaybe<Scalars['String']['input']>;
  partner_id: Scalars['String']['input'];
  store_id: Scalars['String']['input'];
};


export type MutationOpen_LootboxArgs = {
  project_id: Scalars['String']['input'];
  transaction_group_id: Scalars['String']['input'];
  transaction_nr: Scalars['Int']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationPay_Purchase_With_Fan_PointsArgs = {
  custom_purchase_id: InputMaybe<Scalars['String']['input']>;
  partner_id: Scalars['String']['input'];
  project_id: InputMaybe<Scalars['String']['input']>;
  purchase_items: Array<PurchaseItemInput>;
  user_id: Scalars['String']['input'];
};


export type MutationPropose_Partnership_ModuleArgs = {
  module_id: Scalars['String']['input'];
  partnership_id: Scalars['String']['input'];
  proposing_id: Scalars['String']['input'];
};


export type MutationPurchase_Lottery_TicketArgs = {
  amount: Scalars['Int']['input'];
  delivery_address: AddressInput;
  delivery_name: Scalars['String']['input'];
  distribution_policy_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationPurchase_Shop_ItemArgs = {
  amount: Scalars['Int']['input'];
  delivery_address: AddressInput;
  delivery_name: Scalars['String']['input'];
  distribution_policy_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationRefund_Shop_ItemArgs = {
  group_id: Scalars['String']['input'];
  nr: Scalars['Int']['input'];
  partner_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationReject_Distribution_PolicyArgs = {
  distribution_policy_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  reason: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type MutationRequest_Fan_Points_For_PartnerArgs = {
  amount: Scalars['Int']['input'];
  partner_id: Scalars['String']['input'];
};


export type MutationReset_Partner_BrandingArgs = {
  partner_id: Scalars['String']['input'];
  reset_banner: InputMaybe<Scalars['Boolean']['input']>;
  reset_logo_black: InputMaybe<Scalars['Boolean']['input']>;
  reset_logo_color: InputMaybe<Scalars['Boolean']['input']>;
  reset_logo_white: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationReset_Project_BrandingArgs = {
  project_id: Scalars['String']['input'];
  reset_banner: InputMaybe<Scalars['Boolean']['input']>;
  reset_logo_black: InputMaybe<Scalars['Boolean']['input']>;
  reset_logo_color: InputMaybe<Scalars['Boolean']['input']>;
  reset_logo_white: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSend_Partnership_RequestArgs = {
  requested_id: Scalars['String']['input'];
  requesting_id: Scalars['String']['input'];
  requesting_type: PartyType;
};


export type MutationSet_Fan_Points_RateArgs = {
  currency: Currency;
  fan_points_rate: Scalars['Float']['input'];
  fan_points_rate_type: InputMaybe<FanPointsRateType>;
  partner_id: Scalars['String']['input'];
  rate_label: Scalars['String']['input'];
};


export type MutationSet_Wallet_CustomizationArgs = {
  background_color: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  show_fanpoints_logo: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};


export type MutationTransfer_Partner_OwnershipArgs = {
  new_owner_id: Scalars['String']['input'];
  old_owner_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
};


export type MutationTransfer_Project_OwnershipArgs = {
  new_owner_id: Scalars['String']['input'];
  old_owner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
};


export type MutationUndo_Fan_Points_TransactionArgs = {
  partner_id: Scalars['String']['input'];
  project_id: InputMaybe<Scalars['String']['input']>;
  purchase_id: Scalars['String']['input'];
  purchase_item_id: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['String']['input'];
};


export type MutationUndo_Status_Points_TransactionArgs = {
  action_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  project_id: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['String']['input'];
};

export type NewOwnerNotInScopeError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type NonUniquePurchaseItemIdsError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type OpenLootBoxErrors = {
  already_opened_error: Maybe<AlreadyOpenedError>;
  unknown_lootbox_error: Maybe<UnknownLootboxError>;
  unknown_user_error: Maybe<UnknownUserError>;
};

export type OpenLootBoxResult = {
  errors: Maybe<OpenLootBoxErrors>;
  result: Maybe<Array<RewardTransaction>>;
};

export type Partner = {
  branding: Branding;
  creator_id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  partner_id: Scalars['String']['output'];
  primary_currency: Currency;
  stores: Array<Store>;
  website: Scalars['String']['output'];
};

export type PartnerApprovalSettings = {
  auto_approve_marketplace_products: Scalars['Boolean']['output'];
  auto_approve_prizes: Scalars['Boolean']['output'];
  partner_id: Scalars['String']['output'];
};

export type PartnerBillingInfo = {
  billing_address: Address;
  billing_contact_name: Scalars['String']['output'];
  billing_mail_address: Scalars['String']['output'];
  iban: Maybe<Scalars['String']['output']>;
  invoice_period: InvoicePeriod;
  partner_id: Scalars['String']['output'];
};

export type PartnerStatistics = {
  num_fan_points_given_out: Array<Aggregate>;
  num_fan_points_spent: Array<Aggregate>;
};

export type PartnerWithRole = {
  branding: Branding;
  creator_id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  partner_id: Scalars['String']['output'];
  primary_currency: Currency;
  role: Role;
  stores: Array<Store>;
  website: Scalars['String']['output'];
};

export type Partnership = {
  modules: Array<PartnershipModule>;
  partner: Partner;
  partnership_id: Scalars['String']['output'];
  project: Project;
  proposed_modules: Array<ProposedPartnershipModule>;
};

export type PartnershipModule = {
  description: Scalars['String']['output'];
  module_id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type PartnershipParty = Partner | Project;

export type PartnershipRequest = {
  reason: Maybe<Scalars['String']['output']>;
  request_date: Scalars['String']['output'];
  request_denied: Scalars['Boolean']['output'];
  requested_party: PartnershipParty;
  requesting_party: PartnershipParty;
  requesting_party_type: PartyType;
};

export type PartyType =
  | 'partner'
  | 'project';

export type Period =
  | 'day'
  | 'day_cumulative';

export type Product = {
  amount: Scalars['Int']['output'];
  creation_date: Scalars['String']['output'];
  delivery_date: Maybe<Scalars['String']['output']>;
  delivery_status: DeliveryStatus;
  description: Scalars['String']['output'];
  external_product_id: Maybe<Scalars['String']['output']>;
  image_ids: Array<Scalars['String']['output']>;
  image_urls: Array<Scalars['String']['output']>;
  partner: Partner;
  partner_id: Scalars['String']['output'];
  product_category: ProductCategory;
  reward_id: Scalars['String']['output'];
  reward_type: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ProductApprovalStatus =
  | 'approved'
  | 'pending'
  | 'rejected';

export type ProductCategory =
  | 'experience'
  | 'memorabilia'
  | 'product';

export type ProductWithInventory = {
  creation_date: Scalars['String']['output'];
  delivery_date: Maybe<Scalars['String']['output']>;
  delivery_status: DeliveryStatus;
  description: Scalars['String']['output'];
  external_product_id: Maybe<Scalars['String']['output']>;
  image_ids: Array<Scalars['String']['output']>;
  image_urls: Array<Scalars['String']['output']>;
  num_available: Scalars['Long']['output'];
  partner_id: Scalars['String']['output'];
  product_category: ProductCategory;
  reward_id: Scalars['String']['output'];
  reward_type: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Project = {
  branding: Branding;
  creator_id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  primary_currency: Currency;
  project_id: Scalars['String']['output'];
  website: Scalars['String']['output'];
};

export type ProjectStatistics = {
  num_fan_points_circulating: Array<Aggregate>;
  num_fan_points_given_out: Array<Aggregate>;
  num_fan_points_spent: Array<Aggregate>;
  num_partners: Array<Aggregate>;
  num_users: Array<Aggregate>;
};

export type ProjectWithRole = {
  branding: Branding;
  creator_id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  primary_currency: Currency;
  project_id: Scalars['String']['output'];
  role: Role;
  website: Scalars['String']['output'];
};

export type PromotionDistributionPolicy = {
  approval_status: ApprovalStatus;
  campaign_end: Scalars['String']['output'];
  campaign_start: Scalars['String']['output'];
  distribution_policy_id: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  project: Project;
  rejection_reason: Maybe<Scalars['String']['output']>;
  total_amount_to_distribute: Scalars['Int']['output'];
};

export type ProposePartnershipModuleErrors = {
  invalid_module_id_error: Maybe<InvalidModuleIdError>;
  unknown_partnership_error: Maybe<UnknownPartnershipError>;
};

export type ProposePartnershipModuleResult = {
  errors: Maybe<ProposePartnershipModuleErrors>;
};

export type ProposedPartnershipModule = {
  module_id: PartnershipModule;
  proposal_id: Scalars['String']['output'];
};

export type PurchaseItem = {
  amount: Scalars['Int']['output'];
  can_be_undone: Scalars['Boolean']['output'];
  currency: Currency;
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fan_points_rate: Maybe<Scalars['Float']['output']>;
  fan_points_rate_type: Maybe<FanPointsRateType>;
  has_been_settled: Scalars['Boolean']['output'];
  has_been_undone: Scalars['Boolean']['output'];
  partner: Partner;
  partner_id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  purchase_item_id: Scalars['String']['output'];
  rate_label: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type PurchaseItemInput = {
  currency: Currency;
  custom_purchase_item_id: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  rate_label: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type PurchaseItemPriceInput = {
  currency: Currency;
  price: Scalars['Float']['input'];
  rate_label: InputMaybe<Scalars['String']['input']>;
};

export type QrCodeVersion =
  | 'deep_link_distribute'
  | 'json_v1';

export type Query = {
  _empty: Maybe<Scalars['String']['output']>;
  estimate_given_out_fan_points_on_purchase: EstimateGivenOutFanPointsResult;
  get_approved_distribution_policies: GetRewardsToDistributeResult;
  get_bought_products: GetBoughtProductsResult;
  get_bought_products_at_partner: GetBoughtProductsResult;
  get_current_bidding_status: GetCurrentBiddingStatusResult;
  get_daily_partner_statistics: GetDailyPartnerStatisticsResult;
  get_daily_project_statistics: GetDailyProjectStatisticsResult;
  get_distribution_policies_for_reward: GetRewardsToDistributeResult;
  get_distribution_policy: GetRewardToDistributeResult;
  get_event_types: GetEventTypesResult;
  get_fan_points_balance: GetFanPointsBalanceResult;
  get_fan_points_rates: GetFanPointsRatesResult;
  get_fan_points_transaction: GetFanPointsTransactionResult;
  get_fan_points_transactions: GetFanPointsTransactionsResult;
  get_lootbox_info: GetLootboxInfoResult;
  get_lootbox_settings: GetLootboxSettingsResult;
  get_lootboxes: GetLootboxesResult;
  get_modules: GetModulesResult;
  get_my_partner: GetMyPartnerResult;
  get_my_partners: GetMyPartnersResult;
  get_my_project: GetMyProjectResult;
  get_my_projects: GetMyProjectsResult;
  get_partner: GetPartnerResult;
  get_partner_approval_settings: GetPartnerApprovalSettingsResult;
  get_partner_billing_info: GetPartnerBillingInfoResult;
  get_partner_fan_points_balance: GetFanPointsBalanceResult;
  get_partner_fan_points_transactions: GetFanPointsTransactionsResult;
  get_partner_invoices: GetPartnerInvoicesResult;
  get_partner_product: GetPartnerProductResult;
  get_partner_products: GetPartnerProductsResult;
  get_partner_status_points_transactions: GetStatusPointsTransactionsResult;
  get_partner_store: GetPartnerStoreResult;
  get_partner_tokens: GetTokensResult;
  get_partner_user_invitations: GetBackendUserInvitationsResult;
  get_partner_users: GetBackendUsersResult;
  get_partners: GetPartnersResult;
  get_partnerships: GetPartnershipsResult;
  get_potential_partnerships: GetPotentialPartnershipsResult;
  get_price_in_fan_points: GetPriceInFanPointsResult;
  get_project: GetProjectResult;
  get_project_achievement_templates: GetProjectAchievementTemplatesResult;
  get_project_tokens: GetTokensResult;
  get_project_user_invitations: GetBackendUserInvitationsResult;
  get_project_users: GetBackendUsersResult;
  get_promotion_distribution_policies: GetPromotionDistributionPoliciesResult;
  get_promotion_distribution_policy: GetPromotionDistributionPolicyResult;
  get_received_partnership_requests: GetReceivedPartnershipRequestsResult;
  get_rejected_distribution_policies: GetRewardsToDistributeResult;
  get_sent_partnership_requests: GetSentPartnershipRequestsResult;
  get_shop_distribution_policies: GetShopItemsResult;
  get_shop_distribution_policy: GetShopItemResult;
  get_shop_item: GetShopItemResult;
  get_shop_items: GetShopItemsResult;
  get_status_points_balance: GetStatusPointsBalanceResult;
  get_status_points_for_action: GetNumStatusPointsForActionResult;
  get_status_points_transactions: GetStatusPointsTransactionsResult;
  get_unapproved_distribution_policies: GetRewardsToDistributeResult;
  get_user_by_id: GetUserResult;
  get_user_qr_code: GetQrCodeResult;
  get_users: GetUsersResult;
  get_wallet_customization: GetWalletCustomizationResult;
  ping: Scalars['String']['output'];
};


export type QueryEstimate_Given_Out_Fan_Points_On_PurchaseArgs = {
  partner_id: Scalars['String']['input'];
  purchase_items: Array<PurchaseItemPriceInput>;
};


export type QueryGet_Approved_Distribution_PoliciesArgs = {
  project_id: Scalars['String']['input'];
  purpose: RewardPurpose;
};


export type QueryGet_Bought_ProductsArgs = {
  earlier_than: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type QueryGet_Bought_Products_At_PartnerArgs = {
  delivery_status: InputMaybe<DeliveryStatus>;
  earlier_than: InputMaybe<Scalars['String']['input']>;
  later_than: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Current_Bidding_StatusArgs = {
  distribution_policy_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type QueryGet_Daily_Partner_StatisticsArgs = {
  end_date: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  start_date: Scalars['String']['input'];
};


export type QueryGet_Daily_Project_StatisticsArgs = {
  end_date: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  start_date: Scalars['String']['input'];
};


export type QueryGet_Distribution_Policies_For_RewardArgs = {
  partner_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type QueryGet_Distribution_PolicyArgs = {
  distribution_policy_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type QueryGet_Event_TypesArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_Fan_Points_BalanceArgs = {
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type QueryGet_Fan_Points_RatesArgs = {
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Fan_Points_TransactionArgs = {
  partner_id: Scalars['String']['input'];
  project_id: InputMaybe<Scalars['String']['input']>;
  purchase_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type QueryGet_Fan_Points_TransactionsArgs = {
  earlier_than: InputMaybe<Scalars['String']['input']>;
  later_than: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  project_id: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['String']['input'];
};


export type QueryGet_Lootbox_InfoArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_Lootbox_SettingsArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_LootboxesArgs = {
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type QueryGet_ModulesArgs = {
  scope_id: Scalars['String']['input'];
  scope_type: ScopeType;
};


export type QueryGet_My_PartnerArgs = {
  partner_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type QueryGet_My_PartnersArgs = {
  user_id: Scalars['String']['input'];
};


export type QueryGet_My_ProjectArgs = {
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type QueryGet_My_ProjectsArgs = {
  user_id: Scalars['String']['input'];
};


export type QueryGet_PartnerArgs = {
  partner_id: Scalars['String']['input'];
  project_id: InputMaybe<Scalars['String']['input']>;
};


export type QueryGet_Partner_Approval_SettingsArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_Partner_Billing_InfoArgs = {
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Partner_Fan_Points_BalanceArgs = {
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Partner_Fan_Points_TransactionsArgs = {
  earlier_than: InputMaybe<Scalars['String']['input']>;
  later_than: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Partner_InvoicesArgs = {
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Partner_ProductArgs = {
  partner_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type QueryGet_Partner_ProductsArgs = {
  last_returned_reward_id: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Partner_Status_Points_TransactionsArgs = {
  earlier_than: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Partner_StoreArgs = {
  partner_id: Scalars['String']['input'];
  project_id: InputMaybe<Scalars['String']['input']>;
  store_id: Scalars['String']['input'];
};


export type QueryGet_Partner_TokensArgs = {
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Partner_User_InvitationsArgs = {
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Partner_UsersArgs = {
  partner_id: Scalars['String']['input'];
};


export type QueryGet_PartnersArgs = {
  last_returned_partner_id: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  project_id: Scalars['String']['input'];
};


export type QueryGet_PartnershipsArgs = {
  party_id: Scalars['String']['input'];
  party_type: PartyType;
};


export type QueryGet_Potential_PartnershipsArgs = {
  last_returned_party_id: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  party_id: Scalars['String']['input'];
  party_type: PartyType;
};


export type QueryGet_Price_In_Fan_PointsArgs = {
  currency: Currency;
  partner_id: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};


export type QueryGet_ProjectArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_Project_Achievement_TemplatesArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_Project_TokensArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_Project_User_InvitationsArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_Project_UsersArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_Promotion_Distribution_PoliciesArgs = {
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Promotion_Distribution_PolicyArgs = {
  distribution_policy_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type QueryGet_Received_Partnership_RequestsArgs = {
  requested_id: Scalars['String']['input'];
};


export type QueryGet_Rejected_Distribution_PoliciesArgs = {
  project_id: Scalars['String']['input'];
  purpose: RewardPurpose;
};


export type QueryGet_Sent_Partnership_RequestsArgs = {
  requesting_id: Scalars['String']['input'];
};


export type QueryGet_Shop_Distribution_PoliciesArgs = {
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Shop_Distribution_PolicyArgs = {
  distribution_policy_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  reward_id: Scalars['String']['input'];
};


export type QueryGet_Shop_ItemArgs = {
  distribution_policy_id: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  return_prices_in_fan_points: InputMaybe<Scalars['Boolean']['input']>;
  reward_id: Scalars['String']['input'];
};


export type QueryGet_Shop_ItemsArgs = {
  last_returned_reward_id: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  product_category: InputMaybe<ProductCategory>;
  project_id: Scalars['String']['input'];
  return_only_listed: Scalars['Boolean']['input'];
  return_prices_in_fan_points: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGet_Status_Points_BalanceArgs = {
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type QueryGet_Status_Points_For_ActionArgs = {
  action_category: Scalars['String']['input'];
  partner_id: Scalars['String']['input'];
};


export type QueryGet_Status_Points_TransactionsArgs = {
  earlier_than: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  project_id: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['String']['input'];
};


export type QueryGet_Unapproved_Distribution_PoliciesArgs = {
  project_id: Scalars['String']['input'];
  purpose: RewardPurpose;
};


export type QueryGet_User_By_IdArgs = {
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type QueryGet_User_Qr_CodeArgs = {
  user_id: Scalars['String']['input'];
  version: QrCodeVersion;
};


export type QueryGet_UsersArgs = {
  last_returned_user_id: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  project_id: Scalars['String']['input'];
};


export type QueryGet_Wallet_CustomizationArgs = {
  project_id: Scalars['String']['input'];
};

export type RejectDistributionPolicyErrors = {
  unknown_product_error: Maybe<UnknownProductError>;
};

export type RejectDistributionPolicyResult = {
  errors: Maybe<RejectDistributionPolicyErrors>;
};

export type RejectProductErrors = {
  unknown_product_error: Maybe<UnknownProductError>;
};

export type RejectProductResult = {
  errors: Maybe<RejectProductErrors>;
};

export type RequestFanPointsErrors = {
  invalid_reward_amount_error: Maybe<InvalidRewardAmountError>;
};

export type RequestFanPointsResult = {
  errors: Maybe<RequestFanPointsErrors>;
};

export type ResetBrandingResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type Reward = FanPointsReward | Lootbox | LotteryTicket | Product;

export type RewardPurpose =
  | 'lootbox_rewards'
  | 'shop';

export type RewardToDistribute = {
  balance: Scalars['Long']['output'];
  distribution_policy: DistributionPolicy;
  owner_id: Scalars['String']['output'];
  reward_id: Scalars['String']['output'];
  reward_type: Scalars['String']['output'];
  template: Maybe<Reward>;
};

export type RewardTransaction = {
  can_be_undone: Scalars['Boolean']['output'];
  claimed_date: Maybe<Scalars['String']['output']>;
  details: TransactionDetails;
  group_id: Scalars['String']['output'];
  group_size: Scalars['Int']['output'];
  nr: Scalars['Int']['output'];
  old_owner_id: Scalars['String']['output'];
  only_reserved: Scalars['Boolean']['output'];
  owner_id: Scalars['String']['output'];
  reservation_date: Maybe<Scalars['String']['output']>;
  reward: Reward;
  transaction_date: Scalars['String']['output'];
};

export type Role =
  | 'admin'
  | 'content_manager'
  | 'owner'
  | 'unauthorized'
  | 'user';

export type RoleAttachment = {
  entity_id: Scalars['String']['output'];
  entity_name: Scalars['String']['output'];
  role: Role;
};

export type ScopeType =
  | 'partner'
  | 'project';

export type SendPartnershipRequestResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type SetFanPointsRateErrors = {
  invalid_rate_error: Maybe<InvalidRateError>;
  invalid_rate_label_error: Maybe<InvalidRateLabelError>;
};

export type SetFanPointsRateResult = {
  errors: Maybe<SetFanPointsRateErrors>;
};

export type SetWalletCustomizationResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type ShopAuctionDistributionPolicy = {
  approval_status: ApprovalStatus;
  auction_end_date: Scalars['String']['output'];
  auction_start_date: Scalars['String']['output'];
  auction_status: AuctionResultStatus;
  currency: Currency;
  distribution_policy_id: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  min_bid: Scalars['Float']['output'];
  project: Project;
  rejection_reason: Maybe<Scalars['String']['output']>;
};

export type ShopItemDistributionType =
  | 'bidding'
  | 'lottery'
  | 'purchase';

export type ShopLotteryDistributionPolicy = {
  approval_status: ApprovalStatus;
  currency: Currency;
  distribution_policy_id: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  lottery_end_date: Scalars['String']['output'];
  lottery_start_date: Scalars['String']['output'];
  lottery_status: LotteryDrawStatus;
  num_tickets_to_draw: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  project: Project;
  rejection_reason: Maybe<Scalars['String']['output']>;
};

export type ShopPurchaseDistributionPolicy = {
  approval_status: ApprovalStatus;
  currency: Currency;
  distribution_policy_id: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  price: Scalars['Float']['output'];
  project: Project;
  rejection_reason: Maybe<Scalars['String']['output']>;
  sale_start_date: Maybe<Scalars['String']['output']>;
};

export type StatusPointsReward = {
  amount: Scalars['Int']['output'];
  reward_id: Scalars['String']['output'];
  reward_type: Scalars['String']['output'];
};

export type StatusPointsTransaction = {
  action_category: Scalars['String']['output'];
  action_id: Scalars['String']['output'];
  amount: Scalars['Int']['output'];
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  partner_id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

export type Store = {
  address: Address;
  name: Scalars['String']['output'];
  partner_id: Scalars['String']['output'];
  store_id: Scalars['String']['output'];
};

export type Subscription = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type ToggleModuleErrors = {
  invalid_module_id_error: Maybe<InvalidModuleIdError>;
  module_cannot_be_deactivated_error: Maybe<ModuleCannotBeDeactivatedError>;
};

export type ToggleModuleResult = {
  errors: Maybe<ToggleModuleErrors>;
};

export type Token = {
  client_id: Scalars['String']['output'];
  creation_date: Scalars['String']['output'];
  expiration_date: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TooFewAvailableError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type TransactionDetails = {
  delivery_address: Maybe<Address>;
  delivery_name: Maybe<Scalars['String']['output']>;
  transaction_type: TransactionType;
};

export type TransactionNotFoundError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type TransactionType =
  | 'achievement'
  | 'card_level_purchase'
  | 'card_progress_lootbox'
  | 'card_trade'
  | 'coupon_claim'
  | 'coupon_redemption'
  | 'daily_draw'
  | 'daily_lootbox'
  | 'default_skin_distribution'
  | 'fan_points_collection'
  | 'fan_points_distribution'
  | 'general_claim'
  | 'issue_end_season_lootbox'
  | 'issue_in_season_reward'
  | 'issue_partner_reward'
  | 'lootbox_reveal'
  | 'lootbox_reward'
  | 'points_gift'
  | 'revoke_reservation'
  | 'shop_purchase'
  | 'undo_transaction';

export type TransferOwnershipErrors = {
  new_owner_not_in_scope_error: Maybe<NewOwnerNotInScopeError>;
};

export type TransferOwnershipResult = {
  errors: Maybe<TransferOwnershipErrors>;
};

export type UnknownAchievementTemplateError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type UnknownLootboxError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type UnknownPartnershipError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type UnknownPolicyAttachmentError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type UnknownProductError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type UnknownPromotionError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type UnknownStoreError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type UnknownUserError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type UnkownError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type User = {
  external_user_id: Scalars['String']['output'];
  mail_address: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

export type UserAlreadyExistsError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type WalletCustomization = {
  background_color: Scalars['String']['output'];
  logo_url: Scalars['String']['output'];
  project_id: Scalars['String']['output'];
  show_fanpoints_logo: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type EstimateGivenOutFanPointsOnPurchaseQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  purchaseItems: Array<PurchaseItemPriceInput> | PurchaseItemPriceInput;
}>;


export type EstimateGivenOutFanPointsOnPurchaseQuery = { estimateGivenOutFanPointsOnPurchase: { result: number | undefined, errors: { invalidRateLabelError: { _empty: string | undefined } | undefined } | undefined } };

export type GetFanPointsTransactionQueryVariables = Exact<{
  projectId: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  purchaseId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
}>;


export type GetFanPointsTransactionQuery = { getFanPointsTransaction: { result: { purchaseId: string, userId: string, transactionType: FanPointsTransactionType, purchaseItems: Array<{ title: string, description: string, price: number, currency: Currency, amount: number, date: string, purchaseItemId: string, partnerId: string, rateLabel: string | undefined, hasBeenUndone: boolean, hasBeenSettled: boolean, partner: { name: string, description: string, website: string, branding: { logoUrl: string | undefined } } }> } | undefined, errors: { unknownUserError: { _empty: string | undefined } | undefined, transactionNotFoundError: { _empty: string | undefined } | undefined } | undefined } };

export type GetFanPointsTransactionsQueryVariables = Exact<{
  projectId: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  limit: InputMaybe<Scalars['Int']['input']>;
  earlierThan: InputMaybe<Scalars['String']['input']>;
}>;


export type GetFanPointsTransactionsQuery = { getFanPointsTransactions: { result: Array<{ purchaseId: string, userId: string, transactionType: FanPointsTransactionType, purchaseItems: Array<{ title: string, description: string, price: number, currency: Currency, amount: number, date: string, purchaseItemId: string, partnerId: string, rateLabel: string | undefined, hasBeenUndone: boolean, hasBeenSettled: boolean, partner: { name: string, description: string, website: string, branding: { logoUrl: string | undefined } } }> }> | undefined, errors: { unknownUserError: { _empty: string | undefined } | undefined } | undefined } };

export type GetFanPointsBalanceQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type GetFanPointsBalanceQuery = { getFanPointsBalance: { result: { currency: Currency, fanPoints: number, monetaryValue: number } | undefined, errors: { unknownUserError: { _empty: string | undefined } | undefined } | undefined } };

export type GetPriceInFanPointsQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  currency: Currency;
}>;


export type GetPriceInFanPointsQuery = { getPriceInFanPoints: { result: number | undefined, errors: { InvalidRewardAmountError: { _empty: string | undefined } | undefined } | undefined } };

export type GiveFanPointsOnPurchaseMutationVariables = Exact<{
  projectId: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  purchaseItems: Array<PurchaseItemInput> | PurchaseItemInput;
  customPurchaseId: InputMaybe<Scalars['String']['input']>;
}>;


export type GiveFanPointsOnPurchaseMutation = { giveFanPointsOnPurchase: { errors: { unknownUserError: { _empty: string | undefined } | undefined, invalidRewardAmountError: { _empty: string | undefined } | undefined, tooFewAvailableError: { _empty: string | undefined } | undefined, invalidTransactionIdError: { _empty: string | undefined } | undefined, invalidRateLabelError: { _empty: string | undefined } | undefined, alreadyExecutedError: { _empty: string | undefined } | undefined, nonUniquePurchaseItemIdsError: { _empty: string | undefined } | undefined } | undefined, result: { purchaseId: string, userId: string, transactionType: FanPointsTransactionType, purchaseItems: Array<{ title: string, description: string, price: number, currency: Currency, amount: number, date: string, purchaseItemId: string, partnerId: string, rateLabel: string | undefined, hasBeenUndone: boolean, hasBeenSettled: boolean, partner: { name: string, description: string, website: string, branding: { logoUrl: string | undefined } } }> } | undefined } };

export type PayPurchaseWithFanPointsMutationVariables = Exact<{
  projectId: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  purchaseItems: Array<PurchaseItemInput> | PurchaseItemInput;
  customPurchaseId: InputMaybe<Scalars['String']['input']>;
}>;


export type PayPurchaseWithFanPointsMutation = { payPurchaseWithFanPoints: { errors: { unknownUserError: { _empty: string | undefined } | undefined, invalidRewardAmountError: { _empty: string | undefined } | undefined, tooFewAvailableError: { _empty: string | undefined } | undefined, invalidTransactionIdError: { _empty: string | undefined } | undefined, invalidRateLabelError: { _empty: string | undefined } | undefined, alreadyExecutedError: { _empty: string | undefined } | undefined, nonUniquePurchaseItemIdsError: { _empty: string | undefined } | undefined } | undefined, result: { purchaseId: string, userId: string, transactionType: FanPointsTransactionType, purchaseItems: Array<{ title: string, description: string, price: number, currency: Currency, amount: number, date: string, purchaseItemId: string, partnerId: string, rateLabel: string | undefined, hasBeenUndone: boolean, hasBeenSettled: boolean, partner: { name: string, description: string, website: string, branding: { logoUrl: string | undefined } } }> } | undefined } };

export type UndoFanPointsPurchaseMutationVariables = Exact<{
  projectId: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  purchaseId: Scalars['String']['input'];
  purchaseItemId: InputMaybe<Scalars['String']['input']>;
}>;


export type UndoFanPointsPurchaseMutation = { undoFanPointsPurchase: { result: { purchaseId: string, userId: string, transactionType: FanPointsTransactionType, purchaseItems: Array<{ title: string, description: string, price: number, currency: Currency, amount: number, date: string, purchaseItemId: string, partnerId: string, rateLabel: string | undefined, hasBeenUndone: boolean, hasBeenSettled: boolean, partner: { name: string, description: string, website: string, branding: { logoUrl: string | undefined } } }> } | undefined, errors: { unknownUserError: { _empty: string | undefined } | undefined, invalidRewardAmountError: { _empty: string | undefined } | undefined, tooFewAvailableError: { _empty: string | undefined } | undefined, transactionNotFoundError: { _empty: string | undefined } | undefined, invalidTransactionIdError: { _empty: string | undefined } | undefined, alreadyExecutedError: { _empty: string | undefined } | undefined } | undefined } };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { ping: string };

export type ClaimPrizesMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  transactionGroupId: Scalars['String']['input'];
}>;


export type ClaimPrizesMutation = { claimPrizes: { errors: { unknownUserError: { _empty: string | undefined } | undefined, unknownLootboxError: { _empty: string | undefined } | undefined } | undefined } };

export type GetLootboxesQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type GetLootboxesQuery = { getLootboxes: { errors: { unknownUserError: { _empty: string | undefined } | undefined } | undefined, result: Array<{ transactionGroupId: string, transactionNr: number, lootbox: { rewardType: 'FanPointsReward' } | { opened: boolean, rewardId: string, rewardType: 'Lootbox' } | { rewardType: 'LotteryTicket' } | { rewardType: 'Product' } }> | undefined } };

export type OpenLootboxMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  transactionGroupId: Scalars['String']['input'];
  transactionNr: Scalars['Int']['input'];
}>;


export type OpenLootboxMutation = { openLootbox: { result: Array<{ transactionGroupId: string, transactionNr: number, prize: { amount: number, rewardId: string, rewardType: 'FanPointsReward' } | { rewardType: 'Lootbox' } | { rewardType: 'LotteryTicket' } | { title: string, description: string, rewardId: string, productCategory: ProductCategory, imageUrls: Array<string>, rewardType: 'Product', partner: { name: string, partnerId: string, branding: { logoColorUrl: string | undefined } } } }> | undefined, errors: { unknownUserError: { _empty: string | undefined } | undefined, unknownLootboxError: { _empty: string | undefined } | undefined, alreadyOpenedLootboxError: { _empty: string | undefined } | undefined } | undefined } };

export type BidOnShopItemMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  rewardId: Scalars['String']['input'];
  distributionPolicyId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  bid: Scalars['Int']['input'];
  deliveryAddress: AddressInput;
  deliveryName: Scalars['String']['input'];
}>;


export type BidOnShopItemMutation = { bidOnShopItem: { errors: { invalidBidAmountError: { _empty: string | undefined } | undefined, tooFewAvailableError: { _empty: string | undefined } | undefined, unknownProductError: { _empty: string | undefined } | undefined, unknownUserError: { _empty: string | undefined } | undefined } | undefined } };

export type GetAuctionStatusQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  rewardId: Scalars['String']['input'];
  distributionPolicyId: Scalars['String']['input'];
}>;


export type GetAuctionStatusQuery = { getAuctionStatus: { errors: { unknownProductError: { _empty: string | undefined } | undefined, unknownUserError: { _empty: string | undefined } | undefined } | undefined, result: { isAuctionOpen: boolean, currentHighestBid: number, currentUserBid: number | undefined, nextHigherBid: number, isUserHighestBidder: boolean, bids: Array<{ date: string, bidderId: string, fanPoints: number, byCurrentUser: boolean }> } | undefined } };

export type GetShopItemQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  distributionPolicyId: Scalars['String']['input'];
  rewardId: Scalars['String']['input'];
}>;


export type GetShopItemQuery = { getShopItem: { result: { rewardId: string, product: { rewardType: 'FanPointsReward' } | { rewardType: 'Lootbox' } | { rewardType: 'LotteryTicket' } | { title: string, description: string, productCategory: ProductCategory, imageUrls: Array<string>, rewardType: 'Product', partner: { name: string, partnerId: string, branding: { logoColorUrl: string | undefined } } } | undefined, distributionPolicy: { distributionType: 'BasicDistributionPolicy' } | { distributionType: 'PromotionDistributionPolicy' } | { currency: Currency, distributionPolicyId: string, minBid: number, auctionStartDate: string, auctionEndDate: string, auctionStatus: AuctionResultStatus, distributionType: 'ShopAuctionDistributionPolicy' } | { currency: Currency, distributionPolicyId: string, ticketPrice: number, lotteryStartDate: string, lotteryEndDate: string, lotteryStatus: LotteryDrawStatus, numTicketsToDraw: number, distributionType: 'ShopLotteryDistributionPolicy' } | { price: number, currency: Currency, distributionPolicyId: string, distributionType: 'ShopPurchaseDistributionPolicy' } } | undefined, errors: { unknownProductError: { _empty: string | undefined } | undefined } | undefined } };

export type GetShopItemsQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
  productCategory: InputMaybe<ProductCategory>;
  lastReturnedRewardId: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetShopItemsQuery = { getShopItems: { result: Array<{ rewardId: string, partnerId: string, product: { rewardType: 'FanPointsReward' } | { rewardType: 'Lootbox' } | { rewardType: 'LotteryTicket' } | { title: string, description: string, productCategory: ProductCategory, imageUrls: Array<string>, rewardType: 'Product', partner: { name: string, partnerId: string, branding: { logoColorUrl: string | undefined } } } | undefined, distributionPolicy: { distributionType: 'BasicDistributionPolicy' } | { distributionType: 'PromotionDistributionPolicy' } | { currency: Currency, distributionPolicyId: string, minBid: number, auctionStartDate: string, auctionEndDate: string, auctionStatus: AuctionResultStatus, distributionType: 'ShopAuctionDistributionPolicy' } | { currency: Currency, distributionPolicyId: string, ticketPrice: number, lotteryStartDate: string, lotteryEndDate: string, lotteryStatus: LotteryDrawStatus, numTicketsToDraw: number, distributionType: 'ShopLotteryDistributionPolicy' } | { price: number, currency: Currency, distributionPolicyId: string, distributionType: 'ShopPurchaseDistributionPolicy' } }> } };

export type GetShopPurchasesQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  earlierThan: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetShopPurchasesQuery = { getShopPurchases: { errors: { unknownUserError: { _empty: string | undefined } | undefined } | undefined, result: Array<{ transactionGroupId: string, transactionNr: number, purchaseDate: string, product: { rewardType: 'FanPointsReward' } | { rewardType: 'Lootbox' } | { rewardType: 'LotteryTicket' } | { title: string, description: string, rewardId: string, productCategory: ProductCategory, imageUrls: Array<string>, deliveryStatus: DeliveryStatus, deliveryDate: string | undefined, rewardType: 'Product', partner: { name: string, partnerId: string, branding: { logoColorUrl: string | undefined } } }, deliveryDetails: { deliveryName: string | undefined, deliveryAddress: { street: string, country: string, city: string, zipCode: string } | undefined } }> | undefined } };

export type PurchaseLotteryTicketMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  rewardId: Scalars['String']['input'];
  distributionPolicyId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  amount: Scalars['Int']['input'];
  deliveryAddress: AddressInput;
  deliveryName: Scalars['String']['input'];
}>;


export type PurchaseLotteryTicketMutation = { purchaseLotteryTicket: { errors: { invalidAmountError: { _empty: string | undefined } | undefined, tooFewAvailableError: { _empty: string | undefined } | undefined, unknownProductError: { _empty: string | undefined } | undefined, unknownUserError: { _empty: string | undefined } | undefined } | undefined } };

export type PurchaseShopItemMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  rewardId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  distributionPolicyId: Scalars['String']['input'];
  amount: Scalars['Int']['input'];
  deliveryAddress: AddressInput;
  deliveryName: Scalars['String']['input'];
}>;


export type PurchaseShopItemMutation = { purchaseShopItem: { errors: { invalidAmountError: { _empty: string | undefined } | undefined, tooFewAvailableError: { _empty: string | undefined } | undefined, unknownProductError: { _empty: string | undefined } | undefined, unknownUserError: { _empty: string | undefined } | undefined } | undefined } };

export type GetStatusPointsBalanceQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type GetStatusPointsBalanceQuery = { getStatusPointsBalance: { result: number | undefined, errors: { unknownUserError: { _empty: string | undefined } | undefined } | undefined } };

export type GetStatusPointsForActionQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  actionCategory: Scalars['String']['input'];
}>;


export type GetStatusPointsForActionQuery = { getStatusPointsForAction: { result: number | undefined, errors: { invalidActionCategoryError: { _empty: string | undefined } | undefined } | undefined } };

export type GetStatusPointsTransactionsQueryVariables = Exact<{
  projectId: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  limit: InputMaybe<Scalars['Int']['input']>;
  earlierThan: InputMaybe<Scalars['String']['input']>;
}>;


export type GetStatusPointsTransactionsQuery = { getStatusPointsTransactions: { result: Array<{ title: string, description: string, amount: number, date: string, actionId: string, userId: string, partnerId: string, actionCategory: string }> | undefined, errors: { unknownUserError: { _empty: string | undefined } | undefined } | undefined } };

export type GiveStatusPointsMutationVariables = Exact<{
  projectId: InputMaybe<Scalars['String']['input']>;
  actionCategory: Scalars['String']['input'];
  customActionId: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type GiveStatusPointsMutation = { giveStatusPoints: { errors: { unknownUserError: { _empty: string | undefined } | undefined, invalidRewardAmountError: { _empty: string | undefined } | undefined, tooFewAvailableError: { _empty: string | undefined } | undefined, invalidTransactionIdError: { _empty: string | undefined } | undefined, invalidActionCategoryError: { _empty: string | undefined } | undefined, alreadyExecutedError: { _empty: string | undefined } | undefined } | undefined, result: { title: string, description: string, amount: number, date: string, actionId: string, userId: string, partnerId: string, actionCategory: string } | undefined } };

export type UndoStatusPointsTransactionMutationVariables = Exact<{
  projectId: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  actionId: Scalars['String']['input'];
}>;


export type UndoStatusPointsTransactionMutation = { undoStatusPointsTransaction: { result: { title: string, description: string, amount: number, date: string, actionId: string, userId: string, partnerId: string, actionCategory: string } | undefined, errors: { unknownUserError: { _empty: string | undefined } | undefined, invalidRewardAmountError: { _empty: string | undefined } | undefined, tooFewAvailableError: { _empty: string | undefined } | undefined, transactionNotFoundError: { _empty: string | undefined } | undefined, invalidTransactionIdError: { _empty: string | undefined } | undefined, invalidActionCategoryError: { _empty: string | undefined } | undefined, alreadyExecutedError: { _empty: string | undefined } | undefined } | undefined } };

export type AddUserMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  mailAddress: Scalars['String']['input'];
}>;


export type AddUserMutation = { addUser: { errors: { invalidMailAddressError: { _empty: string | undefined } | undefined, invalidUserIdError: { reason: string } | undefined, userAlreadyExistsError: { _empty: string | undefined } | undefined } | undefined } };

export type ChangeUserIdMutationVariables = Exact<{
  newUserId: Scalars['String']['input'];
  oldUserId: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
}>;


export type ChangeUserIdMutation = { changeUserId: { errors: { invalidUserIdError: { reason: string } | undefined, unknownUserError: { _empty: string | undefined } | undefined, userAlreadyExistsError: { _empty: string | undefined } | undefined } | undefined } };

export type ChangeUserMailAddressMutationVariables = Exact<{
  newMailAddress: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type ChangeUserMailAddressMutation = { changeUserMailAddress: { errors: { invalidMailAdressError: { _empty: string | undefined } | undefined, unknownUserError: { _empty: string | undefined } | undefined } | undefined } };

export type DeleteUserMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { deleteUser: { errors: { unknownUserError: { _empty: string | undefined } | undefined } | undefined } };

export type GetUserByIdQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type GetUserByIdQuery = { getUserById: { errors: { unknownUserError: { _empty: string | undefined } | undefined } | undefined, result: { mailAddress: string, fanPointsUserId: string, userId: string } | undefined } };

export type GetUserPassesMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type GetUserPassesMutation = { generateAppleWalletPass: { result: string }, generateGoogleWalletPass: { result: string } };


export const EstimateGivenOutFanPointsOnPurchaseDocument = gql`
    query estimateGivenOutFanPointsOnPurchase($partnerId: String!, $purchaseItems: [PurchaseItemPriceInput!]!) {
  estimateGivenOutFanPointsOnPurchase: estimate_given_out_fan_points_on_purchase(
    partner_id: $partnerId
    purchase_items: $purchaseItems
  ) {
    errors {
      invalidRateLabelError: invalid_rate_label_error {
        _empty
      }
    }
    result
  }
}
    `;
export const GetFanPointsTransactionDocument = gql`
    query getFanPointsTransaction($projectId: String, $userId: String!, $purchaseId: String!, $partnerId: String!) {
  getFanPointsTransaction: get_fan_points_transaction(
    project_id: $projectId
    user_id: $userId
    purchase_id: $purchaseId
    partner_id: $partnerId
  ) {
    result {
      purchaseId: purchase_id
      userId: user_id
      transactionType: transaction_type
      purchaseItems: purchase_items {
        purchaseItemId: purchase_item_id
        partnerId: partner_id
        partner {
          name
          description
          website
          branding {
            logoUrl: logo_color_url
          }
        }
        title
        description
        price
        currency
        amount
        rateLabel: rate_label
        date
        hasBeenUndone: has_been_undone
        hasBeenSettled: has_been_settled
      }
    }
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
      transactionNotFoundError: transaction_not_found_error {
        _empty
      }
    }
  }
}
    `;
export const GetFanPointsTransactionsDocument = gql`
    query getFanPointsTransactions($projectId: String, $userId: String!, $limit: Int, $earlierThan: String) {
  getFanPointsTransactions: get_fan_points_transactions(
    project_id: $projectId
    user_id: $userId
    earlier_than: $earlierThan
    limit: $limit
  ) {
    result {
      purchaseId: purchase_id
      userId: user_id
      transactionType: transaction_type
      purchaseItems: purchase_items {
        purchaseItemId: purchase_item_id
        partnerId: partner_id
        partner {
          name
          description
          website
          branding {
            logoUrl: logo_color_url
          }
        }
        title
        description
        price
        currency
        amount
        rateLabel: rate_label
        date
        hasBeenUndone: has_been_undone
        hasBeenSettled: has_been_settled
      }
    }
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
    }
  }
}
    `;
export const GetFanPointsBalanceDocument = gql`
    query getFanPointsBalance($projectId: String!, $userId: String!) {
  getFanPointsBalance: get_fan_points_balance(
    project_id: $projectId
    user_id: $userId
  ) {
    result {
      fanPoints: fan_points
      monetaryValue: monetary_value
      currency
    }
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
    }
  }
}
    `;
export const GetPriceInFanPointsDocument = gql`
    query getPriceInFanPoints($partnerId: String!, $price: Float!, $currency: Currency!) {
  getPriceInFanPoints: get_price_in_fan_points(
    partner_id: $partnerId
    price: $price
    currency: $currency
  ) {
    errors {
      InvalidRewardAmountError: invalid_reward_amount_error {
        _empty
      }
    }
    result
  }
}
    `;
export const GiveFanPointsOnPurchaseDocument = gql`
    mutation giveFanPointsOnPurchase($projectId: String, $userId: String!, $partnerId: String!, $purchaseItems: [PurchaseItemInput!]!, $customPurchaseId: String) {
  giveFanPointsOnPurchase: give_fan_points_on_purchase(
    project_id: $projectId
    user_id: $userId
    partner_id: $partnerId
    purchase_items: $purchaseItems
    custom_purchase_id: $customPurchaseId
  ) {
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
      invalidRewardAmountError: invalid_reward_amount_error {
        _empty
      }
      tooFewAvailableError: too_few_available_error {
        _empty
      }
      invalidTransactionIdError: invalid_transaction_id_error {
        _empty
      }
      invalidRateLabelError: invalid_rate_label_error {
        _empty
      }
      alreadyExecutedError: already_executed_error {
        _empty
      }
      nonUniquePurchaseItemIdsError: non_unique_purchase_item_ids_error {
        _empty
      }
    }
    result {
      purchaseId: purchase_id
      userId: user_id
      transactionType: transaction_type
      purchaseItems: purchase_items {
        purchaseItemId: purchase_item_id
        partnerId: partner_id
        partner {
          name
          description
          website
          branding {
            logoUrl: logo_color_url
          }
        }
        title
        description
        price
        currency
        amount
        rateLabel: rate_label
        date
        hasBeenUndone: has_been_undone
        hasBeenSettled: has_been_settled
      }
    }
  }
}
    `;
export const PayPurchaseWithFanPointsDocument = gql`
    mutation payPurchaseWithFanPoints($projectId: String, $userId: String!, $partnerId: String!, $purchaseItems: [PurchaseItemInput!]!, $customPurchaseId: String) {
  payPurchaseWithFanPoints: pay_purchase_with_fan_points(
    project_id: $projectId
    user_id: $userId
    partner_id: $partnerId
    purchase_items: $purchaseItems
    custom_purchase_id: $customPurchaseId
  ) {
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
      invalidRewardAmountError: invalid_reward_amount_error {
        _empty
      }
      tooFewAvailableError: too_few_available_error {
        _empty
      }
      invalidTransactionIdError: invalid_transaction_id_error {
        _empty
      }
      invalidRateLabelError: invalid_rate_label_error {
        _empty
      }
      alreadyExecutedError: already_executed_error {
        _empty
      }
      nonUniquePurchaseItemIdsError: non_unique_purchase_item_ids_error {
        _empty
      }
    }
    result {
      purchaseId: purchase_id
      userId: user_id
      transactionType: transaction_type
      purchaseItems: purchase_items {
        purchaseItemId: purchase_item_id
        partnerId: partner_id
        partner {
          name
          description
          website
          branding {
            logoUrl: logo_color_url
          }
        }
        title
        description
        price
        currency
        amount
        rateLabel: rate_label
        date
        hasBeenUndone: has_been_undone
        hasBeenSettled: has_been_settled
      }
    }
  }
}
    `;
export const UndoFanPointsPurchaseDocument = gql`
    mutation undoFanPointsPurchase($projectId: String, $userId: String!, $partnerId: String!, $purchaseId: String!, $purchaseItemId: String) {
  undoFanPointsPurchase: undo_fan_points_transaction(
    project_id: $projectId
    user_id: $userId
    partner_id: $partnerId
    purchase_id: $purchaseId
    purchase_item_id: $purchaseItemId
  ) {
    result {
      purchaseId: purchase_id
      userId: user_id
      transactionType: transaction_type
      purchaseItems: purchase_items {
        purchaseItemId: purchase_item_id
        partnerId: partner_id
        partner {
          name
          description
          website
          branding {
            logoUrl: logo_color_url
          }
        }
        title
        description
        price
        currency
        amount
        rateLabel: rate_label
        date
        hasBeenUndone: has_been_undone
        hasBeenSettled: has_been_settled
      }
    }
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
      invalidRewardAmountError: invalid_reward_amount_error {
        _empty
      }
      tooFewAvailableError: too_few_available_error {
        _empty
      }
      transactionNotFoundError: transaction_not_found_error {
        _empty
      }
      invalidTransactionIdError: invalid_transaction_id_error {
        _empty
      }
      alreadyExecutedError: already_executed_error {
        _empty
      }
    }
  }
}
    `;
export const PingDocument = gql`
    query ping {
  ping
}
    `;
export const ClaimPrizesDocument = gql`
    mutation claimPrizes($projectId: String!, $userId: String!, $transactionGroupId: String!) {
  claimPrizes: claim_lootbox_rewards(
    project_id: $projectId
    user_id: $userId
    rewards_transaction_group_id: $transactionGroupId
  ) {
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
      unknownLootboxError: unknown_lootbox_error {
        _empty
      }
    }
  }
}
    `;
export const GetLootboxesDocument = gql`
    query getLootboxes($projectId: String!, $userId: String!) {
  getLootboxes: get_lootboxes(project_id: $projectId, user_id: $userId) {
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
    }
    result {
      transactionGroupId: group_id
      transactionNr: nr
      lootbox: reward {
        rewardType: __typename
        ... on Lootbox {
          rewardId: reward_id
          opened
        }
      }
    }
  }
}
    `;
export const OpenLootboxDocument = gql`
    mutation openLootbox($projectId: String!, $userId: String!, $transactionGroupId: String!, $transactionNr: Int!) {
  openLootbox: open_lootbox(
    project_id: $projectId
    user_id: $userId
    transaction_group_id: $transactionGroupId
    transaction_nr: $transactionNr
  ) {
    result {
      transactionGroupId: group_id
      transactionNr: nr
      prize: reward {
        rewardType: __typename
        ... on Product {
          rewardId: reward_id
          title
          description
          productCategory: product_category
          imageUrls: image_urls
          partner {
            partnerId: partner_id
            name
            branding {
              logoColorUrl: logo_color_url
            }
          }
        }
        ... on FanPointsReward {
          rewardId: reward_id
          amount
        }
      }
    }
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
      unknownLootboxError: unknown_lootbox_error {
        _empty
      }
      alreadyOpenedLootboxError: already_opened_error {
        _empty
      }
    }
  }
}
    `;
export const BidOnShopItemDocument = gql`
    mutation bidOnShopItem($projectId: String!, $userId: String!, $rewardId: String!, $distributionPolicyId: String!, $partnerId: String!, $bid: Int!, $deliveryAddress: AddressInput!, $deliveryName: String!) {
  bidOnShopItem: bid_on_shop_item(
    project_id: $projectId
    user_id: $userId
    reward_id: $rewardId
    distribution_policy_id: $distributionPolicyId
    partner_id: $partnerId
    bid_fan_points: $bid
    delivery_address: $deliveryAddress
    delivery_name: $deliveryName
  ) {
    errors {
      invalidBidAmountError: invalid_bid_amount_error {
        _empty
      }
      tooFewAvailableError: too_few_available_error {
        _empty
      }
      unknownProductError: unknown_product_error {
        _empty
      }
      unknownUserError: unknown_user_error {
        _empty
      }
    }
  }
}
    `;
export const GetAuctionStatusDocument = gql`
    query getAuctionStatus($projectId: String!, $userId: String!, $partnerId: String!, $rewardId: String!, $distributionPolicyId: String!) {
  getAuctionStatus: get_current_bidding_status(
    partner_id: $partnerId
    project_id: $projectId
    reward_id: $rewardId
    user_id: $userId
    distribution_policy_id: $distributionPolicyId
  ) {
    errors {
      unknownProductError: unknown_product_error {
        _empty
      }
      unknownUserError: unknown_user_error {
        _empty
      }
    }
    result {
      isAuctionOpen: is_bidding_open
      bids {
        bidderId: bidder_id
        date
        fanPoints: fan_points
        byCurrentUser: by_current_user
      }
      currentHighestBid: current_highest_bid_fan_points
      currentUserBid: current_user_bid_fan_points
      nextHigherBid: next_higher_bid_fan_points
      isUserHighestBidder: is_user_highest_bidder
    }
  }
}
    `;
export const GetShopItemDocument = gql`
    query getShopItem($projectId: String!, $partnerId: String!, $distributionPolicyId: String!, $rewardId: String!) {
  getShopItem: get_shop_item(
    project_id: $projectId
    partner_id: $partnerId
    reward_id: $rewardId
    distribution_policy_id: $distributionPolicyId
    return_prices_in_fan_points: true
  ) {
    result {
      rewardId: reward_id
      product: template {
        rewardType: __typename
        ... on Product {
          title
          description
          productCategory: product_category
          imageUrls: image_urls
          partner {
            partnerId: partner_id
            name
            branding {
              logoColorUrl: logo_color_url
            }
          }
        }
      }
      distributionPolicy: distribution_policy {
        distributionType: __typename
        ... on ShopPurchaseDistributionPolicy {
          distributionPolicyId: distribution_policy_id
          price
          currency
        }
        ... on ShopAuctionDistributionPolicy {
          distributionPolicyId: distribution_policy_id
          minBid: min_bid
          currency
          auctionStartDate: auction_start_date
          auctionEndDate: auction_end_date
          auctionStatus: auction_status
        }
        ... on ShopLotteryDistributionPolicy {
          distributionPolicyId: distribution_policy_id
          ticketPrice: price
          currency
          lotteryStartDate: lottery_start_date
          lotteryEndDate: lottery_end_date
          lotteryStatus: lottery_status
          numTicketsToDraw: num_tickets_to_draw
        }
      }
    }
    errors {
      unknownProductError: unknown_product_error {
        _empty
      }
    }
  }
}
    `;
export const GetShopItemsDocument = gql`
    query getShopItems($projectId: String!, $productCategory: ProductCategory, $lastReturnedRewardId: String, $limit: Int) {
  getShopItems: get_shop_items(
    project_id: $projectId
    return_only_listed: true
    last_returned_reward_id: $lastReturnedRewardId
    limit: $limit
    product_category: $productCategory
    return_prices_in_fan_points: true
  ) {
    result {
      rewardId: reward_id
      partnerId: owner_id
      product: template {
        rewardType: __typename
        ... on Product {
          title
          description
          productCategory: product_category
          imageUrls: image_urls
          partner {
            partnerId: partner_id
            name
            branding {
              logoColorUrl: logo_color_url
            }
          }
        }
      }
      distributionPolicy: distribution_policy {
        distributionType: __typename
        ... on ShopPurchaseDistributionPolicy {
          distributionPolicyId: distribution_policy_id
          price
          currency
        }
        ... on ShopAuctionDistributionPolicy {
          distributionPolicyId: distribution_policy_id
          minBid: min_bid
          currency
          auctionStartDate: auction_start_date
          auctionEndDate: auction_end_date
          auctionStatus: auction_status
        }
        ... on ShopLotteryDistributionPolicy {
          distributionPolicyId: distribution_policy_id
          ticketPrice: price
          currency
          lotteryStartDate: lottery_start_date
          lotteryEndDate: lottery_end_date
          lotteryStatus: lottery_status
          numTicketsToDraw: num_tickets_to_draw
        }
      }
    }
  }
}
    `;
export const GetShopPurchasesDocument = gql`
    query getShopPurchases($projectId: String!, $userId: String!, $earlierThan: String, $limit: Int) {
  getShopPurchases: get_bought_products(
    project_id: $projectId
    user_id: $userId
    earlier_than: $earlierThan
    limit: $limit
  ) {
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
    }
    result {
      product: reward {
        rewardType: __typename
        ... on Product {
          rewardId: reward_id
          title
          description
          productCategory: product_category
          imageUrls: image_urls
          partner {
            partnerId: partner_id
            name
            branding {
              logoColorUrl: logo_color_url
            }
          }
          deliveryStatus: delivery_status
          deliveryDate: delivery_date
        }
      }
      transactionGroupId: group_id
      transactionNr: nr
      deliveryDetails: details {
        deliveryAddress: delivery_address {
          zipCode: zip_code
          street
          country
          city
        }
        deliveryName: delivery_name
      }
      purchaseDate: transaction_date
    }
  }
}
    `;
export const PurchaseLotteryTicketDocument = gql`
    mutation purchaseLotteryTicket($projectId: String!, $userId: String!, $rewardId: String!, $distributionPolicyId: String!, $partnerId: String!, $amount: Int!, $deliveryAddress: AddressInput!, $deliveryName: String!) {
  purchaseLotteryTicket: purchase_lottery_ticket(
    project_id: $projectId
    user_id: $userId
    reward_id: $rewardId
    distribution_policy_id: $distributionPolicyId
    partner_id: $partnerId
    amount: $amount
    delivery_address: $deliveryAddress
    delivery_name: $deliveryName
  ) {
    errors {
      invalidAmountError: invalid_reward_amount_error {
        _empty
      }
      tooFewAvailableError: too_few_available_error {
        _empty
      }
      unknownProductError: unknown_product_error {
        _empty
      }
      unknownUserError: unknown_user_error {
        _empty
      }
    }
  }
}
    `;
export const PurchaseShopItemDocument = gql`
    mutation purchaseShopItem($projectId: String!, $userId: String!, $rewardId: String!, $partnerId: String!, $distributionPolicyId: String!, $amount: Int!, $deliveryAddress: AddressInput!, $deliveryName: String!) {
  purchaseShopItem: purchase_shop_item(
    project_id: $projectId
    user_id: $userId
    reward_id: $rewardId
    distribution_policy_id: $distributionPolicyId
    partner_id: $partnerId
    amount: $amount
    delivery_address: $deliveryAddress
    delivery_name: $deliveryName
  ) {
    errors {
      invalidAmountError: invalid_reward_amount_error {
        _empty
      }
      tooFewAvailableError: too_few_available_error {
        _empty
      }
      unknownProductError: unknown_product_error {
        _empty
      }
      unknownUserError: unknown_user_error {
        _empty
      }
    }
  }
}
    `;
export const GetStatusPointsBalanceDocument = gql`
    query getStatusPointsBalance($projectId: String!, $userId: String!) {
  getStatusPointsBalance: get_status_points_balance(
    project_id: $projectId
    user_id: $userId
  ) {
    result
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
    }
  }
}
    `;
export const GetStatusPointsForActionDocument = gql`
    query getStatusPointsForAction($partnerId: String!, $actionCategory: String!) {
  getStatusPointsForAction: get_status_points_for_action(
    partner_id: $partnerId
    action_category: $actionCategory
  ) {
    result
    errors {
      invalidActionCategoryError: invalid_action_category_error {
        _empty
      }
    }
  }
}
    `;
export const GetStatusPointsTransactionsDocument = gql`
    query getStatusPointsTransactions($projectId: String, $userId: String!, $limit: Int, $earlierThan: String) {
  getStatusPointsTransactions: get_status_points_transactions(
    project_id: $projectId
    user_id: $userId
    earlier_than: $earlierThan
    limit: $limit
  ) {
    result {
      actionId: action_id
      userId: user_id
      partnerId: partner_id
      title
      description
      amount
      actionCategory: action_category
      date
    }
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
    }
  }
}
    `;
export const GiveStatusPointsDocument = gql`
    mutation giveStatusPoints($projectId: String, $actionCategory: String!, $customActionId: String, $description: String!, $partnerId: String!, $title: String!, $userId: String!) {
  giveStatusPoints: distribute_status_points(
    action_category: $actionCategory
    description: $description
    partner_id: $partnerId
    project_id: $projectId
    title: $title
    user_id: $userId
    custom_action_id: $customActionId
  ) {
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
      invalidRewardAmountError: invalid_reward_amount_error {
        _empty
      }
      tooFewAvailableError: too_few_available_error {
        _empty
      }
      invalidTransactionIdError: invalid_transaction_id_error {
        _empty
      }
      invalidActionCategoryError: invalid_action_category_error {
        _empty
      }
      alreadyExecutedError: already_executed_error {
        _empty
      }
    }
    result {
      actionId: action_id
      userId: user_id
      partnerId: partner_id
      title
      description
      amount
      actionCategory: action_category
      date
    }
  }
}
    `;
export const UndoStatusPointsTransactionDocument = gql`
    mutation undoStatusPointsTransaction($projectId: String, $userId: String!, $partnerId: String!, $actionId: String!) {
  undoStatusPointsTransaction: undo_status_points_transaction(
    project_id: $projectId
    user_id: $userId
    partner_id: $partnerId
    action_id: $actionId
  ) {
    result {
      actionId: action_id
      userId: user_id
      partnerId: partner_id
      title
      description
      amount
      actionCategory: action_category
      date
    }
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
      invalidRewardAmountError: invalid_reward_amount_error {
        _empty
      }
      tooFewAvailableError: too_few_available_error {
        _empty
      }
      transactionNotFoundError: transaction_not_found_error {
        _empty
      }
      invalidTransactionIdError: invalid_transaction_id_error {
        _empty
      }
      invalidActionCategoryError: invalid_action_category_error {
        _empty
      }
      alreadyExecutedError: already_executed_error {
        _empty
      }
    }
  }
}
    `;
export const AddUserDocument = gql`
    mutation addUser($projectId: String!, $userId: String!, $mailAddress: String!) {
  addUser: add_user(
    mail_address: $mailAddress
    project_id: $projectId
    user_id: $userId
  ) {
    errors {
      invalidMailAddressError: invalid_mail_address_error {
        _empty
      }
      invalidUserIdError: invalid_user_id_error {
        reason
      }
      userAlreadyExistsError: user_already_exists_error {
        _empty
      }
    }
  }
}
    `;
export const ChangeUserIdDocument = gql`
    mutation changeUserId($newUserId: String!, $oldUserId: String!, $projectId: String!) {
  changeUserId: change_user_id(
    new_user_id: $newUserId
    old_user_id: $oldUserId
    project_id: $projectId
  ) {
    errors {
      invalidUserIdError: invalid_user_id_error {
        reason
      }
      unknownUserError: unknown_user_error {
        _empty
      }
      userAlreadyExistsError: user_already_exists_error {
        _empty
      }
    }
  }
}
    `;
export const ChangeUserMailAddressDocument = gql`
    mutation changeUserMailAddress($newMailAddress: String!, $projectId: String!, $userId: String!) {
  changeUserMailAddress: change_user_mail_address(
    new_mail_address: $newMailAddress
    project_id: $projectId
    user_id: $userId
  ) {
    errors {
      invalidMailAdressError: invalid_mail_address_error {
        _empty
      }
      unknownUserError: unknown_user_error {
        _empty
      }
    }
  }
}
    `;
export const DeleteUserDocument = gql`
    mutation deleteUser($projectId: String!, $userId: String!) {
  deleteUser: delete_user(project_id: $projectId, user_id: $userId) {
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
    }
  }
}
    `;
export const GetUserByIdDocument = gql`
    query getUserById($projectId: String!, $userId: String!) {
  getUserById: get_user_by_id(project_id: $projectId, user_id: $userId) {
    errors {
      unknownUserError: unknown_user_error {
        _empty
      }
    }
    result {
      mailAddress: mail_address
      fanPointsUserId: user_id
      userId: external_user_id
    }
  }
}
    `;
export const GetUserPassesDocument = gql`
    mutation getUserPasses($projectId: String!, $userId: String!) {
  generateAppleWalletPass: generate_apple_wallet_pass(
    project_id: $projectId
    user_id: $userId
  ) {
    result
  }
  generateGoogleWalletPass: generate_google_wallet_pass(
    project_id: $projectId
    user_id: $userId
  ) {
    result
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const EstimateGivenOutFanPointsOnPurchaseDocumentString = print(EstimateGivenOutFanPointsOnPurchaseDocument);
const GetFanPointsTransactionDocumentString = print(GetFanPointsTransactionDocument);
const GetFanPointsTransactionsDocumentString = print(GetFanPointsTransactionsDocument);
const GetFanPointsBalanceDocumentString = print(GetFanPointsBalanceDocument);
const GetPriceInFanPointsDocumentString = print(GetPriceInFanPointsDocument);
const GiveFanPointsOnPurchaseDocumentString = print(GiveFanPointsOnPurchaseDocument);
const PayPurchaseWithFanPointsDocumentString = print(PayPurchaseWithFanPointsDocument);
const UndoFanPointsPurchaseDocumentString = print(UndoFanPointsPurchaseDocument);
const PingDocumentString = print(PingDocument);
const ClaimPrizesDocumentString = print(ClaimPrizesDocument);
const GetLootboxesDocumentString = print(GetLootboxesDocument);
const OpenLootboxDocumentString = print(OpenLootboxDocument);
const BidOnShopItemDocumentString = print(BidOnShopItemDocument);
const GetAuctionStatusDocumentString = print(GetAuctionStatusDocument);
const GetShopItemDocumentString = print(GetShopItemDocument);
const GetShopItemsDocumentString = print(GetShopItemsDocument);
const GetShopPurchasesDocumentString = print(GetShopPurchasesDocument);
const PurchaseLotteryTicketDocumentString = print(PurchaseLotteryTicketDocument);
const PurchaseShopItemDocumentString = print(PurchaseShopItemDocument);
const GetStatusPointsBalanceDocumentString = print(GetStatusPointsBalanceDocument);
const GetStatusPointsForActionDocumentString = print(GetStatusPointsForActionDocument);
const GetStatusPointsTransactionsDocumentString = print(GetStatusPointsTransactionsDocument);
const GiveStatusPointsDocumentString = print(GiveStatusPointsDocument);
const UndoStatusPointsTransactionDocumentString = print(UndoStatusPointsTransactionDocument);
const AddUserDocumentString = print(AddUserDocument);
const ChangeUserIdDocumentString = print(ChangeUserIdDocument);
const ChangeUserMailAddressDocumentString = print(ChangeUserMailAddressDocument);
const DeleteUserDocumentString = print(DeleteUserDocument);
const GetUserByIdDocumentString = print(GetUserByIdDocument);
const GetUserPassesDocumentString = print(GetUserPassesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    estimateGivenOutFanPointsOnPurchase(variables: EstimateGivenOutFanPointsOnPurchaseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: EstimateGivenOutFanPointsOnPurchaseQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<EstimateGivenOutFanPointsOnPurchaseQuery>(EstimateGivenOutFanPointsOnPurchaseDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'estimateGivenOutFanPointsOnPurchase', 'query');
    },
    getFanPointsTransaction(variables: GetFanPointsTransactionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetFanPointsTransactionQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetFanPointsTransactionQuery>(GetFanPointsTransactionDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFanPointsTransaction', 'query');
    },
    getFanPointsTransactions(variables: GetFanPointsTransactionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetFanPointsTransactionsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetFanPointsTransactionsQuery>(GetFanPointsTransactionsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFanPointsTransactions', 'query');
    },
    getFanPointsBalance(variables: GetFanPointsBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetFanPointsBalanceQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetFanPointsBalanceQuery>(GetFanPointsBalanceDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFanPointsBalance', 'query');
    },
    getPriceInFanPoints(variables: GetPriceInFanPointsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetPriceInFanPointsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetPriceInFanPointsQuery>(GetPriceInFanPointsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPriceInFanPoints', 'query');
    },
    giveFanPointsOnPurchase(variables: GiveFanPointsOnPurchaseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GiveFanPointsOnPurchaseMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GiveFanPointsOnPurchaseMutation>(GiveFanPointsOnPurchaseDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'giveFanPointsOnPurchase', 'mutation');
    },
    payPurchaseWithFanPoints(variables: PayPurchaseWithFanPointsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: PayPurchaseWithFanPointsMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<PayPurchaseWithFanPointsMutation>(PayPurchaseWithFanPointsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'payPurchaseWithFanPoints', 'mutation');
    },
    undoFanPointsPurchase(variables: UndoFanPointsPurchaseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UndoFanPointsPurchaseMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UndoFanPointsPurchaseMutation>(UndoFanPointsPurchaseDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'undoFanPointsPurchase', 'mutation');
    },
    ping(variables?: PingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: PingQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<PingQuery>(PingDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ping', 'query');
    },
    claimPrizes(variables: ClaimPrizesMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ClaimPrizesMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ClaimPrizesMutation>(ClaimPrizesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'claimPrizes', 'mutation');
    },
    getLootboxes(variables: GetLootboxesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetLootboxesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetLootboxesQuery>(GetLootboxesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLootboxes', 'query');
    },
    openLootbox(variables: OpenLootboxMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: OpenLootboxMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<OpenLootboxMutation>(OpenLootboxDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'openLootbox', 'mutation');
    },
    bidOnShopItem(variables: BidOnShopItemMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: BidOnShopItemMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<BidOnShopItemMutation>(BidOnShopItemDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'bidOnShopItem', 'mutation');
    },
    getAuctionStatus(variables: GetAuctionStatusQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetAuctionStatusQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAuctionStatusQuery>(GetAuctionStatusDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAuctionStatus', 'query');
    },
    getShopItem(variables: GetShopItemQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetShopItemQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetShopItemQuery>(GetShopItemDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getShopItem', 'query');
    },
    getShopItems(variables: GetShopItemsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetShopItemsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetShopItemsQuery>(GetShopItemsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getShopItems', 'query');
    },
    getShopPurchases(variables: GetShopPurchasesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetShopPurchasesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetShopPurchasesQuery>(GetShopPurchasesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getShopPurchases', 'query');
    },
    purchaseLotteryTicket(variables: PurchaseLotteryTicketMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: PurchaseLotteryTicketMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<PurchaseLotteryTicketMutation>(PurchaseLotteryTicketDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'purchaseLotteryTicket', 'mutation');
    },
    purchaseShopItem(variables: PurchaseShopItemMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: PurchaseShopItemMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<PurchaseShopItemMutation>(PurchaseShopItemDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'purchaseShopItem', 'mutation');
    },
    getStatusPointsBalance(variables: GetStatusPointsBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetStatusPointsBalanceQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetStatusPointsBalanceQuery>(GetStatusPointsBalanceDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStatusPointsBalance', 'query');
    },
    getStatusPointsForAction(variables: GetStatusPointsForActionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetStatusPointsForActionQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetStatusPointsForActionQuery>(GetStatusPointsForActionDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStatusPointsForAction', 'query');
    },
    getStatusPointsTransactions(variables: GetStatusPointsTransactionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetStatusPointsTransactionsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetStatusPointsTransactionsQuery>(GetStatusPointsTransactionsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStatusPointsTransactions', 'query');
    },
    giveStatusPoints(variables: GiveStatusPointsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GiveStatusPointsMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GiveStatusPointsMutation>(GiveStatusPointsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'giveStatusPoints', 'mutation');
    },
    undoStatusPointsTransaction(variables: UndoStatusPointsTransactionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UndoStatusPointsTransactionMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UndoStatusPointsTransactionMutation>(UndoStatusPointsTransactionDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'undoStatusPointsTransaction', 'mutation');
    },
    addUser(variables: AddUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AddUserMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AddUserMutation>(AddUserDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addUser', 'mutation');
    },
    changeUserId(variables: ChangeUserIdMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ChangeUserIdMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ChangeUserIdMutation>(ChangeUserIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changeUserId', 'mutation');
    },
    changeUserMailAddress(variables: ChangeUserMailAddressMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ChangeUserMailAddressMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ChangeUserMailAddressMutation>(ChangeUserMailAddressDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changeUserMailAddress', 'mutation');
    },
    deleteUser(variables: DeleteUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeleteUserMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteUserMutation>(DeleteUserDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUser', 'mutation');
    },
    getUserById(variables: GetUserByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetUserByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetUserByIdQuery>(GetUserByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserById', 'query');
    },
    getUserPasses(variables: GetUserPassesMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetUserPassesMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetUserPassesMutation>(GetUserPassesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserPasses', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;