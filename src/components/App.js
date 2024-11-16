import "../App.css";
import "../styles/global.css";
import { Boards } from "./board/Boards";
import { BoardsHeader } from "./board/BoardsHeader";

function App() {
  return (
    <div className="App">
      <div className="pageWrapper">
        <BoardsHeader />
        <Boards />
      </div>
    </div>
  );
}

export default App;
