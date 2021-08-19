import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CartSVG from "../../svg/shopping-cart";
import ProfileSVG from "../../svg/profile-avatar";
import LoginModal from "./LoginModal";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileView((prevState) => !prevState);
  };

  return (
    <>
      <nav className="bg-white shadow-lg py-1">
        {/* <!-- Horizontal navbar --> */}
        <div className={`${mobileView && " mb-6"} py-2 max-w-6xl mx-auto px-4`}>
          <div className="flex justify-between">
            <div className="flex">
              <img
                src="https://i.ibb.co/kMQVNLj/Logo-1-2-1.png"
                alt="apuru-poth-logo"
                height="80"
                width="80"
              />
              <div className="flex items-center py-4 px-6 mr-12">
                <NavLink
                  className="font-thinKidFont font-semibold text-4xl md:text-2xl sm:text-xl"
                  to="/"
                >
                  APURU POTH
                </NavLink>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="sm:hidden md:hidden lg:flex items-center text-lg space-x-5">
                <NavLink
                  className="py-4 px-2 border-b-4 border-lightSilver font-semibold "
                  to="/books"
                  activeStyle={{
                    borderColor: "orange",
                  }}
                >
                  Bookshelf
                </NavLink>
                <NavLink
                  className="py-4 px-2 border-b-4 border-lightSilver font-semibold "
                  to="/newsletter"
                  activeStyle={{
                    borderColor: "orange",
                  }}
                >
                  Newsletter
                </NavLink>
                <NavLink
                  className="py-4 px-2 border-b-4 border-lightSilver font-semibold "
                  to="/Support"
                  activeStyle={{
                    borderColor: "orange",
                  }}
                >
                  Support
                </NavLink>
              </div>
            </div>

            {/* <!-- Secondary Navbar items --> */}
            <div className="sm:hidden flex items-center space-x-3">
              <NavLink
                className="py-2 px-2 border-b-4 border-transparent"
                to="/cart"
                activeStyle={{
                  borderColor: "orange",
                }}
              >
                <div className="w-10">
                  <CartSVG />
                </div>
              </NavLink>
              <NavLink
                className="py-4 px-2 border-b-4 border-transparent"
                to="/customer"
                activeStyle={{
                  borderColor: "orange",
                }}
              >
                <ProfileSVG width={40} height={40} />
              </NavLink>
              <NavLink
                className="py-1 px-2 rounded bg-gamboge hover:bg-halloweenOrange hover:text-white font-semibold "
                to="/registration"
              >
                Signup
              </NavLink>
              <button
                className="py-1 px-2 rounded bg-gamboge  hover:bg-halloweenOrange hover:text-white font-semibold "
                onClick={() => {
                  setLoginModalOpen(true);
                }}
              >
                <p>Sign in</p>
              </button>
              <button
                className="py-1 px-2 rounded bg-lightSilver  hover:bg-black hover:text-white font-semibold "
                onClick={() => {
                  alert("LOG OUT");
                }}
              >
                Logout
              </button>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="lg:hidden flex items-center">
              <button
                class="outline-none mobile-menu-button"
                onClick={toggleMobileMenu}
              >
                <svg
                  class="w-9 h-9 text-lightSilver"
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Mobile menu --> */}
        <div className={`${!mobileView && "hidden"} lg:hidden`}>
          <ul onClick={toggleMobileMenu}>
            <NavLink to="/books">
              <li className="block text-lg px-2 py-4 pl-4 hover:bg-halloweenOrange transition duration-300">
                Bookshelf
              </li>
            </NavLink>
            <NavLink to="/newsletter">
              <li className="block text-lg px-2 py-4 pl-4  hover:bg-halloweenOrange transition duration-300">
                Newsletter
              </li>
            </NavLink>
            <NavLink to="/support">
              <li className="block text-lg px-2 py-4 pl-4  hover:bg-halloweenOrange transition duration-300">
                Support
              </li>
            </NavLink>
            <NavLink to="/registration">
              <li className="block text-lg px-2 py-4 pl-4  hover:bg-halloweenOrange transition duration-300">
                Signup
              </li>
            </NavLink>
            <li className="block text-lg px-2 py-4 pl-4  hover:bg-halloweenOrange transition duration-300">
              Sign in
            </li>
          </ul>
        </div>
      </nav>

      {loginModalOpen && (
        <LoginModal
          modalVisible={loginModalOpen}
          setModalVisible={setLoginModalOpen}
        />
      )}
    </>
  );
};

export default Header;
