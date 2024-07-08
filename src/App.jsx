// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopPage from '../../shop/ShopPage';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100">
        <Routes>
          <Route path="/" element={<ShopPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
