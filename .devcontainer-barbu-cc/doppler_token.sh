#!/bin/bash

# Export env vars
export $(grep -v '^#' .env | xargs)

declare DOPPLER_TOKEN_API_NAME="${APP_NAME}_DOPPLER_TOKEN"

[ -n "$1" ] && DOPPLER_TOKEN=$1 || { echo -n "Enter your DOPPLER_TOKEN: "; read DOPPLER_TOKEN; }

export ${DOPPLER_TOKEN_API_NAME}=$DOPPLER_TOKEN

WSLENV=$WSLENV:${DOPPLER_TOKEN_API_NAME}/p bash.exe