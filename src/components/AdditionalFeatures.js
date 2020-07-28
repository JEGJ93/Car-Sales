import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeaturesFromProp.length ? (
        <ol type="1">
          {props.additionalFeaturesFromProp.map(item => (
            <AdditionalFeature key={item.id} element={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeaturesFromProp: state.additionalFeatures
  };
};


export default connect(
  mapStateToProps,
  {}
)(AdditionalFeatures);


