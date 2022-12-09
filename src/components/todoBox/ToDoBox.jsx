import "./style.css";
import ToDoCards from "../toDoCard/ToDoCards";

function ToDoBox({ toDoS, deleteToDo, switchList }) {
  return (
    <div>
      <h2>Working...🔥🔥🔥</h2>
      <div className="list-container">
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
      </div>

      <h2>Done 🎉🎉🎉</h2>
      <div className="list-container">
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
    </div>
  );
}

export default ToDoBox;
