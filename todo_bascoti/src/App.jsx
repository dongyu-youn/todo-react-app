import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //state => 상태
  const [text, setText] = useState();
  const [data, setData] = useState(readTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);

  const [filter, setFilter] = useState("all");

  const datas = ["장보기", "공부하기"];
  console.log(datas.push("안녕"));
  console.log(datas);

  const handleClick = (e) => {
    e.preventDefault();
    setData([...data, { text, checked: false }]);
  };

  const handleDelete = (index) => {
    const deleted = data.filter((v, i) => index !== i);
    setData(deleted);
  };

  const handleChecked = (index) => {
    const checked = data.map((v, i) => {
      if (index === i) {
        return { ...v, chekced: !v.chekced };
      }
      return v;
    });
    setData(checked);
  };

  const FilterTodo = (filter) => {
    switch (filter) {
      case "active":
        return data.filter((v, i) => !v.chekced);

      case "complete":
        return data.filter((v, i) => v.chekced);

      default:
        return data;
    }
  };

  const filters = ["all", "active", "complete"];

  return (
    <div>
      {/* <div className="header">
        <button className={`{filterButton} ${filterButton}`} onClick={() => setFilter("all")}>
          all
        </button>
        <button className="filterButton" onClick={() => setFilter("active")}>
          active
        </button>
        <button className="filterButton" onClick={() => setFilter("complete")}>
          complete
        </button>
      </div> */}
      {filters.map((v, i) => {
        return (
          <button
            key={i}
            className={`filterButton ${v === filter ? "active" : ""}`}
            onClick={() => setFilter(v)}
          >
            {v}
          </button>
        );
      })}
      <ul>
        {FilterTodo(filter).map((v, index) => (
          <div>
            <input
              type="checkbox"
              onChange={() => handleChecked(index)}
              checked={v.chekced}
            />
            <li key={index}>{v.text}</li>
            <button onClick={() => handleDelete(index)}>␡</button>
          </div>
        ))}
      </ul>
      <div class="button">
        <input
          type="text"
          class="todoInput"
          placeholder="Add Todo"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick} class="addButton">
          Add
        </button>
      </div>
    </div>
  );
}

export default App;

function readTodo() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
