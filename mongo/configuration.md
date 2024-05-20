# MongoDB Configuration

## Insert

We need to insert haji-encoder settings into database using [js file](./data/insert.js)

- before inserting modify settings array first

#### where to modify ?

- (OPTIONAL: for webhook usage) modify `webhooks[0,1,2].secret` field (navaapp secrets) 
- modify `destinationServers[0].s3Config.accessKeyId` field (you have generated this before)
- modify `destinationServers[0].s3Config.secretAccessKey` (you have generated this before)

- if you want to add FTP server you can use the following object to destinationServers array (optional):

```js
{
    "_id": new ObjectId(),
    "type": "FTP",
    "ftpConfig": {
        "host": "<FTP_IP>",
        "username": "changethis",
        "password": "changethis",
        "rootDirectory": "public_html/media"
    },
    "createdAt": new Date(),
    "updatedAt": new Date()
}
```

- copy js file into mongodb container

```bash
docker cp ./data/insert.js $(docker ps -q -f name=encoder_mongodb):/insert.js
```

- go to the mongodb container terminal

```bash
docker exec -it $(docker ps -q -f name=encoder_mongodb) bash
```

- login into mongo shell

```bash
mongosh -u haji -p changethis 
```

- connect to hajiEncoder database and execute insert query

```bash
use hajiEncoder
load('/insert.js')
db.settings.find()
```

you should see the settings array printed

this is your unhashed apikey:

```506df047112944608fda10988738234f```

you should use it for hajiEncoder authorization in swagger and other authorizations you might need.

Done!
