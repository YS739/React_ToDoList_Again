import React, { useState } from "react";
import Header from "./components/header/Header";
// import AddToDo from "./components/addToDo/AddToDo";

function WorkingList({ title, body }) {
  return (
    <div className="list-box">
      <h2>{title}</h2>
      <h4>{body}</h4>
      <button>삭제하기</button>
      <button>완료</button>
    </div>
  );
}

const App = () => {
  const [toDoS, setToDoS] = useState([
    { id: 1, title: "리액트", body: "리액트 과제 다시 하기", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // 추가하기 버튼을 누르면 새로운 ToDo가 추가
  const onAddToDoHandler = () => {
    const newToDoS = {
      id: toDoS.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setToDoS([...toDoS, newToDoS]);
    // input 초기화
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <Header />
      {/* <AddToDo></AddToDo> */}
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

      {/* addtodo */}
      <div>
        <h2>Working...🔥🔥🔥</h2>
        {toDoS.map((toDo) => {
          return (
            <WorkingList
              toDo={toDo}
              title={toDo.title}
              body={toDo.body}
              // isDone={isDone}
              key={toDo.id}
            ></WorkingList>
          );
        })}

        <h2>Done 🎉🎉🎉</h2>
        <div className="list-box">
          <h2>제목</h2>
          <h4>내용</h4>
          <button>삭제하기</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
};

export default App;
