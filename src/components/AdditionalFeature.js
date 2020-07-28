import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.element)} className="button">Add</button>
      {props.element.name} (+{props.element.price})
    </li>
  );
};



export default connect(
  null,
  {addFeature}
)(AdditionalFeature);
