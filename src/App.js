import React from 'react'
import reviews from './data'
import Review from './Review'


function App() {
  return (
    <main>
    <section className="container">
      <div className="title" >
          <h2> Nuestras review </h2>
          <div className='underline' ></div>
      </div>
       
       < Review/>
    </section>
    </main>
  );
}

export default App;
