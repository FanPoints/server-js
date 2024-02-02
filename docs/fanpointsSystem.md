---
title: The FanPoints System
layout: home
---

# Overview

On this page, we explain the core concepts of the FanPoints system.

# Users

**Users** are people participating in a FanPoints loyalty system.

# Loyalty Programs

Each FanPoints **loyalty program** corresponds to an ecosystem in which people can participate in the loyalty program. An example for a loyalty program would be the *FC Basel Loyalty Program*. A loyalty program is created by a **loyalty program owner** (e.g. FC Basel).

Every loyalty program has **users**, i.e. people participating in the loyalty program. The users register externally at the loyalty program owner (e.g. in the FC Basel fan app). The loyalty program owner can then add users.

# FanPoints Partners

**Partners** correspond to businesses that participate in one or more FanPoints loyalty programs. Users can interact and engage with partners in the same loyalty program. For instance, partners can distribute Fan Points to users and allow users to pay with Fan Points.

Examples for partners are local businesses like restaurants or shops. Usually, the loyalty program owner has one or more partners itself (as fans might purchase items in the shop or the stadium using Fan Points).

# Modules

A loyalty program owner can enable modules in order to enable features for the users and partners.

Currently, the following modules are available:

- **User Module**: allows the loyalty program owner to add, modify and delete users.
- **FanPoints Module**: allows partners to distribute and collect Fan Points to users.
- **StatusPoints Module**: allows partners to reward users for engagement and offer special deals for users with a given number of Status Points.

# Accessing a FanPoints Loyalty Programs 

Developers can interact with a loyalty programs using the provided SDKs:

- **server-js**: allows loyalty program owners and partners to interact with the three modules. This library is designed to be used in a backend. Authentification is granted using a *clientId* and *clientSecret* and is not bound to users.

The following access methods will be provided in the near future:

- **client-js**: allows loyalty program owners and partners to perform user-specific actions in the three modules. This library is designed to be used in a frontend. Authentification is tied to the users logged into the loyalty program-owner app. For this, the loyalty program owner has to set up an OpenID Connect Provider to 

- **loyalty program web app**: allows loyalty program owners to configure the loyalty program (activating modules, generating API keys, etc.).

- **partner web app**: allows partners to configure their partner account (enabling loyalty programs, adding description and pictures etc.).

- **partner mobile app**: allows employees of partners to interact with the FanPoints system using a mobile app (e.g. to distribute Fan Points to users).
