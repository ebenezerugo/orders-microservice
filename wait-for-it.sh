#!/usr/bin/env bash
set -e

# Define variables
host="$1"
port="$2"
shift 2
cmd="$@"

# Wait for the host to become available
until nc -z "$host" "$port"; do
  >&2 echo "${host} is unavailable - sleeping"
  sleep 1
done

# Execute the command once the host is up
>&2 echo "${host} is up - executing command"
exec "$cmd"
