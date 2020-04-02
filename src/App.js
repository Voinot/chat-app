import React from 'react'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Contact avatar='https://randomuser.me/api/portraits/men/1.jpg'
        name='Liam Douglas'
        online />
      <Contact avatar='https://randomuser.me/api/portraits/men/3.jpg'
        name='Marvin Dean'
        online/> 
      <Contact avatar='https://randomuser.me/api/portraits/men/79.jpg'
        name='Nathan Gordon'
        online />
    </div>
  );
}

export default App;
