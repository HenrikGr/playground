/**
 * @prettier
 * @copyright (c) 2020 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ChatRoom, Participant } from '../chatroom'


describe('Mediator - ChatRoom', () => {

  it('Chat room test', () => {

    let yoko = new Participant('Yoko')
    let john = new Participant('John')
    let paul = new Participant('Paul')
    let ringo = new Participant('Ringo')

    let chatRoom = new ChatRoom('Beatles')
    console.log('chatRoom', chatRoom)
    chatRoom.register(yoko)
    chatRoom.register(john)
    chatRoom.register(paul)
    chatRoom.register(ringo)

    yoko.send('All you need is love.')
    console.log(chatRoom.getLog())
    yoko.send('I love you John.')
    john.send('Hey, no need to broadcast.', yoko)
    paul.send('Ha, I heard that!')
    ringo.send('Paul, what do you think?', paul)

    let log = chatRoom.getLog()
    expect(log).toBe('Log from chat room: Beatles' + '\n' +
      'Yoko to John: All you need is love.' + '\n' +
      'Yoko to Paul: All you need is love.' + '\n' +
      'Yoko to Ringo: All you need is love.' + '\n' +
      'Yoko to John: I love you John.' + '\n' +
      'Yoko to Paul: I love you John.' + '\n' +
      'Yoko to Ringo: I love you John.' + '\n' +
      'John to Yoko: Hey, no need to broadcast.' + '\n' +
      'Paul to Yoko: Ha, I heard that!' + '\n' +
      'Paul to John: Ha, I heard that!' + '\n' +
      'Paul to Ringo: Ha, I heard that!' + '\n' +
      'Ringo to Paul: Paul, what do you think?' + '\n'
    )
  })
})

