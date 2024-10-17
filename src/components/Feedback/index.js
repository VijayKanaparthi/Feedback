// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  callRender = () => {
    this.setState(preState => ({isClicked: !preState.isClicked}))
  }

  beforeClick = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="card">
        <div>
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
        </div>
        <ul className="images-container">
          {emojis.map(each => (
            <li key={each.id} onClick={this.callRender}>
              <img src={each.imageUrl} className="image" alt={each.name} />
              <p>{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  afterClick = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} className="emoji" alt = "love emoji"/>
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-message">
          We’ll use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state

    return (
      <div className="background">
        <div className="card">
          {isClicked ? this.beforeClick() : this.afterClick()}
        </div>
      </div>
    )
  }
}
export default Feedback
