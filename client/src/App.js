import './App.css';
import { Route, Switch } from 'react-router-dom';

//components
import Editor from './Components/Editor/Editor';
import Home from './Components/Home/Home';
import Room from './Components/Views/ViewRoom';

function App() {
  return (<>
      <Switch>
        <Route exact path="/editor" component={Editor} />
        <Route path="/room" component={Room} />
        <Route path="/" component={Home} />
        
      </Switch>
     </>);
}

export default App;
