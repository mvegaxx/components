import { CardBase } from "./index.styles"

export const Card = (): JSX.Element => (

  <CardBase>
    <a className="card1" href="#">
      <h3>This is option 1</h3>
      <p className="small">Card description with lots of great facts and interesting details.</p>
      <div className="go-corner" >
        <div className="go-arrow">
          →
        </div>
      </div>
    </a>
  </CardBase>
)

export default Card
