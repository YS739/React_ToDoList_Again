import "./style.css";

function ToDoBox({ toDoS, deleteHandle, switchHandle }) {
  return (
    <div>
      <h2>Working...🔥🔥🔥</h2>
      {toDoS.map((toDo) => {
        if (toDo.isDone === false) {
          return (
            <div className="list-box">
              <h2>{toDo.title}</h2>
              <h4>{toDo.content}</h4>
              <button onClick={() => deleteHandle(toDo.id)}>삭제하기</button>
              <button onClick={() => switchHandle(toDo.id)}>
                {toDo.isDone ? "취소" : "완료"}
              </button>
            </div>
            // <ToDoCards>
            //   toDo={toDo}
            //   key={toDo.id}
            //   deleteHandle={deleteToDo}
            //   switchHandle={switchList}
            // ></ToDoCards>
          );
        }
      })}

      <h2>Done 🎉🎉🎉</h2>
      {toDoS.map((toDo) => {
        if (toDo.isDone === true) {
          return (
            <div className="list-box">
              <h2>{toDo.title}</h2>
              <h4>{toDo.content}</h4>
              <button onClick={() => deleteHandle(toDo.id)}>삭제하기</button>
              <button onClick={() => switchHandle(toDo.id)}>
                {toDo.isDone ? "취소" : "완료"}
              </button>
            </div>
            // <ToDoCards
            //   toDo={toDo}
            //   key={toDo.id}
            //   deleteHandle={deleteToDo}
            //   switchHandle={switchList}
            // ></ToDoCards>
          );
        }
      })}
    </div>
  );
}

export default ToDoBox;
