import { printName } from './decorators.js';

export default class Log {
  private ctx;
  constructor(ctx: any) {
    this.ctx = ctx;
  }

  info(...data: any) {
    console.info(...data);
  }

  @printName('debug')
  debug(...data: any) {
    if (this.ctx.debug) {
      console.log(...data);
    }
  }
}
