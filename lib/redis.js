import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

// rediss://default:AWATAAIjcDFhYjI2MDAwODc4YWE0YzFiOWU1ZjViZWQ5NWRhNmQ5MXAxMA@crisp-walley-26505.upstash.io:6379
