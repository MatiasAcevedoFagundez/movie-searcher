/* eslint-disable no-underscore-dangle */
const noop = () => {};

class ActionCreator {
  constructor(type, payload = noop, args = []) {
    this._type = type;
    this._payload = payload;
    this._args = args;

    // eslint-disable-next-line
    return this.perform.call(this, args)
  }

  perform(args) {
    return {
      type: this._type,
      payload: this._payload(...args),
    };
  }
}
export default ActionCreator;
