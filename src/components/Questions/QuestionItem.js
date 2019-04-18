import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Form, Checkbox } from 'semantic-ui-react'

import * as styles from './QuestionItem.less'

class QuestionItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      textarea: '',
      danger: false,
      finishedQuestion: false,
      editMessage: false
    }
    this.submitAnswer = this.submitAnswer.bind(this)
  }

  handleChange = (e, { value }) => this.setState({ value })
  textareaChange =( e, { value }) => this.setState({ textarea: value })

  submitAnswer(e) {
    e.preventDefault()
    if (this.state.textarea === '') {
      this.setState({danger : true})
    }
    else {
      this.setState({finishedQuestion : true})
    }

  }
  render() {
    if (this.state.value !== '') {

    }
    return (
      <div className={this.state.finishedQuestion ? styles.QuestionItem + ' ' + styles.Done : styles.QuestionItem }>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus accumsan dui, eget tempor est viverra id. In hac habitasse platea dictumst. Proin dictum sem ac condimentum vulputate. In at finibus lacus. Nunc faucibus nisl vitae sem feugiat varius. Maecenas faucibus magna nec massa elementum, ut tincidunt elit dignissim. Nulla vitae nisl non felis aliquet bibendum. Sed mattis nec massa viverra vehicula. Donec vitae arcu feugiat, suscipit metus sit amet, rutrum ex. Duis condimentum congue quam, nec volutpat metus feugiat ornare. Vestibulum non vulputate leo, at faucibus neque. Duis blandit neque et egestas blandit.</p>
        <p>Sed consequat magna sed urna scelerisque, in consectetur libero facilisis. Sed augue nisi, consectetur non nunc eget, ultricies hendrerit ante. </p>
        <div className={this.state.value !== '' ? styles.hidden : styles.visible}>
        <Form>
          <Form.Field>
            Selected value: <b>{this.state.value}</b>
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Unclear'
              name='checkboxRadioGroup'
              value='unclear'
              checked={this.state.value === 'unclear'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='interesting'
              name='checkboxRadioGroup'
              value='interesting'
              checked={this.state.value === 'interesting'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Boring'
              name='checkboxRadioGroup'
              value='boring'
              checked={this.state.value === 'boring'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
        </div>
        <div className={this.state.value !== '' ? styles.visible : styles.hidden}>
        <Form>
          <span>Unclear: </span>
          <Form.Field>
            Selected value: <b>{this.state.value}</b>
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Jargon'
              name='checkboxRadioGroup'
              value='jargon'
              checked={this.state.value === 'jargon'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Too long'
              name='checkboxRadioGroup'
              value='TooLong'
              checked={this.state.value === 'TooLong'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="Don't get it"
              name='checkboxRadioGroup'
              value='dont'
              checked={this.state.value === 'dont'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
        <div className={
          this.state.value === 'jargon' ||
          this.state.value === 'TooLong' ||
          this.state.value === 'dont' ?
          styles.visible : styles.hidden}>
            {this.state.danger ? <div>Please add message</div> : null}
            <Form.TextArea placeholder='Tell us more about you...' value={this.state.textarea} onChange={this.textareaChange} />
            <Button onClick={this.submitAnswer}>Continue</Button>
            <Button>Edit answers</Button>
        </div>
        <div className={this.state.finishedQuestion ? styles.Finished : styles.notFinished}>Edit answers</div>
        </div>
      </div>
    )
  }
}

QuestionItem.propTypes = {

}

export default QuestionItem
