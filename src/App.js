import { Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
