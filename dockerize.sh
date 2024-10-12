#!/bin/bash

IMAGEID="crustio/ipfs-w3auth:caddy"
echo "Building crustio/ipfs-w3auth:caddy ..."
docker build -t $IMAGEID .
