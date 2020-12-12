import { CardBase } from "./index.styles"

export const ProfileCard = (): JSX.Element => (

  <CardBase>
    <div className="card-wrapper">
      <div className="card">
        <div className="card-image">
          <img src="https://image.ibb.co/dUTfmJ/profile_img.jpg" alt="profile one" />
        </div>
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-dribbble" />
            </a>
          </li>
        </ul>
        <div className="details">
          <h2>John Smith
        <br />
            <span className="job-title">UI Developer</span>
          </h2>
        </div>
      </div>
    </div>
  </CardBase>
)

export default ProfileCard
