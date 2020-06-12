const { NODE_ENV } = process.env;

const config = {
  production: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cinta-negra-shard-00-00-efwi5.mongodb.net:27017,cinta-negra-shard-00-01-efwi5.mongodb.net:27017,cinta-negra-shard-00-02-efwi5.mongodb.net:27017/production?ssl=true&replicaSet=cinta-negra-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },
  staging: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cinta-negra-shard-00-00-efwi5.mongodb.net:27017,cinta-negra-shard-00-01-efwi5.mongodb.net:27017,cinta-negra-shard-00-02-efwi5.mongodb.net:27017/staging?ssl=true&replicaSet=cinta-negra-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },
};

module.exports = config[NODE_ENV];
