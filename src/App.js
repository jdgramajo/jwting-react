import React from 'react';
import { useSelector } from 'react-redux';

import LoginForm from './components/LoginForm'

function App() {
  const { userInfo } = useSelector((store) => store);
  const loginForm = userInfo ? <LoginForm /> : <></>;

  const style = { marginTop: "100px" };

  return (
    <div className="container" style={style}>
      {loginForm}
    </div>
  );
}

export default App;
