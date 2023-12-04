import Navbar from './Components/Navbar.jsx'
import Pagecontent from './Components/Pagecontent.jsx';
import Footer from './Components/Footer'
//import PreviousMap from 'postcss/lib/previous-map.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <div className="App-body">
        <Pagecontent 
        kichwa = 'React 7 day bootcamp'
        name = 'Lavinia Mwirigi'
        />
        <Pagecontent
        kichwa = 'Tigania East M.P 2032'
        name = 'Hon. Brio Rigiih'
        />
        <Pagecontent 
        kichwa = 'React 7 day bootcamp'
        name = 'Lavinia Mwirigi'
        />
        <Pagecontent
        kichwa = 'Tigania East M.P 2032'
        name = 'Hon. Brio Rigiih'
        />
        <Pagecontent 
        kichwa = 'React 7 day bootcamp'
        name = 'Lavinia Mwirigi'
        />
        <Pagecontent
        kichwa = 'Tigania East M.P 2032'
        name = 'Hon. Brio Rigiih'
        />
        <Pagecontent 
        kichwa = 'React 7 day bootcamp'
        name = 'Lavinia Mwirigi'
        />
        <Pagecontent
        kichwa = 'Tigania East M.P 2032'
        name = 'Hon. Brio Rigiih'
        />
        <Pagecontent 
        kichwa = 'React 7 day bootcamp'
        name = 'Lavinia Mwirigi'
        />
        <Pagecontent
        kichwa = 'Tigania East M.P 2032'
        name = 'Hon. Brio Rigiih'
        />
 
        <Footer />   
      </div>
    </div>
  );
}

export default App;
