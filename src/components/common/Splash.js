import React from 'react';
import PropTypes from 'prop-types';

const Splash = (props) => {
  return (
    <div style={{
      ...style, 
      ...props.style, 
      backgroundImage: `url(${props.image})`
    }}>
      {props.children}
    </div>
  )
}

const style = {
  backgroundSize: "cover",
  backgroundPosition: 'center',
  height: "80vh",
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  zIndex: 0,
}

Splash.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default Splash;