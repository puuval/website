#!/bin/sh

npm run build
rm -rf ../../
cp -r build ../../