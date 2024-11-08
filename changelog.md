# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.19] - 2024-11-09

### Changed

-   The arguments for the `createFanPointsPaymentSession` have been improved to allow easier use. The option to show the price in the currency of the partner has been removed.

## [0.2.18] - 2024-10-26

### Added

-   The `registerTixevoCheckout` query now raises an error if the Tixevo configuration is not set in the dashboard.

## [0.2.17] - 2024-10-22

### Added

-   The `getUserParticipations` query has been added which returns the lotteries and auctions where a user is currently participating.

## [0.2.16] - 2024-10-19

### Changed

-   The `registerTixevoCheckout` method now works with a loyalty program client instead of a partner client. The correct partner is assigned automatically by the backend using the Tixevo configuration set in the dashboard.

## [0.2.15] - 2024-10-19

### Changed

-   Refreshing a token should finally work correctly by explicitly decoding the token and checking if it has expired.

## [0.2.14] - 2024-10-18

### Changed

-   After refreshing a refresh token, the SDK now correctly retries the request even when there it consists of a single GraphQl query.

## [0.2.13] - 2024-10-18

### Changed

-   The `addUser` query now returns the user's mail address, the Fanpoints user id and the external user id.

## [0.2.12] - 2024-10-18

### Added

-   The queries `getUser` now return the user's name and addresses. The query `changeAdditionalUserInfo` can be used to change the user's name and addresses.

## [0.2.11] - 2024-10-14

### Added

-   The queries `getMarketplaceItems` and `getMarketplaceItem` now return the `readableObjectId` of the item. They can be used in all other marketplace queries.

## [0.2.10] - 2024-10-12

### Added

-   The query `getLotteryStatus` has been added that allows to query the current status of the lottery and
    potential number of tickets bought by the user.
-   All marketplace items now have a `numAvailable` attribute that indicates how many items are still left.
-   All marketplace distribution policies now have a `isRecentlyAvailable` attribute that indicate if the item
    was added within the last week.
-   The obtained products now have a flag `hasBeenUndone` that indicates if the purchase has been undone.

## [0.2.9] - 2024-10-11

### Changed

-   The build scripts were changed to use ESM instead of CJS.

## [0.2.8] - 2024-10-10

### Added

-   Some marketplace types are now exported for easier use of the rewards.

### Changed

-   Auctions now return the number of bids and the current highest bid.
-   `getAuctionStatus` now also works without user_id.

## [0.2.7] - 2024-10-01

### Added

-   The method `createFanPointsPaymentSession` has been added to the `FanPointsModule`, allowing an alternative payment flow where the user is redirected to a dedicated FanPoints checkout page hosted by the loyalty program.

## [0.2.6] - 2024-09-08

### Changed

-   The method `registerTixevoTransaction` has been renamed to `registerTixevoCheckout`.

## [0.2.5] - 2024-09-08

### Added

-   A new method `registerTixevoTransaction` has been added, allowing to register a raw checkout with Tixevo.

## [0.2.4] - 2024-07-29

### Added

-   The prizes module has been added to the SDK. It allows to open lootboxes and claim prizes.

### Changed

-   The `getPurchases` method in the `MarketplaceModule` has been renamed to `getObtainedProducts` to better reflect that it also returns products obtained through other means like lootboxes.

## [0.2.3] - 2024-07-29

### Changed

-   The shop modules has been renamed to marketplace module and the methods have been updated to work with the new marketplace API.

## [0.2.2] - 2024-07-02

### Added

-   The methods `createPartnerClient` and `createLoyaltyProgramClient` methods have been added for easier client creation.

## [0.2.1] - 2024-07-02

### Added

-   The `estimateGivenOutFanPointsOnPurchase` query has been added that allows to estimate the number of Fan Points that will be given out for a given purchase.

### Changed

-   The purchase queries in the `FanPoints` module now return the full partner associated with the purchase.

## [0.2.0] - 2024-06-10

### Added

-   The `shop` module has been added to the SDK. This module allows a loyalty program to retrieve the items currently listed in the shop and the products bought by users. Furthermore, it allows to let users purchase items from the shop, to purchase lottery tickets, and to place bids on bidding items.

## [0.1.25] - 2024-06-03

### Added

-   The `getUserPasses` method has been added to retrieve the Google Wallet and Apple Wallet passes of a user.

## [0.1.24] - 2024-03-02

### Added

-   The `ping` method has been added to check if the API is reachable.

## [0.1.23] - 2024-02-14

### Changed

-   A type in the return value of `fanpoints.getBalance` has been fixed.

## [0.1.22] - 2024-02-14

### Added

-   The `fanPoints.getPriceInFanPoints` method has been added and allows to query the price of a purchase in fan points.

### Changed

-   The `fanpoints.getBalance` method now returns an object that also contains the monetary amount the user can spend with their fan points.

## [0.1.21] - 2024-02-14

### Changed

-   When configuring a partner (upon calling `createClient`), one now has to set a default currency using the `defaultCurrency` attribute.

## [0.1.20] - 2024-02-14

### Added

-   The query `fanPoints.getTransaction` has been added and allows to query a single purchase transaction.

### Changed

-   In the `fanPoints.giveFanPointsOnPurchase` and the `fanPoints.payPurchaseWithFanPoints` methods, you can now set the `customPurchaseItemId` attribute on every item to specify your own item id.

-   Some error messages have been improved.

## [0.1.20] - 2024-02-14

### Added

-   The query `fanPoints.getTransaction` has been added and allows to query a single purchase transaction.

### Changed

-   In the `fanPoints.giveFanPointsOnPurchase` and the `fanPoints.payPurchaseWithFanPoints` methods, you can now set the `customPurchaseItemId` attribute on every item to specify your own item id.

-   Some error messages have been improved.

## [0.1.19] - 2024-02-11

### Changed

-   In the `fanPoints.giveFanPointsOnPurchase` method, the `rateCategory` parameter has been renamed to `rateLabel` to be aligned with the backend.

-   In the `fanPoints.payPurchaseWithFanPoints` method, the `rateLabel` parameter has been removed as the rate for purchases is always the same.

-   The API configuration has been changed to a new endpoint. The old endpoint is not available anymore.
