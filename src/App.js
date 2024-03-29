import Todo from "./components/Todo";


function App() {
  return (
    <div className="flex flex-col items-center gap-3 justify-center w-screen h-screen overflow-y bg-indigo-300">
      <h1 className='text-4xl text-bold text-white'> Todo List Application</h1>
        <Todo></Todo>
    </div>
  );
}

export default App;
