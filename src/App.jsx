import questions from "./data";
import List from "./List";
const App = () => {
  return (
    <main className="main">
      <section className="container">
        <h1>Questions</h1>
        {questions.map((item) => {
          return <List key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};
export default App;
