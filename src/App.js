import React from 'react'
import { Segment, Container } from 'semantic-ui-react'


import { Navbar, Questions } from 'components'
import 'styling/semantic.less'

const leftItems = [
  {
    content: 'Rate each block of text to finish the task',
    key: 'docs',
  },
]
const rightItems = [
  {
    content: '1',
    key: '1',
  },
  {
    content: '2',
    key: '2',
  },
  {
    content: '3',
    key: '3',
  },
  {
    content: '4',
    key: '4',
  },
  {
    content: 'Complete test',
    key: 'last',
  },
]

const App = () => (
  <Segment>
    <Navbar leftItems={leftItems} rightItems={rightItems} />
    <Questions />

  </Segment>
)

export default App
