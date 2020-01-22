#!/bin/bash

# <-- this should probably check to see if bulma SASS files are here first...
sass --sourcemap=none -t compressed juke.scss:../juke.css
