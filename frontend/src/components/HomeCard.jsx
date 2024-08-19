import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <a href="#!">
          <img
            className="card-img-top"
            src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
            alt="..."
          />
        </a>
        <div className="card-body">
          <div className="small text-muted">January 1, 2023</div>
          <h2 className="card-title h4">Post Title</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.
          </p>
          <div className="actionsBtnContainer d-flex justify-content-between">
            <Link className="btn btn-primary" to="/">
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
