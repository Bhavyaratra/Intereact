import './App.css';
import { Route, Switch } from 'react-router-dom';

//components
import Editor from './Components/Editor/Editor';
import Home from './Components/Home/Home';
import ViewRoom from './Components/views/Room.js';

function App() {
  return (<>
      <Switch>
        <Route exact path="/editor" component={Editor} />
        <Route path="/room" component={ViewRoom} />
        <Route path="/" component={Home} />
        
      </Switch>
     </>);
}

export default App;
