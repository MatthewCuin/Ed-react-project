import React, { createContext, useState } from 'react';
import Dashboard from './components/Dashboard';

export const TextContext = createContext();
TextContext.displayName = 'TextContext';

const App = () => { {
  const [text, setText] = useState('');

  return (
      <>
      <TextContext.Provider value={text}>
        <div className="p-8 md:container justify-center">
          <label htmlFor="text">
            Text Here:
          <br/>
          <textarea
            id="text"
            name="text"
            rows="10"
            cols="100"
            onChange={e => setText(e.target.value)}
          >
          </textarea>
          </label>
          <Dashboard />
        </div>
      </TextContext.Provider>
    </>
  )
}}

export default App;