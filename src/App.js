
import './App.css';
import  {Navbar}  from  './components/Navbar';
import  Footer  from  './components/Footer';
import  List  from  './components/List';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <List listName="Outstanding Items"/>
      </main>
      <Footer/>
    </div>
  );
}


