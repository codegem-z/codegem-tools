import { printLevel } from './decorators.js';

export default class Log {
  private ctx;
  constructor(ctx: any) {
    this.ctx = ctx;
  }

  @printLevel('info')
  info(...data: any[]) {
    console.info(...data);
  }

  @printLevel('debug')
  debug(...data: any[]) {
    if (this.ctx.debug) {
      console.log(...data);
    }
  }
}
