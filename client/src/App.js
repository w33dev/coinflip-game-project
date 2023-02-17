import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import Footer from './components/layout/Footer';
import Svgpreloader from './components/toolbox/Svgpreloader';
import Toolbox from './components/toolbox/Toolbox'

function App() {
  return (
    <div>
      <Svgpreloader />
      {/* HTML starts here */}
      <div className="metaportal-fn-wrapper core_ready" data-footer-sticky="disabled" data-nav-speed="medium">
        <Header/>
        <div className="metaportal_fn_content">
          <div className="metaportal_fn_pages">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
            <Footer/>
          </div>
        </div>
        {/* All website content ends here */}
        <div className="frenify-cursor cursor-outer" data-default="yes" data-link="yes" data-slider="yes" style={{visibility: 'visible', transform: 'translate(1103px, 5px)'}}><span className="fn-cursor" /></div>
        <div className="frenify-cursor cursor-inner" data-default="yes" data-link="yes" data-slider="yes" style={{visibility: 'visible', transform: 'translate(1103px, 5px)'}}><span className="fn-cursor"><span className="fn-left" /><span className="fn-right" /></span></div>
      </div>
      {/* HTML ends here */}
      <Toolbox/>
    </div>
  );
}

export default App;