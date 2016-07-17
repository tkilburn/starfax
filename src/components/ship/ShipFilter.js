import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shipBlacklistFilterActions from '../../actions/shipBlacklistFilterActions';
import * as consts from '../../resources/constants.js';

class ShipFilter extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          shipBlacklistFilters: [],//Object.assign({}, props.shipBlacklistFilters),
          isManyPilotsChecked: props.shipBlacklistFilters.indexOf(consts.ONE_PILOT) > -1,
          isStellarAccidentsChecked: props.shipBlacklistFilters.indexOf(consts.STELLAR_ACCIDENTS) > -1,
          isPirateChecked:  props.shipBlacklistFilters.indexOf(consts.PIRATE_HISTORY) > -1,
          errors: {},
          saving: false
        };

        this.onManyPilotsChange = this.onManyPilotsChange.bind(this);
        this.onStellarAccidentsChange = this.onStellarAccidentsChange.bind(this);
        this.onPirateChange = this.onPirateChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
    //   if (this.props.course.id != nextProps.course.id) {
        // Necessary to populate form when existing course is loaded directly.
        // this.setState({shipBlacklistFilters: Object.assign({}, nextProps.shipBlacklistFilters)});
        this.setState({
          shipBlacklistFilters: nextProps.shipBlacklistFilters,
          isManyPilotsChecked: nextProps.shipBlacklistFilters.indexOf(consts.ONE_PILOT) > -1,
          isStellarAccidentsChecked: nextProps.shipBlacklistFilters.indexOf(consts.STELLAR_ACCIDENTS) > -1,
          isPirateChecked:  nextProps.shipBlacklistFilters.indexOf(consts.PIRATE_HISTORY) > -1
        });
    //   }
    }

    onManyPilotsChange(event) {
        if(event.target.checked) {
            this.props.dispatch(shipBlacklistFilterActions.addShipBlacklistFilter(consts.ONE_PILOT));
        } else {
            this.props.dispatch(shipBlacklistFilterActions.removeShipBlacklistFilter(consts.ONE_PILOT));
        }
    }

    onStellarAccidentsChange(event) {
        if(event.target.checked) {
            this.props.dispatch(shipBlacklistFilterActions.addShipBlacklistFilter(consts.STELLAR_ACCIDENTS));
        } else {
            this.props.dispatch(shipBlacklistFilterActions.removeShipBlacklistFilter(consts.STELLAR_ACCIDENTS));
        }
    }

    onPirateChange(event) {
        if(event.target.checked) {
            this.props.dispatch(shipBlacklistFilterActions.addShipBlacklistFilter(consts.PIRATE_HISTORY));
        } else {
            this.props.dispatch(shipBlacklistFilterActions.removeShipBlacklistFilter(consts.PIRATE_HISTORY));
        }
    }

    render() {
        return (
            <div>
                <img className="img-responsive starfox" src={require('../../img/starfax.png')} alt />
                <p className="lead text-center">Show Me Ships With</p>
                <hr />
                <div className="filter-item-container">
                    <span className="content-middle">
                      <label><input type="checkbox" checked={this.state.isManyPilotsChecked} onChange={this.onManyPilotsChange} defaultValue /><span className="icon-one"></span>Only One Pilot</label>
                    </span>
                </div>
                <div className="filter-item-container">
                    <span className="content-middle">
                      <label><input type="checkbox" checked={this.state.isStellarAccidentsChecked} onChange={this.onStellarAccidentsChange} defaultValue /><span className="icon-accident"></span>No Stellar Accidents</label>
                    </span>
                </div>
                <div className="filter-item-container">
                    <span className="content-middle">
                      <label>
                          <input type="checkbox" checked={this.state.isPirateChecked} onChange={this.onPirateChange} defaultValue />
                          <span className="icon-pirate"></span>No Pirate history
                      </label>
                    </span>
                </div>
                <hr />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
  return {
    shipBlacklistFilters: state.shipBlacklistFilters
  };
}

export default connect(mapStateToProps)(ShipFilter);
