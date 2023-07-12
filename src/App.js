import { Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setResults, setSearchInfo } from './redux/slice/resultSlice';
import axios from 'axios';

import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
