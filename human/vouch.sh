#!/bin/bash

URL=$1 jq '.vouches += [{"url":env.URL,"vouched_at":now|strflocaltime("%Y-%m-%d")}]' human.json > temp.json && jq . temp.json |tee human.json && rm temp.json
