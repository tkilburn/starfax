import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
     <div>
         <img className="img-responsive starfox" src={require('../../img/header.png')} alt />
        <nav>
            <IndexLink to="/" activeClassName="active">About</IndexLink>
            {" | "}
            <Link to="/ships" activeClassName="active">Ships</Link>
            {loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
    </div>
  );
};
//<Link to="/about" activeClassName="active">About</Link>
//<Link to="/courses" activeClassName="active">Courses</Link>

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
