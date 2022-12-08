import "./style.css";

const AddToDo = ({ title, setTitle, body, setBody, onAddToDoHandler }) => {
  return (
    <div className="add-todo-box">
      <div className="input-box">
        <h3>제목</h3>
        <input
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h3>내용</h3>
        <input
          placeholder="내용을 입력해주세요"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button onClick={onAddToDoHandler}>추가하기</button>
    </div>
  );
};

export default AddToDo;
