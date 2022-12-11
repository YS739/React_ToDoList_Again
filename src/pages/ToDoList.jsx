import React, { useState } from "react";
import Header from "../components/header/Header";
import AddToDo from "../components/addToDo/AddToDo";
import ToDoBox from "../components/todoBox/ToDoBox";

const ToDoList = () => {
  const [toDoS, setToDoS] = useState([
    { id: 0, title: "리액트", content: "리액트 과제 다시 하기", isDone: false },
    { id: 1, title: "독서", content: "IT책 10장 읽기", isDone: true },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 추가하기 버튼을 누르면 새로운 ToDo가 추가
  const onAddToDoHandler = (e) => {
    // 제목과 내용이 모두 입력되었을 때
    if (title !== "" && content !== "") {
      e.preventDefault();
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
    }

    // 제목과 내용이 모두 비었을 때 - 제목에 focus
    else if (title === "" && content === "") {
      e.preventDefault();
      document.querySelector("#title").focus();
      alert("제목과 내용을 입력해주세요");
    }

    // 제목이 비었을 때 - 내용에 focus
    else if (title === "") {
      e.preventDefault();
      document.getElementById("title").focus();
      alert("제목을 입력해주세요");
    }

    // 내용이 비었을 때  - 제목에 focus
    else if (content === "") {
      e.preventDefault();
      document.getElementById("content").focus();
      alert("내용을 입력해주세요");
    }
  };

  // 삭제하기 버튼을 눌렀을 때
  const deleteToDo = (id) => {
    const newToDoList = toDoS.filter((toDo) => toDo.id !== id);
    setToDoS(newToDoList);
  };

  // 완료, 취소 버튼 눌렀을 때
  const switchList = (id) => {
    const switchToDo = toDoS.map((toDo) => {
      if (toDo.id === id) {
        return {
          ...toDo,
          isDone: !toDo.isDone,
        };
      } else {
        return { ...toDo };
      }
    });
    setToDoS(switchToDo);
  };

  return (
    <div>
      <Header />

      {/* ToDo 추가하는 input form */}
      <AddToDo
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        onAddToDoHandler={onAddToDoHandler}
      ></AddToDo>

      {/* 추가한 ToDoList(Working, Done) */}
      <ToDoBox
        toDoS={toDoS}
        deleteToDo={deleteToDo}
        switchList={switchList}
        content={content}
        title={title}
        isDone={toDoS.isDone}
      ></ToDoBox>
    </div>
  );
};

export default ToDoList;
