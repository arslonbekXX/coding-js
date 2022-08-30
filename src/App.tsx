import Hex from "./components/hex";

function App() {
  return (
    <div className='app'>
      <Hex color='red' onClick={() => console.log("red clicked")} />
      <Hex color='#efed40' onClick={() => console.log("#efed40 clicked")} />
    </div>
  );
}

export default App;
