/*
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Testing closures
 */
describe('Closures', () => {

  it('Creates a closure by adding a function inside another function.', () => {

    function showName(firstName, lastName) {
      let nameIntro = "Your name is "
      // this inner function has access to the outer
      // function's variables, including the parameter
      function createFullName() {
        return nameIntro + firstName + " " + lastName
      }

      return createFullName()
    }

    expect(showName ("Henrik", "Grönvall")).toBe('Your name is Henrik Grönvall')
  })


  it('Closures have access to the outer function’s variable even after the outer function returns', () => {

    function playerName(firstName) {
      let nameIntro = "This player is "

      // this inner function has access to the outer function's variables, including the parameter
      function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName
      }

      return lastName
    }

    // At this juncture, the playerName outer
    // function has returned. [Function lastName]
    let bbName = playerName("Björn")

    // The closure (lastName) is called here after the outer function has returned above
    // Yet, the closure still has access to the outer function's variables and parameter
    expect(bbName("Borg")).toEqual('This player is Björn Borg')

  })

  it('Closures store references to the outer function’s variables; they do not store the actual value', () => {

    function playerID() {
      let playerID = 999

      // We are returning an object with some inner functions
      // All the inner functions have access to the outer function's variables
      return {
        getID: function()  {
          // This inner function will return the UPDATED playerID variable
          // It will return the current value of playerID,
          // even after the setID function changes it
          return playerID
        },
        setID: function(id)  {
          // This inner function will change the
          // outer function's variable anytime
          playerID = id
        }
      }
    }

    // At this juncture, the playerID  outer function has returned.
    const bbID = playerID()

    expect(bbID.getID()).toEqual(999) // 999
    bbID.setID(567) // Changes the outer function's variable
    expect(bbID.getID()).toEqual(567) // It returns the updated playerID variable 
  })


  it('Closures gone mad', () => {

    // This example is explained in detail below (just after this code box).
    function playerIDCreator(thePlayers) {
      let i
      const uniqueID = 100

      for (i = 0; i < thePlayers.length; i++) {
        thePlayers[i]["id"] = function() {
          return uniqueID + i
        }
      }

      return thePlayers
    }

    let actionPlayers = [{
      name:"Woods",
      id:0
    }, {
      name:"Michelson",
      id:0
    }, {
      name:"Stensson",
      id:0
    }];

    const createIdForActionPlayers = playerIDCreator(actionPlayers)
    const woodsID = createIdForActionPlayers[0];

    expect(woodsID.id()).toEqual(103)

  })

})
