import winston from "winston";

// buat setup logging
export const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({}),
    ]
})