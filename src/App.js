import { connect } from 'react-redux';
import AppRoutes from './components/AppRoutes';
import Sidebar from './components/UI/Sidebar';
import './styles/App.css';

function App({isAuth}) {
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

export default connect(mapStateToProps)(App);