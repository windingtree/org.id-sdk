#!/usr/bin/env bash

# Exit script as soon as a command fails.
set -o errexit

# Clean build directory
rm -rf build

# Build local content
cp -r src build
cp .nojekyll build

# Build package content


# Linting of the built site
npx markdownlint build/**/*.md
