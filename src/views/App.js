import { Outlet } from 'react-router-dom';
import Add from '../components/Add';
import MainPage from '../pages/MainPage';
import '../views/App.css';

function App() {
  return (
    <div className="App">
     <MainPage/>

     <div className="center">
          {/* <Add/> */}
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
