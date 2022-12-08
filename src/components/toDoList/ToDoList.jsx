import "./style.css";

function ToDoList({ deleteHandle, toDo, switchHandle }) {
  return (
    <div className="list-box">
      <h2>{toDo.title}</h2>
      <h4>{toDo.content}</h4>
      <button onClick={() => deleteHandle(toDo.id)}>삭제하기</button>
      <button onClick={() => switchHandle(toDo.isDone)}>
        {toDo.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
}

export default ToDoList;
