import GenerateQuiz from "./pages/GenerateQuiz";
import History from "./pages/History";

function App() {
  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: "3rem 1.5rem" }}>
      <h1>AI Wiki Quiz Generator</h1>

      <GenerateQuiz />

      <hr />

      <History />
    </div>
  );
}

export default App;
