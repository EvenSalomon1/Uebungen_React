import "./ToDoItem.css";

const ToDoItem = (props) => {
  console.log(props);
  return (
    <ul>
      <li>{props.übertrageSingleItem}</li>
    </ul>
  );
};

export default ToDoItem;
