import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <Link to="/">
          <div>Logo</div>
        </Link>
        <div>
          <Link to="/event">EVENT</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
