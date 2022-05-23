#!/bin/bash
cd express
npm install
cd ../web
npm install
cd ../docker
docker-compose down
sudo chown -R 27:sudo ./sql/data
docker-compose up -d --build
