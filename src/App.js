import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';
import FeaturesPage from './Components/FeaturesPage';
import Topbar from './Components/Topbar';
import Demo from './Components/Demo';
import Testheader from './Components/Testheader';
import Industrysolutions from './Components/Industrysolutions';
import Admin from './Blog/Admin';
import Blogcategory from './Blog/Blogcategory';
import Allposts from './Blog/Allposts';
import Addcategory from './Blog/Addcategory';
import Allcategory from './Blog/Allcategory';
import Board from './Blog/Board';
import Login from './Blog/Login';
import Blog from './Blog/Blog';
import Blogcat from './Blog/Blogcat';
import Livechat from './Components/Livechat';
import Transparent from './Components/Transparent';
import UserSignup from './Components/UserSignup';
import DemoUsers from './Components/DemoUsers';
import MyProvider from './ContextApi/MyProvider';
// import Navbtransparent from './Components/Navtransparent';

function App() {
  return (
    <div className="App">
      <Router>
        <MyProvider>
          <Topbar />
          <Navbar />
          <ScrollToTop />
          <Livechat />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pos-features" element={<FeaturesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/pos-industries" element={<Industrysolutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pos-demo" element={<Demo />} />
            <Route path="/userSignup" element={<UserSignup />} />

            <Route path="/header" element={<Testheader />} />
            <Route path="/transparent" element={<Transparent />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postSlug" element={<Blogcat />} />
            <Route path="/signin" element={<Login />} />
            <Route path='/admin' element={<Admin />}>
              <Route index element={<Navigate to="addblog" />} />
              <Route path="addblog" element={<Blogcategory />} />
              <Route path="demoUsers" element={<DemoUsers />} />
              <Route path="allposts" element={<Allposts />} />
              <Route path="addcategory" element={<Addcategory />} />
              <Route path="allcategory" element={<Allcategory />} />
              <Route path="board" element={<Board />} />
            </Route>
          </Routes>
          <Footer />
        </MyProvider>
      </Router>
    </div>
  );
}

export default App;
