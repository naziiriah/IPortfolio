import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from "./components/Scroll";
import DetailPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import InnerPage from './pages/InnerPage';
// styles
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/details' element={<DetailPage/>}/>
            <Route path='/innerPage' element={<InnerPage/>}/>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
