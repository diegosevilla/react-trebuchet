import React, { PropTypes } from 'react';

import BottlesListItem from './BottlesListItem';
import BottlesListAdd from './BottlesListAdd';


const BottlesList = (props) => {
  const onDelete = function (id) {
    props.actions.deleteBottle(id);
  };

  const onAdd = function (bottle) {
    props.actions.addBottle(bottle);
  };

  const onEdit = function (id, bottle) {
    props.actions.editBottle(id, bottle);
  };

  var { bottles } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Type</th>
          <th>Country</th>
          <th>Contents cl</th>
          <th>Alcohol %</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {bottles.length > 0 ?
          bottles.map((bottle, i) =>
            <BottlesListItem key={i} bottle={bottle} onDelete={onDelete} onEdit={onEdit} />
          )
          :
          <tr><td colSpan="8">Nothing here.</td></tr>
        }
      </tbody>
      <tfoot>
        <tr><td colSpan="8">
          <BottlesListAdd onAdd={onAdd} />
        </td></tr>
      </tfoot>
    </table>
  );
};

BottlesList.propTypes = {
  actions: PropTypes.object.isRequired,
  bottles: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default BottlesList;
