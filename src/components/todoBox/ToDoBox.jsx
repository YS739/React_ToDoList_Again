import "./style.css";
import ToDoCards from "../toDoCard/ToDoCards";

function ToDoBox({ toDoS, deleteToDo, switchList }) {
  return (
    <div>
      <h2>Working...🔥🔥🔥</h2>
      {toDoS.map((toDo) => {
        if (toDo.isDone === false) {
          return (
            // 추가한 ToDo들
            <ToDoCards
              toDo={toDo}
              key={toDo.id}
              deleteToDo={deleteToDo}
              switchList={switchList}
            ></ToDoCards>
          );
        }
      })}

      <h2>Done 🎉🎉🎉</h2>
      {toDoS.map((toDo) => {
        if (toDo.isDone === true) {
          return (
            <ToDoCards
              toDo={toDo}
              key={toDo.id}
              deleteToDo={deleteToDo}
              switchList={switchList}
            ></ToDoCards>
          );
        }
      })}
    </div>
  );
}

export default ToDoBox;
