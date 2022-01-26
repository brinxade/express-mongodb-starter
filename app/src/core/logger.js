import chalk from 'chalk';

class Logger {
    constructor(prefix="", postfix="") {
        this.prefix=prefix;
        this.postfix=postfix;
    }

    debug(text) {
        console.log(`${chalk.blueBright('[DEBUG]')} ${chalk.white(text)} ${this.postfix}`);
    }

    info(text) {
        console.log(`[INFO]${this.prefix} ${chalk.gray(text)} ${this.postfix}`);
    }

    warn(text) {
        console.log(`${chalk.yellow('[WARN]')} ${this.prefix} ${text} ${this.postfix}`);
    }

    err(text) {
        console.log(`${chalk.redBright('[ERROR]')} ${chalk.whiteBright(text)} ${this.postfix}`);
    }

    fatal(text) {
        console.log(`${chalk.redBright('[FATAL]')} ${chalk.bgRed(chalk.yellow(text))} ${this.postfix}`);
    }

    static LogRequest(req, res, time) {
        console.log(`${chalk.cyanBright('[REQUEST]')} ${req.socket.remoteAddress} ${chalk.cyanBright(req.method)} ${req.url} ${time.toFixed(3)}ms`, req.body);
    }
}


export {Logger};