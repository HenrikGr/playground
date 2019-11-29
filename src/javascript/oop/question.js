/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Question constructor
 * All question objects will inherit from this
 * @param theQuestion
 * @param theChoices
 * @param theCorrectAnswer
 * @constructor
 */
function Question(theQuestion, theChoices, theCorrectAnswer) {
  // Initialize the instance properties
  this.question = theQuestion;
  this.choices = theChoices;
  this.correctAnswer = theCorrectAnswer;
  this.userAnswer = "";

  // private properties: these cannot be changed by instances
  const newDate = new Date()
  // Constant variable: available to all instances through the
  // instance method below. This is also a private property.
  const QUIZ_CREATED_DATE = newDate.toLocaleDateString()

  // This is the only way to access the private QUIZ_CREATED_DATE
  // variable
  // This is an example of a privilege method: it can access
  // private properties and it can be called publicly
  this.getQuizDate = function() {
    return QUIZ_CREATED_DATE;
  }

  // A confirmation message that the question was created
  console.log("Quiz Created On: " + this.getQuizDate())
}

Question.prototype = {
  constructor: Question,
  getQuestion: function() {
    return this.question
  },
  getCorrectAnswer: function() {
    return  this.correctAnswer
  },
  getUserAnswer: function() {
    return this.userAnswer
  },
  displayQuestion: function() {
    let questionToDisplay = this.question
    let choiceCounter = 0

    this.choices.forEach(function (eachChoice)  {
      questionToDisplay += '<span>' + eachChoice + '</span>'
      choiceCounter++
    })

    console.log('html: ', questionToDisplay)
  }
}

module.exports = Question
