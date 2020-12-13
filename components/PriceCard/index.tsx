import { CardBase } from "./index.styles"

export const PriceCard = (): JSX.Element => (

  <CardBase>
    <div className="table">
      <h2 className="heading">
        house cleaning
  </h2>
      <div className="block">
        <p>kitchen and bedrooms
    <span className="price">$28/
      <sub>hour</sub>
          </span>
          <ul className="options">
            <li>wipe cabinets</li>
            <li>wipe tops</li>
            <li>dust tops of cabinets</li>
          </ul>
        </p>
      </div>
      <div className="block">
        <p>bathroom
    <span className="price">$29/
      <sub>hour</sub>
          </span>
          <ul className="options">
            <li>dust counters</li>
            <li>dust light</li>
            <li>wipe countertops</li>
          </ul>
        </p>
      </div>
      <div className="block">
        <p>living room
    <span className="price">$29/
      <sub>hour</sub>
          </span>
          <ul className="options">
            <li>make beds</li>
            <li>dust furniture</li>
            <li>dust mini-blinds</li>
          </ul>
        </p>
      </div>
      <button className="btn">
        <p>book your order now</p>
        <span className="fa fa-cart-plus" aria-hidden="true"></span>
      </button>
    </div>
  </CardBase>
)

export default PriceCard
