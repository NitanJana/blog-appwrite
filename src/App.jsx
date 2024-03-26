import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
