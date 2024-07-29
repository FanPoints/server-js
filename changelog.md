# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
