import { Link } from "react-router-dom";
import { BASE_URL } from "../api";
import FormatDate from "../FormatDate";

{}

const HomeCard = ({post}) => {
  const postBody = post.content.split(" ").slice(0,30).join(" ")
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <a href="#!">
          <img
            className="card-img-top"
            src={ post.thumbnail ? `${BASE_URL}${post.thumbnail}`: "https://dummyimage.com/700x350/dee2e6/6c757d.jpg"}
            alt="..."
          />
        </a>
        <div className="card-body">
          <div className="small text-muted">{FormatDate(post.created_at)}</div>
          <h2 className="card-title h4">{post.title}</h2>
          <p className="card-text">
            {postBody}
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
