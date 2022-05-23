# Instalación de la imagen des del Hub oficial de Docker
FROM php:7.4-apache

RUN cp /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/ && \
    cp /etc/apache2/mods-available/headers.load /etc/apache2/mods-enabled/

RUN apt update && apt install zip unzip git -y

# Instalación de mysqli
RUN docker-php-ext-install mysqli
RUN docker-php-ext-install pdo
RUN docker-php-ext-install pdo_mysql