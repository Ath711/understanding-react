import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 w-full insert">
        <div
          className="flex flex-wrap justify center gap-3 shadow-lg px-3 py-2 rounded-xl"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-md shadow-lg"
            style={{ backgroundColor: "red", color: "white", fontWeight:"bold" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-md shadow-lg"
            style={{ backgroundColor: "green", color: "white", fontWeight:"bold" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-md shadow-lg"
            style={{ backgroundColor: "blue", color: "white", fontWeight:"bold" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 rounded-md shadow-lg"
            style={{ backgroundColor: "white", color: "black", fontWeight:"bold" }}
          >
            White
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 rounded-md shadow-lg"
            style={{ backgroundColor: "black", color: "white", fontWeight:"bold" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
