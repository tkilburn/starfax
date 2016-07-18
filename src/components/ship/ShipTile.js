import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import * as consts from '../../resources/constants';
const divStyle = { maxHeight: '200px' };

const ShipTile = ({ship, onChange, onSave, saving, errors}) => {

    function onePilot(tag) {
        switch (tag) {
            case consts.STELLAR_ACCIDENTS:
                return consts.ICON_ACCIDENT;
            case consts.PIRATE_HISTORY:
                return consts.ICON_PIRATE;
        }
        return '';
    }

    function tagToIcon(tag) {
        switch (tag) {
            case consts.STELLAR_ACCIDENTS:
                return consts.ICON_ACCIDENT;
            case consts.PIRATE_HISTORY:
                return consts.ICON_PIRATE;
            case consts.ONE_PILOT:
                return consts.ICON_ONE_PILOT;
        }
        return '';
    }

    return (
        <div className="col-sm-6 col-lg-6 col-md-6">
           <div className="thumbnail">
             <div className = "tile-image-container">
               <img style={divStyle} className="tile-image" src={require('../../img/' + ship.img + '.jpg')} alt = {ship.id} />
             </div>
             <div className="caption">
               <h4 className="pull-right">${ship.shipPrice}</h4>
               <h4>
                   <Link to={'/ship/' + ship.id}>{ship.shipName}</Link>
               </h4>
               <p>{ship.shipDescription}</p>
             </div>
            <div className="tag-section">
                {ship.tags.map(tag =>
                  <span key={ship.id + '_' + tag} className={tagToIcon(tag)}></span>
                )}
            </div>

           </div>
         </div>
      );
    };

    ShipTile.propTypes = {
      ship: PropTypes.object.isRequired
    };

    export default ShipTile;
