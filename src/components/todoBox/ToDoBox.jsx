import "./style.css";
import ToDoCards from "../toDoCard/ToDoCards";

function ToDoBox({ toDoS, deleteToDo, switchList }) {
  return (
    <div>
      <h2>Working...🔥🔥🔥</h2>
      <div className="list-container">
        {toDoS.map((toDo) => {
          // 'false'인 것만 working에
          if (toDo.isDone === false) {
            return (
              // ToDo들
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
          // 'true'인 것만 working에
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
