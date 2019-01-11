import React from 'react';
import Menu from './components/Menu';

const App = ({ children }) => (
  <div>
    <Menu />
    {children}
  </div>
);

export default App;
