FROM php:5.6-apache

RUN apt-get update && \
apt-get install -y nano

COPY apache2-foreground /usr/local/bin/
COPY template/ /var/apache2/template
COPY conf/ /etc/apache2

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*
