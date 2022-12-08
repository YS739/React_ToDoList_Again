import "./style.css";

const AddToDo = ({ setTitle, setContent, onAddToDoHandler }) => {
  const onChangeHandler = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else if (e.target.id === "content") {
      setContent(e.target.value);
    }
  };

  return (
    <div className="add-todo-box">
      <div className="input-box">
        <h3>제목</h3>
        <input
          placeholder="제목을 입력해주세요"
          id="title"
          onChange={onChangeHandler}
        />
        <h3>내용</h3>
        <input
          placeholder="내용을 입력해주세요"
          id="content"
          onChange={onChangeHandler}
        />
      </div>
      <button onClick={onAddToDoHandler}>추가하기</button>
    </div>
  );
};

export default AddToDo;
