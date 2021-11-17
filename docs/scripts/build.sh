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

# Prepare temp folder
cleanTemp

# Build docs from org.json-schema package content
wget -O temp/org.json-schema.zip https://github.com/windingtree/org.json-schema/archive/refs/heads/feat/new-orgid.zip
unzip temp/org.json-schema.zip "org.json-schema-feat-new-orgid/docs/*" -d temp
cp -r temp/org.json-schema-feat-new-orgid/docs build/org.json-schema
cleanTemp

# Build docs from auth package
cp -r ../packages/auth/docs build/auth

# Linting of the built site
npx markdownlint build/**/*.md
