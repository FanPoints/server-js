# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
