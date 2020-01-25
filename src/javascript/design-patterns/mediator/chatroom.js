/**
 * @prettier
 * @copyright (c) 2020 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * These symbols are used to represent properties that should not be part of
 * the public interface. You could also use ES2019 private fields, but those
 * are not yet widely available as of the time of my writing.
 */
const room = Symbol('room')
const participants = Symbol('participants')
const logger = Symbol('logger')

/**
 * The Mediator pattern provides central authority over a group of objects
 * by encapsulating how these objects interact.
 * This model is useful for scenarios where there is a need to manage complex
 * conditions in which every object is aware of any state change in any other
 * object in the group.
 *
 * @public
 * @class
 *
 * @example
 * In the example code we have four participants that are joining in a chat session
 * by registering with a Chat room (the Mediator). Each participant is represented
 * by a Participant object. Participants send messages to each other and the Chat
 * room handles the routing
 */
class ChatRoom {
  constructor(name) {
    /**
     * Name of the chat room
     */
    this[room] = name
    /**
     * Store for participants
     */
    this[participants] = {}
    /**
     * Sore for messages sent
     */
    this[logger] = ''
  }

  /**
   * Setter for the message logger
   * @param {string} message - message to store
   * @public
   */
  set logger(message) {
    this[logger] = this[logger] + message + '\n'
  }

  /**
   * Get all logged messages
   * @returns {string}
   * @public
   */
  getLog() {
    return 'Log from chat room: ' + this[room] + '\n' +  this[logger]
  }

  /**
   * Register a participant
   * @param {Participant} participant - participant to register
   * @public
   */
  register(participant) {
    // Update reference store
    this[participants][participant.participantName] = participant

    // Bind the participant with the this chat room
    participant[chatRoom] = this
  }

  /**
   * Rout messages
   * @param {string} message - message to be routed
   * @param {Participant} from - participant object that sends a message
   * @param {Participant} to - participant object to receive the message
   */
  send(message, from, to) {
    // If no receiver specified - broadcast to all but sender
    if (!to) {
      for (let participant in this[participants]) {
        // Filter out sender
        if (participant !== from.participantName) {
          // Call the participant's receive method
          this[participants][participant].receive(message, from)
        }
      }
    } else {
      // Call the participant's receive method
      to.receive(message, from)
    }
  }
}


/*
 * These symbols are used to represent properties that should not be part of
 * the public interface. You could also use ES2019 private fields, but those
 * are not yet widely available as of the time of my writing.
 */
const participantName = Symbol('participantName')
const chatRoom = Symbol('chatRoom')

/**
 * Participants send messages to each other and
 * the chat room handles to routing
 */
class Participant {
  constructor(name) {
    /**
     * Name of the participant
     */
    this[participantName] = name

    /**
     * Reference to the chat room, is set after registration
     */
    this[chatRoom] = null
  }

  /**
   * Getter for the participantName property
   * @returns {string}
   * @public
   */
  get participantName() {
    return this[participantName]
  }

  /**
   * Setter for the chat room property
   * @param {ChatRoom} chatRoom - chatRoom instance
   * @public
   */
  set chatRoom(chatRoom) {
    this[chatRoom] = chatRoom
  }

  /**
   * Send a message via the chatRoom (mediator)
   * @param {string} message - message
   * @param {Participant} to - participant object to receive the message
   * @public
   */
  send(message, to) {
    this[chatRoom].send(message, this, to)
  }

  /**
   * Receive message from the chatRoom - is called in the route logic of the chatRoom object
   * @param {string} message - message
   * @param {Participant} from - participant object that sent the message
   * @remarks Store the received message in the logger for this demo.
   */
  receive(message, from) {
    // Store the message in the chat room logger store in this demo
    this[chatRoom].logger = from.participantName + ' to ' + this.participantName + ': ' + message
  }
}


module.exports = {
  ChatRoom,
  Participant
}
