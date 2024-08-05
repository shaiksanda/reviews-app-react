import './index.css'

const Carousel = props => {
  const {data, onClickLeftArrow, onClickRightArrow} = props
  const {imgUrl, username, companyName, description, id} = data

  const handleLeftClick = () => {
    onClickLeftArrow()
  }

  const handleRightClick = () => {
    onClickRightArrow()
  }
  console.log(id)

  return (
    <div className="carousel-container">
      <img src={imgUrl} alt={username} className="image" />
      <p className="heading">{username}</p>
      <div className="images-container">
        <button type="button" onClick={handleLeftClick} data-testid="leftArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
            alt="left arrow"
            className="icon"
          />
        </button>
        <button
          type="button"
          onClick={handleRightClick}
          data-testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
            alt="right arrow"
            className="icon"
          />
        </button>
      </div>
      <p className="company">{companyName}</p>
      <p className="content">{description}</p>
    </div>
  )
}

export default Carousel
