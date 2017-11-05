import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import LikeButton from './LikeButton'

chai.use(chaiEnzyme())

describe('<LikeButton />', () => {
  const button = shallow(<LikeButton />)

  it('is wrapped in a paragraph with class "LikeButton"', () => {
    expect(button).to.have.tagName('p')
    expect(button).to.have.className('LikeButton')
  })
})
