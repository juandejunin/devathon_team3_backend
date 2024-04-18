export type TInitialize = boolean | string | Error;

export interface IBootstrap {
  initialize(): Promise<TInitialize>;
}
