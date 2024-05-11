# Minio Deployment

## Preparation

- Create minio data directory and [env file](minio.env) with this command and modify env configuration based on your needs:

```bash
mkdir -p /var/data/minio && cp minio.env /var/data/config/minio/minio.env
```

- Create an environment variable with the domain you want to use for the Public S3 Api:

```bash
export MINIO_DOMAIN=dl.navaapp.com
```

- Finally We need to use [docker-compose.yml](./docker-compose.yml) file to deploy minio.

## Deploy it

Deploy the stack with:

```bash
docker stack deploy -c docker-compose.yml minio
```

## Check it

- Check if the stack was deployed with:

```bash
docker stack ps minio
```

It will output something like:

```bash
ID             NAME                IMAGE          NODE              DESIRED STATE   CURRENT STATE          ERROR   PORTS
w5o6fmmln8ni   minio_app.1   minio/minio   nava   Running         Running 1 minute ago
```

- You can check the Minio logs with:

```bash
docker service logs minio_app
```

- You can access minio console at:
`http://<Your_Server_IP>:9001`

## Create bucket

Use minio console:

- create a bucket name "media"
- generate "access key" and "secret access key" (we will use it later)
- create an empty file in that bucket named "health-check"
