import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <div className='header'>
          <div className='header_in'>
            <div className='trigger_logo'>
              <div className='trigger'><span></span></div>
              <div className='logo'>
					      <div className='fn_logo'>
                  <a href="https://zillionairebulls.com/"><img className="desktop_logo" src="logo.png" alt="logo"/></a>
                </div>
              </div>
            </div>
            <div className='nav'>
              <div className='menu-flip-menu-container'>
                <ul className='metaportal_fn_main_nav' id='main-flip-menu'>
                  <li className='menu-item-type-custom menu-item-object-custom'>
                    <button>
                      <span className='creative_link'>Home</span>
                    </button>
                  </li>
                  <li className='menu-item-type-custom menu-item-object-custom'>
                    <button>
                      <span className='creative_link'>FAQ</span>
                    </button>
                  </li>
                  <li className='menu-item-type-custom menu-item-object-custom'>
                    <button>
                      <span className='creative_link'>Flip History</span>
                    </button>
                  </li>
                  <li className='menu-item-type-custom menu-item-object-custom'>
                    <button>
                      <span className='creative_link'>Profile</span>
                    </button>
                  </li>
                  <li className='menu-item-type-custom menu-item-object-custom'>
                    <button>
                      <span className='creative_link'>Select Wallet</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='content'>
        <div className='front'>
          <h3 className='gradient_title'>ZBC FLIP</h3>
          <p>FLIP AVAX TOKEN FOR DOUBLE OR NOTHING</p>
        </div>
        <div className='down'></div>
      </div>
    </div>
  );
}

export default App;
