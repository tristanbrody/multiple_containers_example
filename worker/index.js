const keys = require("./keys");
const redis = require("redis");

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});

const sub = redisClient.duplicate();

const fib = index => {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
};

sub.on("message", (channel, message) => {
  console.log(message);
  try {
    redisClient.hset("values", message, fib(parseInt(message)));
  } catch (err) {
    redisClient.hset("values", "Not working", "Not working");
  }
});

sub.subscribe("insert");
