import './index.css'

const BannerDetails = props => {
  const {eachBanner} = props
  const {headerText, description, className} = eachBanner
  return (
    <li className={`${className} banner-card-items`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button" type="button">
          show more
        </button>
      </div>
    </li>
  )
}

export default BannerDetails
