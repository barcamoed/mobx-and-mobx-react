import './App.css';
import store from './store'
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <Todo store={store}/>
    </div>
  );
}

export default App;
