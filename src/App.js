import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './page/entry/entry.page';

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        build dashboard here
     </DefaultLayout>

    </div>
  );
}

export default App;
