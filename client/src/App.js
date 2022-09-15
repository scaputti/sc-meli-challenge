import Home from './pages/home';
import Detail from './pages/detail';
import Search from './pages/search';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/items" exact element={<Search />} />
          <Route path="/items/:id" exact element={<Detail />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

