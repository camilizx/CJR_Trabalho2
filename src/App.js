import { Cabecalho } from "./components/Cabecalho"
import { Menu } from "./components/Menu"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"

import './App.css';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
