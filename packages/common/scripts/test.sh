#!/usr/bin/env bash

export TESTING=yes

# Exit script as soon as a command fails.
set -o errexit

# Executes cleanup function at script exit.
trap cleanup EXIT

cleanup() {
    # cleanup logic
    rm -rf .nyc_output
    echo "Testing environment is cleaned"
}

if [ "$COVERAGE" = true ]; then
    echo "Running tests with coverage"
    rm -rf coverage
    npx nyc --reporter lcov mocha -r dotenv/config --exit -R spec --timeout 70000 --recursive ./test/spec/**/*.js

    # if [ "$CONTINUOUS_INTEGRATION" = true ]; then
    #     cat coverage/lcov.info | npx coveralls
    # fi

else
    if [ -z "$@" ]; then
        testDir="./test/spec/**/*.js"
    else
        testDir="$@"
    fi

    echo "Running tests without coverage: $testDir"
    npx mocha --exit -R spec --timeout 70000 --recursive "$testDir"
fi
