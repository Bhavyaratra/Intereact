import './App.css';
import { Route, Switch } from 'react-router-dom';

//components
import Editor from './Components/Editor/Editor';
import Home from './Components/Home/Home';
import Room from './Components/views/Room';

function App() {
  return (<>
      <Switch>
        <Route exact path="/editor" component={Editor} />
        <Route exact path="/room" component={Room} />
        <Route path="/" component={Home} />
        
      </Switch>
     </>);
}

export default App;
