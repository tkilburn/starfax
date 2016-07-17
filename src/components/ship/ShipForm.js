import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ShipForm = ({ship, onChange, onSave, saving, errors}) => {
  return (
    <form>
      <h1>Edit Ship</h1>
      <TextInput
        name="shipName"
        label="Ship Name"
        value={ship.shipName}
        onChange={onChange}
        error={errors.title}
        />
      <TextInput
        name="shipDescription"
        label="Ship Description"
        value={ship.shipDescription}
        onChange={onChange}
        error={errors.title}
        />
      <TextInput
        name="shipPrice"
        label="Ship Price"
        value={ship.shipPrice}
        onChange={onChange}
        error={errors.title}
        />

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave}/>
    </form>
  );
};
// shipPrice
// shipDescription
ShipForm.propTypes = {
  ship: React.PropTypes.object.isRequired,
  // allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default ShipForm;
