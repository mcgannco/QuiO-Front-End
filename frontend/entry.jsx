import React from 'react';
import ReactDOM from 'react-dom';

function Root() {
  return(
    <div>
      <p>Hello</p>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
