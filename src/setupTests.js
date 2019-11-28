/**
 * @prettier
 * @description: Jest configuration
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license
 */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Add WEB Storage API to the global object
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}

global.localStorage = localStorageMock;

configure({ adapter: new Adapter() })
