import "./style.css";
import ToDoList from "./components/toDoList/ToDoList";

function TodoCards({ toDoS, deleteToDo, switchList }) {
  return (
    <div>
      <h2>Working...🔥🔥🔥</h2>
      {toDoS.map((toDo) => {
        if (toDo.isDone === false) {
          return (
            <ToDoList
              toDo={toDo}
              key={toDo.id}
              deleteHandle={deleteToDo}
              switchHandle={switchList}
            ></ToDoList>
          );
        }
      })}

      <h2>Done 🎉🎉🎉</h2>
      {toDoS.map((toDo) => {
        if (toDo.isDone === true) {
          return (
            <ToDoList
              toDo={toDo}
              key={toDo.id}
              deleteHandle={deleteToDo}
              switchHandle={switchList}
            ></ToDoList>
          );
        }
      })}
    </div>
  );
}

export default TodoCards;
