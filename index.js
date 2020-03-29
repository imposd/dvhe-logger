const chalk = require('chalk');
const moment = require('moment');

const date = chalk.inverse(`[${moment().format('HH:mm:ss')}]`);

class Logger {

    static log(...msg) {
        return console.log(`${date} ${chalk.bgBlue(chalk.black(' LOG '))} ${msg}\n`);
    }

    static warn(...msg) {
        return console.warn(`${date} ${chalk.bgYellowBright(chalk.black(' WARN '))} ${chalk.yellowBright(msg)}\n`);
    }

    static error(...msg) {
        return console.error(`${date} ${chalk.bgRed(' ERROR ')} ${chalk.red(msg)}\n`);
    }

    static debug(...msg) {
        return console.log(
            `${date} ${chalk.bgGreenBright(chalk.black(' DEBUG '))} ${chalk.greenBright(msg)}\n`);
    }
}

module.exports = Logger;
