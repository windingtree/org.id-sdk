#!/usr/bin/env bash

# Exit script as soon as a command fails.
set -o errexit

# Config
hardhat_port=8545

# Executes cleanup function at script exit.
trap cleanup EXIT

cleanup() {
  # Kill the hardhat instance that we started (if we started one and if it's still running).
  if [ -n "$hardhat_pid" ] && ps -p $hardhat_pid > /dev/null; then
    kill -9 $hardhat_pid
    echo "Hardhat server with the pid $hardhat_pid on the port $hardhat_port just killed"
  fi
}

start_hardhat() {
  npx hardhat node --port $hardhat_port > /dev/null &
  hardhat_pid=$!
  echo "Hardhat server is listening on the port $hardhat_port (pid: $hardhat_pid)"
}

hardhat_running() {
  nc -z localhost "$hardhat_port"
}

if hardhat_running; then
  echo "Using existing hardhat instance"
else
  echo "Starting our own hardhat instance"
  start_hardhat
fi

# npx karma start
