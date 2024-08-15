import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import styles from "./App.module.css"


function App() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <h1>Conteúdo...</h1>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
