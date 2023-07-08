import data from "./data";
import Question from "./Question";
function App() {
  return (
    <main>
      <section className="main-section">
        <h1>questions</h1>

        {data.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </section>
    </main>
  );
}

export default App;
