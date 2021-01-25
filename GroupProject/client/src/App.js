import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import LoginBar from './components/LoginBar';

const logStlye = {
  justifyContent: "center",
   alignItems: "center"
}

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Header /> 
      <div style={logStlye}>
      <LoginBar/>
      </div>
      <Footer />
    </div>
  );
}



export default App;
