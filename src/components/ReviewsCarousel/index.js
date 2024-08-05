import {Component} from 'react'
import Carousel from '../Carousel'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewId: 1}

  onClickLeftArrow = () => {
    this.setState(prevState => ({
      reviewId: prevState.reviewId === 1 ? 1 : prevState.reviewId - 1,
    }))
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    this.setState(prevState => ({
      reviewId:
        prevState.reviewId === reviewsList.length
          ? reviewsList.length
          : prevState.reviewId + 1,
    }))
  }

  render() {
    const {reviewId} = this.state
    const {reviewsList} = this.props
    const filteredData = reviewsList.find(each => each.id === reviewId)

    return (
      <div className="bg-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="review-container">
          <Carousel
            onClickLeftArrow={this.onClickLeftArrow}
            onClickRightArrow={this.onClickRightArrow}
            data={filteredData}
          />
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
