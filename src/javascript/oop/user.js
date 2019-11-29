/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * User constructor
 * @param name
 * @param email
 * @constructor
 */
function User(name, email) {
  this.name = name
  this.email = email
  this.quizScores = []
  this.currentScore = 0
}

User.prototype = {
  constructor: User,
  saveScore: function(score)  {
    this.quizScores.push(score)
  },
  showNameAndScores: function()  {
    let scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet"
    return this.name + " Scores: " + scores
  },
  changeEmail:function(email)  {
    this.email = email
    return "New Email Saved: " + this.email
  }
}

export default User
