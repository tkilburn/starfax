import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shipActions from '../../actions/courseActions';
import * as consts from '../../resources/constants';
// import CourseList from './CourseList';
import ShipFilter from './ShipFilter';
import ShipList from './ShipList';
import {browserHistory} from 'react-router';

class ShipPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddShipPage = this.redirectToAddShipPage.bind(this);
  }
  //
  // courseRow(course, index) {
  //   return <div key={index}>{course.title}</div>;
  // }
  //
  redirectToAddShipPage() {
    browserHistory.push('/ship');
  }
  render() {
    const {shipBlacklistFilters} = this.props;
    const {ships} = this.props;

    return (
        <div className="row">
            <br/>
            <div className="col-sm-3 filter-widget">
                <ShipFilter shipBlacklistFilters={shipBlacklistFilters}/>
            </div>

            <div className="col-sm-9">
                <ShipList ships={ships}/>
            </div>
        </div>
    );
  }
}

ShipPage.propTypes = {
  ships: PropTypes.array.isRequired,
  shipBlacklistFilters: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function filterShips(ships, filters) {
    var localFilters = filters.slice(0);
    var filteredShips = ships.slice(0);

    //Filter to Show One Pilots
    if(localFilters.indexOf(consts.ONE_PILOT) > - 1){
        filteredShips = filteredShips.filter(item => item.tags.indexOf(consts.ONE_PILOT) > - 1);
        localFilters = localFilters.filter(item => item.indexOf(consts.ONE_PILOT) === - 1);
    }
    console.log(filteredShips);
    console.log(localFilters);

    //Filter out bad items
    filteredShips = filteredShips.filter(item =>
        item.tags.filter(item2 =>
            localFilters.indexOf(item2) > -1
        ).length === 0
    );


    return filteredShips;
}

function mapStateToProps(state, ownProps) {
  return {
    ships: filterShips(state.ships, state.shipBlacklistFilters),
    shipBlacklistFilters: state.shipBlacklistFilters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shipActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipPage);
