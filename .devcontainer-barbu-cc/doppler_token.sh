#!/bin/bash

# Export env vars
export $(grep -v '^#' .doppler | xargs)

if [ -z ${DOPPLER_TOKEN+x} ]; 
then 
    [ -n "$1" ] && DOPPLER_TOKEN=$1 || { 
        echo -n "Enter your DOPPLER_TOKEN: ";
        read DOPPLER_TOKEN; 
        echo "DOPPLER_TOKEN=${DOPPLER_TOKEN}" | tee .doppler
    }
fi

DOPPLER_TOKEN=$DOPPLER_TOKEN docker-compose up --build