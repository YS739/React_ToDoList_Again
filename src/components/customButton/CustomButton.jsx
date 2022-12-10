const CustomButton = (props) => {
  switch (props.btnName) {
    // 추가하기 버튼
    case "add": {
      return (
        <button
          style={{
            background: "purple",
            color: "white",
            border: "none",
            borderRadius: "20px",
            padding: "10px 15px",
            fontSize: "15px",
            fontWeight: 900,
            letterSpacing: "2px",
            cursor: "pointer",

            // hover: "background:'#ae8fb6'",
          }}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      );
    }

    //삭제하기 버튼
    case "delete": {
      return (
        <button
          style={{
            background: "purple",
            border: "none",
            borderRadius: "15px",
            margin: "0 6px",
            padding: "5px 7px",

            fontSize: "12px",
            fontWeight: "900",
            letterSpacing: "2px",

            cursor: "pointer",
          }}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      );
    }

    // 완료, 취소 버튼
    case "switch": {
      return (
        <button
          style={{
            background: "purple",
            border: "none",
            borderRadius: "15px",
            margin: "0 6px",
            padding: "5px 7px",

            fontSize: "12px",
            fontWeight: "900",
            letterSpacing: "2px",

            cursor: "pointer",
          }}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      );
    }
  }
};

export default CustomButton;
