import React from 'react';
import { Provider } from 'react-redux';
import {GlobaleStyled} from './style.js';
import { GlobalIcon } from './statics/icon/iconfont'
import Header from './common/header';
import store from './store';


function App() {
  return (
    <>
      <GlobaleStyled/>
      <GlobalIcon />
      <Provider
        store={store}
      >
        <Header />
      </Provider>
    </>
  );
}

export default App;
