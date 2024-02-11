# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.19] - 2024-02-11

### Changed

-   In the `fanPoints.giveFanPointsOnPurchase` method, the `rateCategory` parameter has been renamed to `rateLabel` to be aligned with the backend.

-   In the `fanPoints.payPurchaseWithFanPoints` method, the `rateLabel` parameter has been removed as the rate for purchases is always the same.

-   The API configuration has been changed to a new endpoint. The old endpoint is not available anymore.
