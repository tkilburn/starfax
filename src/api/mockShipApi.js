import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const ships = [
  {
    id: 'xwing',
    shipName: 'X-Wing',
    shipPrice: '2,500,000',
    shipDescription: 'This is X-Wing barely made it out of the Battle of Yavin.  It took a beating, but she still has life left in her.',
    img: 'xwing',
    tags: ['stellaraccidents']
  },
  {
    id: 'ywing',
    shipName: 'Y-Wing',
    shipPrice: '3,500,000',
    shipDescription: 'This is a Y-Wing, not as cool as a X-Wing, but it has a clean service history.',
    img: 'ywing',
    tags: ['onepilot']
  },
  {
    id: 'millenniumfalcon',
    shipName: 'Millennium Falcon',
    shipPrice: '33,500,000',
    shipDescription: 'A good ship, but looks to have a shady history of smuggling, it was won in a card game after all...',
    img: 'millenniumfalcon',
    tags: ['piratehistory']
  },
  {
    id: 'viper2',
    shipName: 'Viper Mk II',
    shipPrice: '2,800,000',
    shipDescription: 'Starbuck managed to bring this on back in one piece.',
    img: 'viper2',
    tags: ['onepilot','stellaraccidents']
  },
  {
    id: 'viper7',
    shipName: 'Viper Mk VII',
    shipPrice: '4,700,000',
    shipDescription: 'A good ship, just be careful of the security patch.',
    img: 'viper7',
    tags: ['onepilot']
  },
  {
    id: 'arwing',
    shipName: 'Arwing',
    shipPrice: '4,800,000',
    shipDescription: 'Features a G Diffuser System!',
    img: 'arwing',
    tags: ['onepilot']
  },
  {
    id: 'wolfen',
    shipName: 'Wolfen',
    shipPrice: '4,200,000',
    shipDescription: 'Ship was owned by the evil Star Wolf!',
    img: 'wolfen',
    tags: ['onepilot','piratehistory']
  },
  {
    id: 'normandy',
    shipName: 'SSV Normandy',
    shipPrice: '56,000,000',
    shipDescription: 'A prototype "deep scout" frigate.',
    img: 'normandy',
    tags: ['']
  }
];

class ShipApi {
  static getAllShips() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], ships));
      }, delay);
    });
  }

    static saveShip(ship) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {

          if (ship.id) {
            const existingShipIndex = ships.findIndex(a => a.id == ship.id);
            ships.splice(existingShipIndex, 1, ship);
          }

          resolve(Object.assign({}, ship));
        }, delay);
      });
    }
}

export default ShipApi;
