#!/bin/bash

gnome-terminal \
    --tab -e "npm run-script dev" \
    --tab -e "gulp watch"