import React from 'react';
import PropTypes from 'prop-types';
import PageTransition from 'gatsby-plugin-page-transitions';

const Transition = ({ children }) => {
  return (
    <PageTransition
      defaultStyle={{
        transition: '500ms',
        transitionProperty: 'opacity',
        opacity: '0',
        width: '100%',
      }}
      transitionStyles={{
        entering: {
          opacity: 1,
        },
        entered: {
          opacity: '1',
        },
        exiting: {
          opacity: '0',
        },
      }}
      transitionTime={500}
    >
      {children}
    </PageTransition>
  );
};

Transition.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Transition;
