import React, { useState } from 'react';

// {} and () => {} optional. empty array is fine
const AuthContext = React.createContext([{}, () => {}]); 

const AuthProvider = (props) => {
  const [auth, setAuth] = useState({token: null, profile: null});

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}