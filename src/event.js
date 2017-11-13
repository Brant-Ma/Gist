/**
 * event.js is a tiny event emitter implementation
 */

class Event {
  // sub is the handler container for every instance
  constructor() {
    this.sub = {}
  }

  // subscribe: add a handler for an event
  listen(key, fn) {
    if (!fn) return
    if (!this.sub[key]) this.sub[key] = []
    this.sub[key].push(fn)
  }

  // unsubscribe: remove a handler from an event
  remove(key, fn) {
    if (!this.sub[key]) return
    if (!fn) {
      this.sub[key] = []
    } else {
      this.sub[key].splice(this.sub[key].indexOf(fn), 1)
    }
  }

  // publish: fire all handlers of an event
  trigger(key, ...args) {
    if (!this.sub[key]) return
    for (let i = 0; i < sub[key].length; i++) {
      sub[key][i].apply(this, args)
    }
  }

  // syntax sugar
  on() { return this.listen.apply(this, arguments) }
  off() { return this.remove.apply(this, arguments) }
  emit() { return this.trigger.apply(this, arguments) }
}

export { Event }
