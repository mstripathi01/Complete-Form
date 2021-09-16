import './App.css';
import ControlledForm from './Component/ControlledForm';
import UncontrolledForm from './Component/UncontrolledForm';

const App = ()=> {

  return (
    <div className="App">
     <ControlledForm />

     <UncontrolledForm / >
    </div>
  );
}
export default App;