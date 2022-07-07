#!/bin/bash

export $(grep -v '^#' .env | xargs)

docker network create -d bridge ${NETWORK_NAME}