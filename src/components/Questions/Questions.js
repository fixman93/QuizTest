import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Responsive } from 'semantic-ui-react'
import { Button, Header, Image, Modal, Container } from 'semantic-ui-react'
import QuestionItem from './QuestionItem'
import * as styles from './Questions.less'


export default class Questions extends Component {

  constructor(props) {
    super(props)
    this.state = {
        mainModal: true,
        secondModal: false
      }
      this.handleSecondModal = this.handleSecondModal.bind(this)
      this.hideSecondModal = this.hideSecondModal.bind(this)
  }

  handleSecondModal() {
    this.setState({
      mainModal: false,
      secondModal: true
    })
  }

  hideSecondModal() {
    this.setState({
      secondModal: false
    })
  }


  render() {

    return (
      <Container>
        <QuestionItem  />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <Modal className={styles.modal} open={this.state.mainModal}>
          <Modal.Content>
            <Modal.Description>
              <Header>CXL Institute copy test</Header>
              <p>Welcome message to the private testing pool by the client.</p>
              <Button onClick={this.handleSecondModal}>Start testing</Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <Modal className={styles.modal} open={this.state.secondModal}>
          <Modal.Content>
            <Modal.Description>
              <p>Rate the blocks of text according to how you perceive the content.</p>
              <Button onClick={this.hideSecondModal}>Start testing</Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Container>
    )
  }
}
