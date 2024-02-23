import './App.css';
import Card from './component/Card';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Slider from './component/Slider';



function App() {
  return (
    <>
     <Navbar/>
     <Slider/>
     <Card/>
     <Footer/>
     </>
  );
}






// function App() {
//   return (
//     <div className="App">
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
//   );
// }

 export default App;
