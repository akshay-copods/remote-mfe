import "./App.css";

import CounterAppOne from "./components/CounterOne";
//@ts-ignore
import useStore from "container/store";

function App() {
  const { count, clear } = useStore();
  return (
    <div className="flex flex-col bg-black text-white items-center justify-center h-screen gap-5">
      <div className="text-4xl">Signup Module</div>
      <CounterAppOne />
    </div>
  );
}

export default App;
