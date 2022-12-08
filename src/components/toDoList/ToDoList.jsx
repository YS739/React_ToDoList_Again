import "./style.css";

function ToDoList({ title, content, isDone, deleteHandle, toDo, switchList }) {
  return (
    <div className="list-box">
      <h2>{title}</h2>
      <h4>{content}</h4>
      <button onClick={() => deleteHandle(toDo.id)}>삭제하기</button>
      <button onClick={() => switchList(toDo.isDone)}>
        {isDone ? "취소" : "완료"}
      </button>
    </div>
  );
}

export default ToDoList;
