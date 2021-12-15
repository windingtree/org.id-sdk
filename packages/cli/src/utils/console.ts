import chalk from 'chalk';
import jsome from 'jsome';

export const printInfo = (message: string): void =>
  console.log(chalk.green(message));

export const printMessage = (message: string): void =>
  console.log(chalk.blue(message));

export const printObject = (obj: object): void => {
  console.log('\n');
  jsome(obj);
  console.log('\n');
}

export const printWarn = (message: string): void =>
  console.log(chalk.yellow(message));

export const printError = (message: string): void =>
  console.log(chalk.red(message));
