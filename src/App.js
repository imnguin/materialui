import React from 'react';
import Router from './routers';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { useScrollListener } from './assets/js/scroll.js';
const App = () => {
  useScrollListener();
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Router />
    </React.Suspense>
  );
};

export default App;
