class Deferred {
  constructor () {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
}

function timeoutPromise (promise, milliseconds) {
  return Promise.race([
    promise,
    delay(milliseconds)
  ])
}

function timeoutPromiseWithError (promise, milliseconds) {
  return Promise.race([
    promise,
    delay(milliseconds).then(result => {
      if (result.state === 'timedOut') {
        throw new Error(`Timeout after ${milliseconds} milliseconds`)
      } else {
        return result
      }
    })
  ])
}

function delay (milliseconds) {
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

module.exports = {
  Deferred,
  timeoutPromise,
  timeoutPromiseWithError,
  delay
}
