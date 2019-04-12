import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../client/components/App.jsx'
import Cow from '../client/components/Cow.jsx'
import Rooster from '../client/components/Rooster.jsx'
import Snake from '../client/components/Snake'
import Sheep from '../client/components/Sheep'
import Pig from '../client/components/Pig.jsx'

configure({adapter: new Adapter()})

test('tests are working', () => {
  const expected = 2
  const actual = 1+1
  expect(expected).toBe(actual)
})

test('find Cow header', () => {
  const wrapper = shallow(<Cow/>)
  const expected = "I'm cow"
  const actual = wrapper.text()

  expect(expected).toBe(actual)
})

test('find Pig header', () => {
  const wrapper = shallow(<Pig/>)
  const expected = "I'm Pig"
  const actual = wrapper.text()

  expect(actual).toBe(expected)
})

test('find Snake header', () => {
  const wrapper = shallow(<Snake/>)
  const expected = "I'm Snake"
  const actual = wrapper.text()

  expect(actual).toBe(expected)
})

test('find Rooster header', () => {
  const wrapper = shallow(<Rooster/>)
  const expected = "I'm Rooster"
  const actual = wrapper.text()

  expect(actual).toBe(expected)
})

test('find Sheep header', () => {
  const wrapper = shallow(<Sheep/>)
  const expected = "I'm Sheep"
  const actual = wrapper.text()

  expect(actual).toBe(expected)
})

test('find App', () => {
  const wrapper = shallow(<App/>)
  const string = wrapper.text()
  const content = string.split(',')

  const expected = "Fun farm"
  const actual = content.find(function(e){
    return e == 'Fun farm'
  })

  expect(actual).toBe(expected)
})