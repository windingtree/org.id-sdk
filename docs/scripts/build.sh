#!/usr/bin/env bash

# clean helper
cleanTemp() {
  rm -rf $PWD/temp/*
}

# Exit script as soon as a command fails.
set -o errexit

# Clean build directory
rm -rf build

# Build local content
cp -r src build
cp .nojekyll build

# Build docs from org.json-schema package content
cleanTemp
wget -O temp/org.json-schema.zip https://github.com/windingtree/org.json-schema/archive/refs/heads/feat/new-orgid.zip
unzip temp/org.json-schema.zip "org.json-schema-feat-new-orgid/docs/*" -d temp
cp -r temp/org.json-schema-feat-new-orgid/docs build/org.json-schema

# Build docs from auth package
cp -r ../packages/auth/docs build/auth

# Build docs for the ORGiD smart contract
cleanTemp
wget -O temp/org.id.zip https://github.com/windingtree/org.id/archive/refs/heads/orgid-nft.zip
unzip temp/org.id.zip "org.id-orgid-nft/docs/*" -d temp
cp -r temp/org.id-orgid-nft/docs build/org.id-smart-contract

# Build docs for the ORGiD core library
cp -r ../packages/core/docs build/core

# Build docs for ORGiD DID resolver
cleanTemp
wget -O temp/org.id-resolver.zip https://github.com/windingtree/org.id-resolver/archive/refs/heads/new-resolver.zip
unzip temp/org.id-resolver.zip "org.id-resolver-new-resolver/packages/resolver/docs/*" -d temp
cp -r temp/org.id-resolver-new-resolver/packages/resolver/docs build/org.id-resolver

# Build docs for the ORGiD utils library
cp -r ../packages/utils/docs build/utils

# Build docs for the test-setup package
cp -r ../packages/test-setup/docs build/test-setup

# Build docs for the ORGiD CLI
cp -r ../packages/cli/docs build/cli

# Linting of the built site
npx markdownlint build/**/*.md
