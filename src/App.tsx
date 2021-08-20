import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

function App():JSX.Element {
  return (
    <div className="App">
      <Header />
      <Menu />
      <main />
      <Footer />
    </div>
  );
}

export default App;
