const CustomButton = (props) => {
  switch (props.color) {
    case "red": {
      return (
        <button
          style={{ background: "purple", color: "white" }}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      );
    }
  }
};

export default CustomButton;
