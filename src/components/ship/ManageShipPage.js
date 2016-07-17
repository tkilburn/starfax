import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shipActions from '../../actions/shipActions';
import ShipForm from './ShipForm';
import toastr from 'toastr';

export class ManageShipPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ship: Object.assign({}, props.ship),
      errors: {},
      saving: false
    };

    this.updateShipState = this.updateShipState.bind(this);
    this.saveShip = this.saveShip.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ship.id != nextProps.ship.id) {
      // Necessary to populate form when existing ship is loaded directly.
      this.setState({ship: Object.assign({}, nextProps.ship)});
    }
  }

  updateShipState(event) {
    const field = event.target.name;
    let ship = this.state.ship;
    ship[field] = event.target.value;
    return this.setState({ship: ship});
  }

  shipFormIsValid() {
    let formIsValid = true;
    let errors = {};

    // if (this.state.ship.title.length < 5) {
    //   errors.title = 'Title must be at least 5 characters.';
    //   formIsValid = false;
    // }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveShip(event) {
    event.preventDefault();

    if (!this.shipFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveShip(this.state.ship)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Ship saved');
    this.context.router.push('/ships');
  }

  render() {
    return (
        <div className="edit-ship-container">
            <ShipForm
                onChange={this.updateShipState}
                onSave={this.saveShip}
                ship={this.state.ship}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        </div>
    );
  }
}

ManageShipPage.propTypes = {
  ship: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageShipPage.contextTypes = {
  router: PropTypes.object
};

function getShipById(ships, id) {
  const ship = ships.filter(ship => ship.id == id);
  if (ship) return ship[0]; //since filter returns an array, have to grab the first.
  return null;
}


function mapStateToProps(state, ownProps) {
  const shipId = ownProps.params.id; // from the path `/ship/:id`

  let ship = {id: '', shipName: '', shipDescription: '', shipPrice: ''};

  if (shipId && state.ships.length > 0) {
    ship = getShipById(state.ships, shipId);
  }

  return {
    ship: ship
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shipActions, dispatch)
  };
}

// export default ManageShipPage;
export default connect(mapStateToProps, mapDispatchToProps)(ManageShipPage);
