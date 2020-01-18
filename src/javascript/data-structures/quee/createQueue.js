/**
 * @prettier
 *
 * Definition and the signature of our queue, and rules:
 * - A task will be a function that if called returns a promise. Once that promise is resolved or rejected we consider
 *   the task done.
 * - The queue accepts an array of tasks and the maximum number of parallel requests in the format of a number.
 * - The queue returns a single promise which is resolved with an array containing the results of all the tasks.
 *   This means that the number of the items in the returned array should be equal to the number of the tasks
 *
 * @copyright (c) 2020 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Function that allows us to run tasks in parallel
 *
 * @param {Array} tasks - array of task to be run in parallel
 * @param maxNumOfWorkers
 * @returns {Promise<unknown>}
 */
function createQueue(tasks, maxNumOfWorkers = 4) {
  let numOfWorkers = 0
  let taskIndex = 0

  return new Promise(done => {
    const handleResult = index => result => {
      tasks[index] = result
      numOfWorkers--
      getNextTask()
    }
    const getNextTask = () => {
      if (numOfWorkers < maxNumOfWorkers && taskIndex < tasks.length) {
        tasks[taskIndex]()
          .then(handleResult(taskIndex))
          .catch(handleResult(taskIndex))
        taskIndex++
        numOfWorkers++
        getNextTask()
      } else if (numOfWorkers === 0 && taskIndex === tasks.length) {
        done(tasks)
      }
    }
    getNextTask()
  })
}

const createTask = value => () => {
  if (value === 6) return Promise.reject(new Error('sorry'))
  return new Promise(resolve => setTimeout(() => resolve(value), value))
}

createQueue([
  createTask(100),
  createTask(2),
  createTask(6),
  createTask(50),
  createTask(10),
  createTask(1000),
  createTask(20),
  createTask(40)
]).then(result => console.log(result))
