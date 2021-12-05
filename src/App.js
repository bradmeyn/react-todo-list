
import './App.css';
import  {Navbar}  from  './components/Navbar';
import  List  from  './components/List';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>

        <List listName="Items"/>
        
      </main>
    </div>
  );
}

export default App;
