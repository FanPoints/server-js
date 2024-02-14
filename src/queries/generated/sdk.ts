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

export type AlreadyExecutedError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type BackendUserInvitation = {
  role: Role;
  username: Scalars['String']['output'];
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

export type CouponType =
  | 'default'
  | 'shop';

export type CreatePartnerErrors = {
  invalid_name_error: Maybe<InvalidNameError>;
};

export type CreatePartnerResult = {
  errors: Maybe<CreatePartnerErrors>;
};

export type CreateProjectErrors = {
  invalid_name_error: Maybe<InvalidNameError>;
};

export type CreateProjectResult = {
  errors: Maybe<CreateProjectErrors>;
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

export type DeleteProjectResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type DeleteProposedPartnershipModuleResult = {
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

export type EmptyResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type ExecuteFanPointsTransactionResult = {
  errors: Maybe<ExecuteTransactionErrors>;
  result: Maybe<FanPointsTransaction>;
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
  partner_id: Scalars['String']['output'];
  rate_label: Scalars['String']['output'];
};

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

export type GetModulesResult = {
  result: Maybe<Array<Module>>;
};

export type GetMyPartnersResult = {
  result: Array<PartnerWithRole>;
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

export type GetProjectResult = {
  result: Maybe<Project>;
};

export type GetProjectsResult = {
  result: Array<Project>;
};

export type GetReceivedPartnershipRequestsResult = {
  result: Array<PartnershipRequest>;
};

export type GetSentPartnershipRequestsResult = {
  result: Array<PartnershipRequest>;
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

export type InvalidActionCategoryError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidAddressError = {
  reason: Scalars['String']['output'];
};

export type InvalidEmailError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidExpirationTimeError = {
  reason: Scalars['String']['output'];
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

export type InvalidRateError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidRateLabelError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type InvalidRewardAmountError = {
  _empty: Maybe<Scalars['String']['output']>;
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

export type LootBox = {
  lootbox_type: Scalars['String']['output'];
  opened: Scalars['Boolean']['output'];
  reward_id: Scalars['String']['output'];
  reward_type: Scalars['String']['output'];
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

export type ModifyPartnerErrors = {
  invalid_name_error: Maybe<InvalidNameError>;
  invalid_website_error: Maybe<InvalidWebsiteError>;
};

export type ModifyPartnerResult = {
  errors: Maybe<ModifyPartnerErrors>;
};

export type ModifyProjectDetailsErrors = {
  invalid_name_error: Maybe<InvalidNameError>;
  invalid_website_error: Maybe<InvalidWebsiteError>;
};

export type ModifyProjectDetailsResult = {
  errors: Maybe<ModifyProjectDetailsErrors>;
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
  module_id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ModuleCannotBeDeactivatedError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  _empty: Maybe<Scalars['String']['output']>;
  accept_partnership_request: AcceptPartnershipRequestResult;
  accept_proposed_partnership_module: AcceptProposedPartnershipModuleResult;
  activate_module: ToggleModuleResult;
  add_store: AddStoreResult;
  add_user: AddUserResult;
  change_user_id: ChangeUserIdResult;
  change_user_mail_address: ChangeUserMailAddressResult;
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
  delete_project: DeleteProjectResult;
  delete_project_token: DeleteTokenResult;
  delete_project_user: DeleteBackendUserResult;
  delete_project_user_invitation: DeleteBackendUserInvitationResult;
  delete_proposed_partnership_module: DeleteProposedPartnershipModuleResult;
  delete_store: DeleteStoreResult;
  delete_user: DeleteUserResult;
  distribute_status_points: ExecuteStatusPointsTransactionResult;
  give_fan_points_on_purchase: ExecuteFanPointsTransactionResult;
  invite_partner_user: InviteBackendUserResult;
  invite_project_user: InviteBackendUserResult;
  modify_partner: ModifyPartnerResult;
  modify_partner_branding: ModifyBrandingResult;
  modify_partner_user: ModifyBackendUserResult;
  modify_project: ModifyProjectDetailsResult;
  modify_project_branding: ModifyBrandingResult;
  modify_project_user: ModifyBackendUserResult;
  modify_store: ModifyStoreResult;
  pay_purchase_with_fan_points: ExecuteFanPointsTransactionResult;
  propose_partnership_module: ProposePartnershipModuleResult;
  reset_partner_branding: ResetBrandingResult;
  reset_project_branding: ResetBrandingResult;
  send_partnership_request: SendPartnershipRequestResult;
  set_fan_points_rate: SetFanPointsRateResult;
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
  project_id: Scalars['String']['input'];
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
  is_dev: Scalars['Boolean']['input'];
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
  project_id: Scalars['String']['input'];
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


export type MutationDelete_ProjectArgs = {
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


export type MutationModify_PartnerArgs = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  partner_id: Scalars['String']['input'];
  primary_currency: InputMaybe<Currency>;
  website: InputMaybe<Scalars['String']['input']>;
};


export type MutationModify_Partner_BrandingArgs = {
  partner_id: Scalars['String']['input'];
};


export type MutationModify_Partner_UserArgs = {
  partner_id: Scalars['String']['input'];
  role: Role;
  user_id: Scalars['String']['input'];
};


export type MutationModify_ProjectArgs = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  primary_currency: InputMaybe<Currency>;
  project_id: Scalars['String']['input'];
  website: InputMaybe<Scalars['String']['input']>;
};


export type MutationModify_Project_BrandingArgs = {
  project_id: Scalars['String']['input'];
};


export type MutationModify_Project_UserArgs = {
  project_id: Scalars['String']['input'];
  role: Role;
  user_id: Scalars['String']['input'];
};


export type MutationModify_StoreArgs = {
  address: InputMaybe<AddressInput>;
  name: InputMaybe<Scalars['String']['input']>;
  partner_id: Scalars['String']['input'];
  store_id: Scalars['String']['input'];
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
  partner_id: Scalars['String']['input'];
  rate_label: Scalars['String']['input'];
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

export type Project = {
  branding: Branding;
  creator_id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  is_dev: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  primary_currency: Currency;
  project_id: Scalars['String']['output'];
  website: Scalars['String']['output'];
};

export type ProjectWithRole = {
  branding: Branding;
  creator_id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  is_dev: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  primary_currency: Currency;
  project_id: Scalars['String']['output'];
  role: Role;
  website: Scalars['String']['output'];
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
  currency: Currency;
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fan_points_rate: Maybe<Scalars['Float']['output']>;
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

export type Query = {
  _empty: Maybe<Scalars['String']['output']>;
  get_fan_points_balance: GetFanPointsBalanceResult;
  get_fan_points_rates: GetFanPointsRatesResult;
  get_fan_points_transaction: GetFanPointsTransactionResult;
  get_fan_points_transactions: GetFanPointsTransactionsResult;
  get_modules: GetModulesResult;
  get_my_partners: GetMyPartnersResult;
  get_my_projects: GetMyProjectsResult;
  get_partner: GetPartnerResult;
  get_partner_fan_points_transactions: GetFanPointsTransactionsResult;
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
  get_project_tokens: GetTokensResult;
  get_project_user_invitations: GetBackendUserInvitationsResult;
  get_project_users: GetBackendUsersResult;
  get_received_partnership_requests: GetReceivedPartnershipRequestsResult;
  get_sent_partnership_requests: GetSentPartnershipRequestsResult;
  get_status_points_balance: GetStatusPointsBalanceResult;
  get_status_points_for_action: GetNumStatusPointsForActionResult;
  get_status_points_transactions: GetStatusPointsTransactionsResult;
  get_user_by_id: GetUserResult;
  get_users: GetUsersResult;
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
  limit: InputMaybe<Scalars['Int']['input']>;
  project_id: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['String']['input'];
};


export type QueryGet_ModulesArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_My_PartnersArgs = {
  user_id: Scalars['String']['input'];
};


export type QueryGet_My_ProjectsArgs = {
  user_id: Scalars['String']['input'];
};


export type QueryGet_PartnerArgs = {
  partner_id: Scalars['String']['input'];
  project_id: InputMaybe<Scalars['String']['input']>;
};


export type QueryGet_Partner_Fan_Points_TransactionsArgs = {
  earlier_than: InputMaybe<Scalars['String']['input']>;
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


export type QueryGet_Project_TokensArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_Project_User_InvitationsArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_Project_UsersArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryGet_Received_Partnership_RequestsArgs = {
  requested_id: Scalars['String']['input'];
};


export type QueryGet_Sent_Partnership_RequestsArgs = {
  requesting_id: Scalars['String']['input'];
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


export type QueryGet_User_By_IdArgs = {
  project_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type QueryGet_UsersArgs = {
  last_returned_user_id: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  project_id: Scalars['String']['input'];
};

export type Rarity =
  | 'common'
  | 'epic'
  | 'legendary'
  | 'rare';

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

export type ResetBrandingResult = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type Reward = Card | Coupon | FanPointsReward | LootBox | StatusPointsReward;

export type RewardTransaction = {
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
  | 'owner'
  | 'unauthorized'
  | 'user';

export type RoleAttachment = {
  entity_id: Scalars['String']['output'];
  entity_name: Scalars['String']['output'];
  role: Role;
};

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

export type UnknownPartnershipError = {
  _empty: Maybe<Scalars['String']['output']>;
};

export type UnknownPolicyAttachmentError = {
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

export type GetFanPointsTransactionQueryVariables = Exact<{
  projectId: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  purchaseId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
}>;


export type GetFanPointsTransactionQuery = { getFanPointsTransaction: { result: { purchaseId: string, userId: string, transactionType: FanPointsTransactionType, purchaseItems: Array<{ title: string, description: string, price: number, currency: Currency, amount: number, date: string, purchaseItemId: string, partnerId: string, rateLabel: string | undefined }> } | undefined, errors: { unknownUserError: { _empty: string | undefined } | undefined, transactionNotFoundError: { _empty: string | undefined } | undefined } | undefined } };

export type GetFanPointsTransactionsQueryVariables = Exact<{
  projectId: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  limit: InputMaybe<Scalars['Int']['input']>;
  earlierThan: InputMaybe<Scalars['String']['input']>;
}>;


export type GetFanPointsTransactionsQuery = { getFanPointsTransactions: { result: Array<{ purchaseId: string, userId: string, transactionType: FanPointsTransactionType, purchaseItems: Array<{ title: string, description: string, price: number, currency: Currency, amount: number, date: string, purchaseItemId: string, partnerId: string, rateLabel: string | undefined }> }> | undefined, errors: { unknownUserError: { _empty: string | undefined } | undefined } | undefined } };

export type GetFanPointsBalanceQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type GetFanPointsBalanceQuery = { getFanPointsBalance: { result: { fan_points: number, currency: Currency, monetaryValue: number } | undefined, errors: { unknownUserError: { _empty: string | undefined } | undefined } | undefined } };

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


export type GiveFanPointsOnPurchaseMutation = { giveFanPointsOnPurchase: { errors: { unknownUserError: { _empty: string | undefined } | undefined, invalidRewardAmountError: { _empty: string | undefined } | undefined, tooFewAvailableError: { _empty: string | undefined } | undefined, invalidTransactionIdError: { _empty: string | undefined } | undefined, invalidRateLabelError: { _empty: string | undefined } | undefined, alreadyExecutedError: { _empty: string | undefined } | undefined, nonUniquePurchaseItemIdsError: { _empty: string | undefined } | undefined } | undefined, result: { purchaseId: string, userId: string, transactionType: FanPointsTransactionType, purchaseItems: Array<{ title: string, description: string, price: number, currency: Currency, amount: number, date: string, purchaseItemId: string, partnerId: string, rateLabel: string | undefined }> } | undefined } };

export type PayPurchaseWithFanPointsMutationVariables = Exact<{
  projectId: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  purchaseItems: Array<PurchaseItemInput> | PurchaseItemInput;
  customPurchaseId: InputMaybe<Scalars['String']['input']>;
}>;


export type PayPurchaseWithFanPointsMutation = { payPurchaseWithFanPoints: { errors: { unknownUserError: { _empty: string | undefined } | undefined, invalidRewardAmountError: { _empty: string | undefined } | undefined, tooFewAvailableError: { _empty: string | undefined } | undefined, invalidTransactionIdError: { _empty: string | undefined } | undefined, invalidRateLabelError: { _empty: string | undefined } | undefined, alreadyExecutedError: { _empty: string | undefined } | undefined, nonUniquePurchaseItemIdsError: { _empty: string | undefined } | undefined } | undefined, result: { purchaseId: string, userId: string, transactionType: FanPointsTransactionType, purchaseItems: Array<{ title: string, description: string, price: number, currency: Currency, amount: number, date: string, purchaseItemId: string, partnerId: string, rateLabel: string | undefined }> } | undefined } };

export type UndoFanPointsPurchaseMutationVariables = Exact<{
  projectId: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  purchaseId: Scalars['String']['input'];
  purchaseItemId: InputMaybe<Scalars['String']['input']>;
}>;


export type UndoFanPointsPurchaseMutation = { undoFanPointsPurchase: { result: { purchaseId: string, userId: string, transactionType: FanPointsTransactionType, purchaseItems: Array<{ title: string, description: string, price: number, currency: Currency, amount: number, date: string, purchaseItemId: string, partnerId: string, rateLabel: string | undefined }> } | undefined, errors: { unknownUserError: { _empty: string | undefined } | undefined, invalidRewardAmountError: { _empty: string | undefined } | undefined, tooFewAvailableError: { _empty: string | undefined } | undefined, transactionNotFoundError: { _empty: string | undefined } | undefined, invalidTransactionIdError: { _empty: string | undefined } | undefined, alreadyExecutedError: { _empty: string | undefined } | undefined } | undefined } };

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


export type GetUserByIdQuery = { getUserById: { errors: { unknownUserError: { _empty: string | undefined } | undefined } | undefined, result: { mailAddress: string, userId: string } | undefined } };


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
        title
        description
        price
        currency
        amount
        rateLabel: rate_label
        date
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
        title
        description
        price
        currency
        amount
        rateLabel: rate_label
        date
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
      fan_points
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
        title
        description
        price
        currency
        amount
        rateLabel: rate_label
        date
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
        title
        description
        price
        currency
        amount
        rateLabel: rate_label
        date
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
        title
        description
        price
        currency
        amount
        rateLabel: rate_label
        date
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
      userId: user_id
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetFanPointsTransactionDocumentString = print(GetFanPointsTransactionDocument);
const GetFanPointsTransactionsDocumentString = print(GetFanPointsTransactionsDocument);
const GetFanPointsBalanceDocumentString = print(GetFanPointsBalanceDocument);
const GetPriceInFanPointsDocumentString = print(GetPriceInFanPointsDocument);
const GiveFanPointsOnPurchaseDocumentString = print(GiveFanPointsOnPurchaseDocument);
const PayPurchaseWithFanPointsDocumentString = print(PayPurchaseWithFanPointsDocument);
const UndoFanPointsPurchaseDocumentString = print(UndoFanPointsPurchaseDocument);
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
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
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
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;