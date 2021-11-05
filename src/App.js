import { useEffect } from 'react';
import { connect } from 'react-redux';
import AppRoutes from './components/AppRoutes';
import Sidebar from './components/UI/Sidebar';
import { loginByTokenAction } from './redux/actions/authActions';
import './styles/App.css';
import { getProfileData, getToken } from './utils/storage';

function App({isAuth, login}) {
  useEffect(() => {
    const token = getToken();
    const profileData = getProfileData();
    if(token && profileData){
      login(token);
    }
  }, [login]);

  return (
    <div className="App">
      {
        isAuth
        ? <Sidebar/>
        : null
      }
      <AppRoutes/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});
const mapDispatchToProps = {
  login: loginByTokenAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);