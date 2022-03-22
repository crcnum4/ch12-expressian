import React from 'react';

const Container = (props) => {
  return (
    <div style={{...defaultStyle, ...props.style}}>
      {props.children}
    </div>
  )
}

const defaultStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100%',
}

export default Container;