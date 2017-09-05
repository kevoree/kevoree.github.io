#!/bin/zsh
rm -rf _site
git clone -b master `git config remote.origin.url` _site
docker run -v $PWD:/srv/jekyll --rm -it jekyll/jekyll jekyll build
cd _site
echo "kevoree.org" > CNAME
git add .
git commit -am "New release"
git push
cd ..
