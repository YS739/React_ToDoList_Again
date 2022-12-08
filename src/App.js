import React, { useState } from "react";
import Header from "./components/header/Header";
import AddToDo from "./components/addToDo/AddToDo";

// workingList component - destructuring
function WorkingList({ title, content, isDone }) {
  return (
    <div className="list-box">
      <h2>{title}</h2>
      <h4>{content}</h4>
      <button>삭제하기</button>
      <button>{isDone ? "취소" : "완료"}</button>
    </div>
  );
}

function DoneList({ title, content, isDone }) {
  return (
    <div className="list-box">
      <h2>{title}</h2>
      <h4>{content}</h4>
      <button>삭제하기</button>
      <button>{isDone ? "취소" : "완료"}</button>
    </div>
  );
}

const App = () => {
  const [toDoS, setToDoS] = useState([
    { id: 1, title: "리액트", content: "리액트 과제 다시 하기", isDone: false },
    { id: 2, title: "독서", content: "IT책 10장 읽기", isDone: true },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 추가하기 버튼을 누르면 새로운 ToDo가 추가
  const onAddToDoHandler = () => {
    if (setTitle && setContent) {
      const newToDoS = {
        id: toDoS.length + 1,
        title: title,
        content: content,
        isDone: false,
      };
      setToDoS([...toDoS, newToDoS]);
      // input 초기화
      setTitle("");
      setContent("");
    } else {
      alert("제목과 내용을 모두 입력해주세요.");
    }
  };

  // 삭제하기 버튼
  const deleteToDo = (id) => {};

  return (
    <div>
      <Header />
      <AddToDo
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        onAddToDoHandler={onAddToDoHandler}
      ></AddToDo>

      <div>
        <h2>Working...🔥🔥🔥</h2>
        {toDoS.map((toDo) => {
          if (toDo.isDone === false) {
            return (
              <WorkingList
                toDo={toDo}
                title={toDo.title}
                content={toDo.content}
                isDone={toDo.isDone}
                key={toDo.id}
              ></WorkingList>
            );
          }
        })}

        <h2>Done 🎉🎉🎉</h2>
        {toDoS.map((toDo) => {
          if (toDo.isDone === true) {
            return (
              <DoneList
                toDo={toDo}
                title={toDo.title}
                content={toDo.content}
                isDone={toDo.isDone}
                key={toDo.id}
              ></DoneList>
            );
          }
        })}
      </div>
    </div>
  );
};

export default App;
