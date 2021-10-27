import AppRoutes from './components/AppRoutes';
import Sidebar from './components/UI/Sidebar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <AppRoutes/>
    </div>
  );
}

export default App;