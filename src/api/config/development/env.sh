#!/bin/bash

export MONGO_URL="mongodb://127.0.0.1:27017/tripster-api"
export ROOT_URL="http://localhost:3333"
export METEOR_SETTINGS="$(cat config/$APP_ENV/settings.json)"
export PORT=3333
