import React, { Component } from 'react'
import { string } from 'prop-types';

export interface AddTodoFormState {
  text: string;
}

export interface AddTodoFormProps {
  handleSubmit: (text: string) => void;
}

export class AddTodoForm extends Component<AddTodoFormProps, AddTodoFormState> {
  public state: AddTodoFormState = {
    text: ''
  }

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.submit} className="mb-4">
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter your to do item here."
              value={text}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </form>
    )
  }

  private submit = (event: React.FormEvent) => {
    event.preventDefault();

    this.props.handleSubmit(this.state.text);

    this.setState({ ...this.state, text: '' })
  }

  private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, text: event.currentTarget.value })
  }
}
