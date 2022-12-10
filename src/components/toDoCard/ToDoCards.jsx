import "./style.css";
import CustomButton from "../customButton/CustomButton";

function ToDoCards({ toDo, deleteToDo, switchList }) {
  return (
    <div className="list-box">
      <div className="content-text">
        <h2>{toDo.title}</h2>
        <h4>{toDo.content}</h4>
      </div>
      <div className="buttons">
        {/* 삭제하기 버튼 */}
        <CustomButton btnName="delete" onClick={() => deleteToDo(toDo.id)}>
          삭제하기
        </CustomButton>
        <CustomButton
          btnName="switch"
          onClick={() => switchList(toDo.id)}
        ></CustomButton>
      </div>
    </div>
  );
}

export default ToDoCards;
