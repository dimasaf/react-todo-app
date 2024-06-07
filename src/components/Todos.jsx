import TodoItem from "./TodoItem";

function Todos({ todos }) {
  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <TodoItem title={todo.title} key={todo.id} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default Todos;
