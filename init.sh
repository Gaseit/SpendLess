#!/bin/bash
# Instalación de los modulos para el servidor express
cd express
npm install

# Instalación de los modulos para react
cd ../web
npm install

# Entramos en la carpeta con el docker
cd ../docker
# Paramos los dockers por si se estan ejecutando
docker-compose down
# Cambiamos permisos de la carpeta con la base de datos para que no de problemas
sudo chown -R 27:sudo ./sql/data
# Iniciamos los containers
docker-compose up -d --build
