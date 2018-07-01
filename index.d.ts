export declare class Deferred<T> {
  constructor();
  promise: Promise<T>;
  resolve(value: any): void;
  reject(reason: Error): void;
}

export declare function timeoutPromise(promise: Promise<any>, milliseconds: number): Promise<any>;
export declare function delay(milliseconds: number): Promise<any>;
