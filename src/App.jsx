import Random from "./components/Random";
import Tags from "./components/Tags";

function App() {
  

  return (
    <div className=" w-full flex flex-col overflow-x-hidden gap-3 items-center h-screen">
      <div className="w-11/12 mt-4 mx-auto text-center p-4 text-3xl font-bold bg-red-400 rounded-lg mb-4 ">
        GIF GENERATOR
      </div>
      <Random />
      <Tags />
    </div>
  );
}

export default App;
