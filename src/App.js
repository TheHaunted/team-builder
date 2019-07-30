import React, {useState} from 'react';
import './App.css';
import Form from './components/Form.js';
import Card from './components/Card.js';

function App() {
  const [people, setPeople] = useState([
    {name: 'Kevin', email: '123@123.com', role: 'Student'},
    {name: 'Amir', email: '456@123.com', role: 'TL'}
  ]);
  return (
    <div className="App">
      <Form setPeople={setPeople} />
      {people.map(person => <Card person={person} />)}
    </div>
  );
}

export default App;
