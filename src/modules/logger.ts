import log4js from 'log4js';
const logger = log4js.getLogger('MS-Artifact');
logger.level = process.env.LOGLEVEL || "debug";

export const msLogger = logger;