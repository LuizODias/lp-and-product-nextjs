#!/usr/bin/env bash

set -ex

SHORT_SHA=$(git rev-parse --short=16 HEAD)
LAST_COMMIT_DT=$(git log -1 --format="%at" | xargs -I{} date -d @{} +%Y.%m.%d-%H.%M.%S)
DEPLOYMENT_TAG=platform:${LAST_COMMIT_DT}
REGISTRY_DOMAIN=ghcr.io
REGISTRY=${REGISTRY_DOMAIN}/nextjs-lp

docker login ${REGISTRY_DOMAIN}

docker build -f Dockerfile . --build-arg MMP_GIT_HASH="${SHORT_SHA}" -t "${DEPLOYMENT_TAG}"

docker tag "${DEPLOYMENT_TAG}" "${REGISTRY}/${DEPLOYMENT_TAG}"

docker image push "${REGISTRY}/${DEPLOYMENT_TAG}"
