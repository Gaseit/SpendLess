#!/bin/bash
cd docker
sudo docker-compose down
sudo chown -R 27:sudo ./sql/data
sudo docker-compose up -d --build
