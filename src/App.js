import React, { useState } from "react";
import Header from "./components/header/Header";
import AddToDo from "./components/addToDo/AddToDo";
import ToDoList from "./components/toDoList/ToDoList";

// function DoneList({ title, content, isDone }) {
//   return (
//     <div className="list-box">
//       <h2>{title}</h2>
//       <h4>{content}</h4>
//       <button>삭제하기</button>
//       <button>{isDone ? "취소" : "완료"}</button>
//     </div>
//   );
// }

const App = () => {
  const [toDoS, setToDoS] = useState([
    { id: 1, title: "리액트", content: "리액트 과제 다시 하기", isDone: false },
    { id: 2, title: "독서", content: "IT책 10장 읽기", isDone: true },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 추가하기 버튼을 누르면 새로운 ToDo가 추가
  const onAddToDoHandler = () => {
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
  };

  // 삭제하기 버튼을 눌렀을 때
  const deleteToDo = (id) => {
    const newToDoList = toDoS.filter((toDo) => toDo.id != id);
    setToDoS(newToDoList);
  };

  // 완료, 취소 버튼 눌렀을 때
  const switchList = (e) => {
    const eventId = Number(e.target.id);
    const newToDoList = [...toDoS];
    newToDoList[eventId].isDone = !newToDoList[eventId].isDone;

    setToDoS(newToDoList);
  };

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

      {/* <ListSection></ListSection> */}
      <div>
        <h2>Working...🔥🔥🔥</h2>
        {toDoS.map((toDo) => {
          if (toDo.isDone === false) {
            return (
              <ToDoList
                toDo={toDo}
                title={toDo.title}
                content={toDo.content}
                isDone={toDo.isDone}
                key={toDo.id}
                deleteHandle={deleteToDo}
                switchList={switchList}
              ></ToDoList>
            );
          }
        })}

        <h2>Done 🎉🎉🎉</h2>
        {toDoS.map((toDo) => {
          if (toDo.isDone === true) {
            return (
              <ToDoList
                toDo={toDo}
                title={toDo.title}
                content={toDo.content}
                isDone={toDo.isDone}
                key={toDo.id}
                deleteHandle={deleteToDo}
                switchList={switchList}
              ></ToDoList>
            );
          }
        })}
      </div>
      {/* 리스트 섹션 */}
    </div>
  );
};

export default App;
