import Body from "./components/Body";
import Divider from "./components/Divider";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex h-dvh w-dvw flex-col place-items-center bg-gray-600 text-gray-400">
      <div className="glow-border h-90 w-90 overflow-auto rounded-md bg-bg-main p-5">
        <Header />
        <Divider />
        <Body />
      </div>
    </div>
  );
}

export default App;
