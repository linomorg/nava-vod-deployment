# HajiEncoder Deployment

## Build it

- clone the haji-encoder service repository here with:

```bash
git clone  git@gitlab.navaapp.com:/vod/haji-encoder.git encoder
```
- make sure you are login to your registry for example registry.navaapp.com
```bash
$ docker login registry.navaapp.com
```


- build and push the image with:

```bash
cd ./encoder && \
docker build . -t registry.navaapp.com/nava-encoder && \
docker push registry.navaapp.com/nava-encoder
```

## Preparation

- Create data directories with these commands:

```bash
mkdir -p /var/data/haji-encoder/.haji && \
mkdir -p /var/data/haji-encoder/redis && \
mkdir -p /var/data/config/haji-encoder && \
mkdir -p /var/data/haji-encoder/mongodb
```

- Create an environment variable with the domain you want to use for encoder server Api (do not forget to configure dns for this domain):

```bash
export ENCODER_DOMAIN=encoder.navaapp.com
```

- Create an environment variable with the redis password you want:

```bash
export REDIS_PASSWORD=changethis
```

- Create environment variables for mongodb database:

```bash
export MONGO_DATABASE=hajiEncoder
export MONGO_USER=haji
export MONGO_PASSWORD=changethis 
```

- Modify encoder [env file](haji-encoder.env) and copy it in config directory

```bash
cp ./haji-encoder.env /var/data/config/haji-encoder/haji-encoder.env
```

- Finally We need to use [docker-compose.yml](./docker-compose.yml) file to deploy haji-encoder service.

## Deploy it

Deploy the stack with:

```bash
docker stack deploy -c docker-compose.yml haji-encoder
```

## Check it

- Check if the stack was deployed with:

```bash
docker stack ps haji-encoder
```

It will output something like:

```bash
ID             NAME                IMAGE          NODE              DESIRED STATE   CURRENT STATE          ERROR   PORTS
w5o6fmmln8ni   haji-encoder_encoder.1   haji-encoder   nava   Running         Running 1 minute ago
```

- You can check the haji-encoder logs with:

```bash
docker service logs haji-encoder_encoder
```

- You can access haji-encoder swagger documentation at:
`https://encoder.navaapp.com/docs`
