import React, {Component} from 'react'
import {MessageType} from '../constants/ASRTypes'

export function makeKeywordsBold(string, keywords) {
  let text = string
  keywords.forEach((w) => {
    text = text.replace(w, `<b>${w}</b>`)
  })

  return text
}

export default class Message extends Component {
  static propTypes = {
    message: MessageType.isRequired,
  }

  render() {
    const {spotted, transcript} = this.props.message

    const highlightedText = makeKeywordsBold(transcript.utterance, spotted)

    return (
        <li className="message">
          <div className="view">
            <label dangerouslySetInnerHTML={{__html: highlightedText}}>
            </label>
          </div>
        </li>
    )
  }
}