import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import { BrandLogo, SignupBtn, LoginBtn, LogoutBtn } from '../index';

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  
  const menuItems = [
    {
      name: 'Home',
      path: '/',
      active: true,
    },
    {
      name: 'Posts',
      path: '/posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      path: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className="relative w-full bg-white px-12 py-4 ">
      <nav className="mx-auto flex w-full items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-x-2  space-x-2">
          <BrandLogo width="60px" />
          <span className="text-xl font-bold">Blog</span>
        </div>
        <div className="hidden grow items-start lg:flex ">
          <ul className="inline-flex w-full justify-center gap-x-12 py-6">
            {menuItems
              .filter((item) => item.active)
              .map((item) => (
                <li
                  key={item.name}
                  className="inline-flex cursor-pointer items-center text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  <a href={item.path} className="p-1">
                    {item.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          {!authStatus && <SignupBtn />}
          {!authStatus && <LoginBtn />}
          {authStatus && <LogoutBtn />}
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <BrandLogo />
                    </span>
                    <span className="font-bold">Blog</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems
                      .filter((item) => item.active)
                      .map((item) => (
                        <a
                          key={item.name}
                          href={item.path}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                          <span>
                            <ChevronRight className="ml-3 h-4 w-4" />
                          </span>
                        </a>
                      ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  {!authStatus && <SignupBtn className="w-full" />}
                  {!authStatus && <LoginBtn className="w-full" />}
                  {authStatus && <LogoutBtn className="w-full" />}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
