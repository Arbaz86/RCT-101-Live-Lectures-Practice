import { useEffect, useState } from "react";
import axios from "axios";

function Todo() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);

  const [todos, setTodos] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getTodo = async () => {
      let r = await axios.get(
        `http://localhost:8080/todos?_page=${page}&_limit=${limit}`
      );
      setTodos(r.data);
      setTotalPage(Number(r.headers["x-total-count"]));
    };
    getTodo();
  }, [page, limit]);

  useEffect(() => {
    axios.get();
  }, [page, limit]);

  return (
    <div className="Todo">
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
        {" < "}
      </button>

      <select
        onChange={(e) => {
          setLimit(Number(e.target.value));
        }}
      >
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button
        disabled={totalPage <= page * limit}
        onClick={() => setPage(page + 1)}
      >
        {">"}
      </button>

      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default Todo;
