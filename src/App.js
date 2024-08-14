import React from 'react';
import Router from './routers';

const App = () => {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Router />
    </React.Suspense>
  );
};

export default App;
