#!/bin/bash

# Export env vars
export $(grep -v '^#' .env | xargs)

declare CONTAINER_NAME="${APP_NAME}_nodejs"

docker exec -it ${CONTAINER_NAME} bash
