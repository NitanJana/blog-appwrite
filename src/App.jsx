import { Outlet } from 'react-router-dom';
import { Header, Footer, Login, Signup, PostCard, RTE } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        {/* <RTE /> */}
        {/* <PostCard title={'Test'} /> */}
        <Signup />
        {/* <Login /> */}
        {/* <Header /> */}
        {/* <main>
          <Outlet />
        </main> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
