# LoadBalancer Deployment

## Build it

- clone the load-balancer service repository here with:

```bash
git clone  git@gitlab.navaapp.com:/vod/load-balancer.git load-balancer
```

- build and push the image with:

```bash
cd ./load-balancer && \
docker build . -t registry.navaapp.com/load-balancer && \
docker push registry.navaapp.com/load-balancer
```

## Preparation

- Create config directory with:

```bash
mkdir -p /var/data/config/load-balancer
```

- load balancer uses a [json config file](./servers.json) which has the following keys

```json
{
  "availableServers": [{
            "hostname": "dl.navaapp.com", // the hostname of our vod server
            "load": 10, // With this key, we can prioritize load balancing 
            "key": 0, // this should be the index of object in this array
            "health_check_uri": "media/health_check", // this is a health-check file that we created before
            "base_path": "media/" // the basePath of server
        }
    ],
    "defaultServers": [{  // backup servers configuration
        "hostname": "dl.navaapp.com",
        "load": 10,
        "relatedKey": 0 // key of "availableServer"
    }]
}
```

- Modify [servers.json](./servers.json) file and copy it in config directory

```bash
cp ./servers.json /var/data/config/load-balancer/servers.json
```

- Create an environment variable with the domain you want to use for load balancer server Api (do not forget to configure dns for this domain):

```bash
export BALANCER_DOMAIN=balancer.navaapp.com
```

- Finally We need to use [docker-compose.yml](./docker-compose.yml) file to deploy load-balancer service.

## Deploy it

Deploy the stack with:

```bash
docker stack deploy -c docker-compose.yml balancer
```

## Check it

- Check if the stack was deployed with:

```bash
docker stack ps balancer
```

It will output something like:

```bash
ID             NAME                IMAGE          NODE              DESIRED STATE   CURRENT STATE          ERROR   PORTS
w5o6fmmln8ni   balancer_app.1   load-balancer   nava   Running         Running 1 minute ago
```

- You can check the haji-encoder logs with:

```bash
docker service logs balancer_app
```

- You can access load-balancer at `https://balancer.navaapp.com`
- You can get active hostname at `https://balancer.navaapp.com/get-host`
