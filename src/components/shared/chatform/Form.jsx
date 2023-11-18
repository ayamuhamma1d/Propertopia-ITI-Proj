import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  const [state, setState] = useState({
    name: '',
    need: '',
    phone: '',
  });

  useEffect(() => {
    const { steps } = props;
    const { name, need, phone } = steps;

    setState({ ...state, name, need, phone });
  }, [props, state]);

  const { name, need, phone } = state;
  return (
    <div style={{ width: '100%' }}>
      <h3>your information</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name.value}</td>
          </tr>
          <tr>
            <td>service</td>
            <td>{need.value}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{phone.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;
