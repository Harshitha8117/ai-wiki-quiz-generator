import GenerateQuiz from "./pages/GenerateQuiz";
import History from "./pages/History";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>AI Wiki Quiz Generator</h1>

      <GenerateQuiz />

      <hr />

      <History />
    </div>
  );
}

export default App;
