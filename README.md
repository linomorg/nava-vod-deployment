# VOD deployment Documentation

## Deployment Environment

os: ubuntu

cpus: 8

memory: 8

## Required Services

1. docker
2. mongodb
3. traefik
4. minio
5. docker registry

## Overview

We want to deploy this service on the navaapp.com domain

This documentation is written under the assumption that our server has open access to the Internet

## Docker installation

Docker will be installed correctly by running the following commands

``` bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## docker swarm

Just enter the following command to create a manager node

```docker swarm init```

## Deployment steps

In each directory of this repository, we have documentation for deploying each service

Follow these steps in order:

1. [traefik deployment](./traefik/deplyment.md)
2. [minio deployment](./minio/deplyment.md)
3. [haji-encoder (build and deployment)](./haji-encoder/deplyment.md)
4. [mongodb configuration](./mongo/configuration.md)
5. [load-balancer deployment](./load-balancer/configuration.md)
