import logo from "./logo.svg";
import "./App.css";
import NewComponent from "./NewComponent";
import StatefulComponent from "./StatefulComponent";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my app</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NewComponent color={"red"} extraText={"Hi"} />
        <NewComponent color={"green"} extraText={"Bye"} />
        <NewComponent color={"blue"} extraText={""} />
        <StatefulComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
