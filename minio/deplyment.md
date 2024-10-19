# Minio Deployment

## Preparation

- Create minio data directory:

```bash
mkdir -p /var/data/minio && mkdir -p /var/data/config/minio
```

- in the ```/var/data/config/minio``` directory, create a file named ```minio.env``` and use the [env file](minio.env) to fill your ```minio.env```.
  
- NOTE: you should change the ```MINIO_BROWSER_REDIRECT_URL``` with your server IP, but keep the ```9001``` port. e.g.: http://YOUR.SERVER.IP.HERE:9001

- Create a domain you want to use for the Public S3 Api, for example: dl.navaapp.com

- Finally We need to use [docker-compose.yml](./docker-compose.yml) file to deploy minio. Create the [docker-compose.yml](./docker-compose.yml) in the ```/var/data/minio``` directory.
- NOTE: you have to replace the \<\<\<your minio domain without http or https\>\>\> in the [docker-compose.yml](./docker-compose.yml) file with your minio domain.
- NOTE: There are 2 replacements in the [docker-compose.yml](./docker-compose.yml) file you need to replace
- for example: dl.navaapp.com.
- NOTE: YOU SHOULD REMOVE THE HTTPS OR HTTP FROM THE DOMAIN. ONLY WRITE THE DOMAIN.

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
- set it public (by default buckets is private)
- generate "access key" and "secret access key" (we will use it later)
- create an empty file in that bucket named "healthـcheck"
