import "./style.css";
import ToDoCards from "../toDoCard/ToDoCards";

function ToDoBox({ toDoS, deleteToDo, switchList, isDone }) {
  return (
    <div>
      <div className="list-container">
        {toDoS.map(
          (toDo) =>
            // toDoS를 map으로 돌면서 isDone이 존재하는(&&) ToDoCards를 반환!
            // 이렇게 중복 코드를 제거
            toDo.isDone === isDone && (
              <ToDoCards
                toDo={toDo}
                key={toDo.id}
                deleteToDo={deleteToDo}
                switchList={switchList}
              />
            )
        )}
      </div>
    </div>
  );
}

export default ToDoBox;
