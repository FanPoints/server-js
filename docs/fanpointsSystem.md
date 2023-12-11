---
title: The FanPoints System
layout: home
---

# Overview

On this page, we explain the core concepts of the FanPoints system.

# Users

**Users** are people participating in a FanPoints loyalty system.

# FanPoints Projects

Each FanPoints **project** corresponds to an ecosystem in which people can participate at the loyalty program. An example for a project would be the *FC Basel Loyalty Program*. A project is created by a **project owner** (e.g. FC Basel).

Every project has **users**, i.e. people participating in the loyalty program. The users register externally at the project owner (e.g. in the FC Basel fan app). The project owner can then add users to the project.

# FanPoints Partners

**Partners** correspond to businesses that participate in one or more FanPoints projects. Users can interact and engage with partners in the same project. For instance, partners can distribute Fan Points to users and allow users to pay with Fan Points.

Examples for partners are local businesses like restaurants or shops. Usually, the project owner has one or more partners itself (as fans might purchase items in the shop or the stadium using Fan Points).

# Modules

A project owner can enable modules in order to enable features for the users and partners in the project.

Currently, the following modules are available:

- **User Module**: allows the project owner to add, modify and delete users.
- **FanPoints Module**: allows partners to distribute and collect Fan Points to users.
- **StatusPoints Module**: allows partners to reward users for engagement and offer special deals for users with a given number of Status Points.

# Accessing a FanPoints Project 

Developers can interact with a project using the provided SDKs:

- **server-js**: allows project owners and partners to interact with the three modules. This library is designed to be used in a backend. Authentification is granted using a *clientId* and *clientSecret* and is not bound to users.

The following access methods will be provided in the near future:

- **client-js**: allows project owners and partners to perform user-specific actions in the three modules. This library is designed to be used in a frontend. Authentification is tied to the users logged into the project-owner app. For this, the project owner has to set up an OpenID Connect Provider to 

- **project web app**: allows project owners to configure the project (activating modules, generating API keys, etc.).

- **partner web app**: allows partners to configure their partner account (enabling projects, adding description and pictures etc.).

- **partner mobile app**: allows employees of partners to interact with the FanPoints system using a mobile app (e.g. to distribute Fan Points to users).

## Development Environments

Every project has a **development environment** and a **production environment**. The development environment can be used for testing and developing.