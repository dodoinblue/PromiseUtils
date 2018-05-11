export class Deferred {
  constructor () {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
}

export function timeoutPromise (promise, milliseconds) {
  return Promise.race([
    promise,
    delay(milliseconds)
  ])
}

export function delay (milliseconds) {
  let timeoutDefer = new Deferred()
  setTimeout(() => {
    timeoutDefer.resolve({
      state: 'timedOut',
      time: milliseconds,
      message: `Timeout after ${milliseconds} milliseconds`
    })
  }, milliseconds)
  return timeoutDefer.promise
}
