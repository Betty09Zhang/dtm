'use strict'

export default class MqttListener {
  /**
   * This is the subscription string the listener is listening to.
   *
   * @returns {string}
   */
  get subscription () {
    return '/stock/order'
  }

  /**
   * Message handler. Do what you want with your MQTT message here.
   *
   * @param {String} message Data of the message
   * @param {String[]} wildcardMatches Wildcard matches in your subscription string
   */
  async handleMessage (message, wildcardMatches) {
      console.log('message: ', message)
      console.log('wildcardMatches: ', wildcardMatches)
  }
}

