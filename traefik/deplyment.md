# Traefik Deployment

## Preparation

- Create a network that will be shared with Traefik and the containers that should be accessible from the outside, with:

```bash
docker network create --driver=overlay traefik-public
```

- Get the Swarm node ID of this node and store it in an environment variable:

```bash
export NODE_ID=$(docker info -f '{{.Swarm.NodeID}}')
```

- Create a tag in this node, so that Traefik is always deployed to the same node and uses the same volume:

```bash
docker node update --label-add traefik-public.traefik-public-certificates=true $NODE_ID
```

- Create an environment variable with your email, to be used for the generation of Let's Encrypt certificates, e.g.:

```bash
export EMAIL=admin@navaapp.com
```

- Create an environment variable with the domain you want to use for the Traefik UI (user interface), e.g.:

```bash
export DOMAIN=traefik.sys.navaapp.com
```

- You will access the Traefik dashboard at this domain, e.g. traefik.sys.navaapp.com. So, make sure that your DNS records point the domain to one of the IPs of the cluster. Better if it is the IP where the Traefik service runs (the manager node you are currently connected to).

- Create an environment variable with a username (you will use it for the HTTP Basic Auth for Traefik and Consul UIs), for example:

```bash
export USERNAME=admin
```

- Create an environment variable with the password, e.g.:

```bash
export PASSWORD=changethis
```

- Use `openssl` to generate the "hashed" version of the password and store it in an environment variable:

```bash
export HASHED_PASSWORD=$(openssl passwd -apr1 $PASSWORD)
```

- Finally We need to use [docker-compose.yml](./docker-compose.yml) file to deploy traefik

## Deploy it

Deploy the stack with:

```bash
docker stack deploy -c docker-compose.yml traefik
```

It will use the environment variables you created above.

## Check it

- Check if the stack was deployed with:

```bash
docker stack ps traefik
```

It will output something like:

```bash
ID             NAME                IMAGE          NODE              DESIRED STATE   CURRENT STATE          ERROR   PORTS
w5o6fmmln8ni   traefik_traefik.1   traefik:v2.2   nava   Running         Running 1 minute ago
```

- You can check the Traefik logs with:

```bash
docker service logs traefik_traefik
```
