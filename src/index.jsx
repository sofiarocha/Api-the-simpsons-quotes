import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const App = () => {
  return (
    <div>
      Hello World
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
