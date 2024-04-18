import { Server } from 'http';

export type TInitialize = boolean | string | Error | Server;

export interface IBootstrap {
  initialize(): Promise<TInitialize>;
}
