import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

const ToDoList = () => {
  const array = [
    "Buy Groceries",
    "Send Email",
    "Finish Assignment",
    "Write Blog",
    "Bake Cake",
  ];
  return (
    <section>
      <h1>My Todo's</h1>
      <div>
        {array.map((singleItem, index) => (
          <ToDoItem übertrageSingleItem={singleItem} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ToDoList;
