import React from 'react';
import ShipTile from './ShipTile';

const ShipList = ({ships}) => {
    return (
        <div className="row">
            {ships.map(ship =>
                    <ShipTile key={ship.id} ship={ship}/>
            )}
        </div>
    );
};

export default ShipList;
