/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

const Question = require('./question')

/**
 * MultipleChoiceQuestion constructor
 * For MultipleChoiceQuestion to properly inherit from Question,
 * here inside the MultipleChoiceQuestion constructor, we have to
 * explicitly call the Question constructor
 * passing MultipleChoiceQuestion as the this object, and the parameters
 * we want to use in the Question constructor:
 * @param theQuestion
 * @param theChoices
 * @param theCorrectAnswer
 * @constructor
 */
function MultipleChoiceQuestion(theQuestion, theChoices, theCorrectAnswer) {
  Question.call(this, theQuestion, theChoices, theCorrectAnswer)
}

// inherit the methods and properties from Question
MultipleChoiceQuestion.prototype = Object.create(Question.prototype)
// Re-assign the constructor
MultipleChoiceQuestion.prototype.constructor = MultipleChoiceQuestion


module.exports = MultipleChoiceQuestion
