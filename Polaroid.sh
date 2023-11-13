#!/bin/sh
#!/usr/bin/env node

cameraType="Polaroid"
rootDir="/Users/akos/Development/gitRepos/bmp_to_png_converter/" #TODO: this path is your own root
index="${rootDir}index.js"

node $index $cameraType $rootDir