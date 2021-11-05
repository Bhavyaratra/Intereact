import './App.css';
import { Route, Switch } from 'react-router-dom';

//components
import Editor from './Components/Editor/Editor';
import Home from './Components/Home/Home';
import Room from './Components/views/Room';
import Join from './Components/views/Join';

function App() {
  return (<>
      <Switch>
        <Route exact path="/editor" component={Editor} />
        <Route path="/room" component={Room} />
        <Route path="/join" component={Join} />
        <Route path="/" component={Home} />
        
      </Switch>
     </>);
}

export default App;
