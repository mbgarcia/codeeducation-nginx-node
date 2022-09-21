#!/bin/sh

set -e

node /usr/src/app/index.js

exec "$@"