#!/bin/bash
rm -rf _site
git clone -b master `git config remote.origin.url` _site
jekyll build
cd _site
echo "kevoree.org" > CNAME
git add .
gca -m "New release"
gp
cd ..
