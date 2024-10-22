#!/bin/bash


echo 'watching for css changes'

./tailwindcss-linux-x64 -i b/static/global.css -o b/static/output.css --watch
