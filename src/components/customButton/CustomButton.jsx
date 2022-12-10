const CustomButton = (props) => {
  switch (props.btnName) {
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
  }
};

export default CustomButton;
