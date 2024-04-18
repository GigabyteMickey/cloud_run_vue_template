#!/bin/sh
# Replace $PORT with the actual port value
envsubst '$PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
# Start nginx in the foreground
nginx -g 'daemon off;'
