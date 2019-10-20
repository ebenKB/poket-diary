import React from 'react';

import Content from './components/ContentPane';
import ContactWrapper from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Content>
       <div>
         <ContactWrapper />
       </div>
      </Content>
    </div>
  );
}

export default App;
