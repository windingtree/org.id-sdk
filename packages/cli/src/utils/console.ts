import chalk from 'chalk';

export const printInfo = (message: string): void =>
  console.log(chalk.green(message));

export const printWarn = (message: string): void =>
  console.log(chalk.yellow(message));

export const printError = (message: string): void =>
  console.log(chalk.red(message));
