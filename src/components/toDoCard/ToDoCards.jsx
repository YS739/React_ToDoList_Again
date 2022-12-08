import "./style.css";

function ToDoCards({ toDo, deleteToDo, switchList }) {
  return (
    <div className="list-box">
      <h2>{toDo.title}</h2>
      <h4>{toDo.content}</h4>
      <button onClick={() => deleteToDo(toDo.id)}>삭제하기</button>
      <button onClick={() => switchList(toDo.id)}>
        {toDo.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
}

export default ToDoCards;
