import './App.css';

import CounterAppOne from './components/CounterOne';
//@ts-ignore
import useStore from "container/store";

function App() {
  const { count, clear } = useStore();
  return (
    <div className="App">
      <CounterAppOne />

      <h1 className='text-green-700'>I am remote</h1>
    </div>
  );
}

export default App;
