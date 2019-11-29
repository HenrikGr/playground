/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

const Question = require('./question')

/**
 * DragDropQuestion constructor
 * For DragDropQuestion to properly inherit from Question,
 * here inside the DragDropQuestion constructor, we have to
 * explicitly call the Question constructor
 * passing DragDropQuestion as the this object, and the parameters
 * we want to use in the Question constructor:
 * @param theQuestion
 * @param theChoices
 * @param theCorrectAnswer
 * @constructor
 */
function DragDropQuestion(theQuestion, theChoices, theCorrectAnswer) {
  Question.call(this, theQuestion, theChoices, theCorrectAnswer)
}

// inherit the methods and properties from Question
DragDropQuestion.prototype = Object.create(Question.prototype)
// Re-assign the constructor
DragDropQuestion.prototype.constructor = DragDropQuestion

// Override the displayQuestion method it inherited
DragDropQuestion.prototype.displayQuestion = function () {
  let questionToDisplay = this.question
  let choiceCounter = 0

  this.choices.forEach(function (eachChoice)  {
    questionToDisplay += '<div>' + eachChoice + '</div>'
    choiceCounter++
  })

  console.log('html: ', questionToDisplay)
}


module.exports = DragDropQuestion
