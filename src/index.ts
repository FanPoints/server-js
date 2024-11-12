export type {
    ClientConfig,
    PartnerConfig,
    LoyaltyProgramConfig,
} from './FanPointsClient';
export {
    default as FanPointsClient,
    createClient,
    createPartnerClient,
    createLoyaltyProgramClient,
} from './FanPointsClient';

export { UserModule } from './UserModule';
export { FanPointsModule } from './FanPointsModule';
export { StatusPointsModule } from './StatusPointsModule';
export {
    MarketplaceModule,
    type MarketplaceItem,
    type Product,
    type SaleDistributionPolicy,
    type AuctionDistributionPolicy,
    type LotteryDistributionPolicy,
    type PurchasedProduct,
} from './MarketplaceModule';
export { PrizesModule } from './PrizesModule';

export { RequestError } from './utils/errors';

export type {
    Currency,
    FanPointsTransactionType,
    ProductCategory,
    ShopItemDistributionType,
    DeliveryStatus,
} from './queries/generated/sdk';
