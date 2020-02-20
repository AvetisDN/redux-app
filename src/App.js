import React from 'react';
import List from './components/List';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h2>Articles</h2>
      <List/>
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  );
}

export default App;
