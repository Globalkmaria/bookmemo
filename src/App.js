import './App.scss';
import { Link, Route } from 'react-router-dom';
import SavedBooks from './pages/SavedBooks';
import { useDarkMode } from './utils/mode';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Items from './pages/Items';
import Item from './pages/Item';
import { useEffect, useState } from 'react';
import { getLocalToken, logout } from './modules/login';
import { getItems } from './modules/items';
import { useDispatch } from 'react-redux';
function App() {
  const [token, setToken] = useState('');
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getLocalToken();
    setToken(token);
    dispatch(getItems(token));

    return () => {
      logout();
    };
  }, [dispatch]);
  const onLogout = () => {
    logout();
  };
  if (!componentMounted) {
    return <div />;
  }
  return (
    <div className={`App ${theme}`}>
      <div className="App-inner">
        <header>
          <div
            className="header-btn-box"
            style={{ display: token ? 'none' : 'block' }}
          >
            <Link to="/">
              <button className="btn">Home</button>
            </Link>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn">Sign up</button>
            </Link>
          </div>
          <div
            className="header-btn-box"
            style={{ display: token ? 'block' : 'none' }}
          >
            <Link to="/">
              <button className="btn">Home</button>
            </Link>
            <button className="btn" onClick={onLogout}>
              Logout
            </button>
            <Link to="/items">
              <button className="btn">독서 기록</button>
            </Link>
          </div>

          <button className="mode" onClick={toggleTheme}>
            {theme === 'light' ? <IoMdSunny /> : <IoMdMoon />}
          </button>
        </header>
        <Route path="/" component={Home} exact />
        <Route path="/savedBooks" component={SavedBooks} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/items" component={Items} exact />
        <Route path="/items/:id" component={Item} />
        <Route path="/edit" component={Edit} />
      </div>
    </div>
  );
}

export default App;
