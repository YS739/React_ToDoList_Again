import "./style.css";

function ToDoCards({ toDo, deleteToDo, switchList }) {
  return (
    <div className="list-box">
      <div className="content-text">
        <h2>{toDo.title}</h2>
        <h4>{toDo.content}</h4>
      </div>
      <div className="buttons">
        <button onClick={() => deleteToDo(toDo.id)}>삭제하기</button>
        <button onClick={() => switchList(toDo.id)}>
          {toDo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default ToDoCards;
