import React from 'react';
import Review from './Review';



function App() {


  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Check our reviews</h2>
          <div className="underline" style={{width: '10rem'}}></div>
        </div>
        <Review/>
      </section>
    </main>
  )



}

export default App;
