import { Outlet } from 'react-router-dom';
import { Header, Footer, Login, Signup, PostCard, RTE, Select } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        {/* <Header /> */}
        {/* <main>
          <Outlet />
        </main> */}
        {/* <Footer /> */}
        <Select options={['active', 'inactive']} label="Status" className="mb-4" />
      </div>
    </div>
  );
};

export default App;
