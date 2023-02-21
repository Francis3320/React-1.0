import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';
import Info from './components/Info';



function App() {
  return (
    <div className='App'>
      <div className='inner'>
          <Info/>
          <About/>
          <Interest/>
          <Footer/>
      </div>

    </div>
  );
}

export default App;


// div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
