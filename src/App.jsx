import ControlledInputs from "./components/ControlledInputs";
import MultipleControlInput from "./components/MultipleControlInput";
import UncontrolInput from "./components/UncontrolInput";

function App() {
  return (
    <div className="min-h-screen  gap-4 min-w-full text-center flex flex-col justify-center bg-slate-800 text-slate-200 px-36">
      <UncontrolInput />
      <ControlledInputs />
      <MultipleControlInput />
    </div>
  );
}

export default App;
