const winston = require('winston');
const winstonGelf = require('winston-gelf');
require('winston-daily-rotate-file');

var transport = new winston.transports.DailyRotateFile({
    filename: 'logs/app-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
  });
const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
      winston.format.printf(info => `${info.level}: ${[info.timestamp]} : ${info.message}`)
    ),
    transports: [
        transport,
        new winstonGelf({
            gelfPro: {
              fields: {
                env: 'development'
              },
              adapterName: 'udp',
              adapterOptions: {
                host: '127.0.0.1', // Replace per your Graylog domain
                port: 12201,
              }
            }
          })
      ]
  });
 

module.exports = logger