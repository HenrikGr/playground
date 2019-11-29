/*
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

const MultipleChoiceQuestion = require('../multiple-question')
const DragDropQuestion = require('../drag-drop-question')

// Initialize some questions and add them to an array
const allQuestions = [
  new MultipleChoiceQuestion("Who is Prime Minister of England?", ["Trump", "May", "Löfven", "Macron"], 3),

  new MultipleChoiceQuestion("What is the Capital of Brazil?", ["São Paulo", "Rio de Janeiro", "Brasília"], 2),

  new DragDropQuestion("Drag the correct City to the world map.", ["Washington, DC", "Rio de Janeiro", "Stockholm"], 0)
]

// Display all the questions
allQuestions.forEach(function (eachQuestion)  {
  eachQuestion.displayQuestion()
});
