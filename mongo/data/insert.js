
const settings = [
  {
    _id:  new ObjectId(),
    default: true,
    webHooks:  [ /*
      { 
        secret: "PUT_YOUR_SECRET",
        secretHeaderKey: "authorization",
        method: "GET",
        eventType: "Authorization",
        payloadUrl: "https://navaapp.com/api/auth/v1/get-current-user-id",
        _id: {
          $oid: "62f9ee4d04e15e655d3d1643",
        },
        updatedAt: {
          $date: "2022-08-15T06:57:17.506Z",
        },
        createdAt: {
          $date: "2022-08-15T06:57:17.506Z",
        },
      },
      {
        secret: "PUT_YOUR_SECRET",
        secretHeaderKey: "authkey",
        method: "POST",
        eventType: "CompleteTask",
        payloadUrl: "https://vs.toopmarket.com/api/v1/video-stream/save-video",
        _id: new ObjectId(),
        updatedAt: {
          $date: "2022-08-15T06:57:17.506Z",
        },
        createdAt: {
          $date: "2022-08-15T06:57:17.506Z",
        },
      },
      {
        secret: "PUT_YOUR_SECRET",
        secretHeaderKey: "authkey",
        method: "POST",
        eventType: "FailedTask",
        payloadUrl: "https://vs.toopmarket.com/api/v1/video-stream/save-video",
        _id:  new ObjectId(),
        updatedAt: {
          $date: "2022-08-15T06:57:17.506Z",
        },
        createdAt: {
          $date: "2022-08-15T06:57:17.506Z",
        },
      },
          */] ,
    destinationServers: [
      {
        _id:  new ObjectId(),
        type: "S3",
        excludes: [],
        ftpConfig: null,
        s3Config: {
          endpoint: "https://dl.navaapp.com",
          accessKeyId: "PUT_ACCESS_KEY_ID",
          secretAccessKey: "PUT_SECRET_ACCESS_KEY",
          s3ForcePathStyle: true,
          bucketName: "media",
          regionName: null,
        },
      },
    ],
    maxThreads: 2,
    serviceName: "nava",
    createdAt: {
      $date: "2022-08-02T21:19:57.795Z",
    },
    updatedAt: {
      $date: "2022-12-09T10:47:05.034Z",
    },
    __v: 0,
    tasks: {
      hls: true,
      convertQuality: true,
    },
  },
];
const apikeys = [
  {
    _id:  new ObjectId(),
    key: "eb94bbb01578b04a699ec42217432a30e7b330309e700e30b14d362db03c909a",
    createdAt: {
      $date: "2022-07-27T06:38:49.973Z",
    },
    updatedAt: {
      $date: "2022-07-27T06:38:49.973Z",
    },
    __v: 0,
  },
];
db.settings.insertMany(settings);
db.apikeys.insertMany(apikeys);
