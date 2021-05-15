import React from 'react';
import axios from 'axios';

import useRequest from '../hooks/useRequest';

const Request = () => {
  const [todos, isLoading, error] = useRequest(fetchTodos);

  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>An error occurred while loading data</h1>;
  }
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <div
            key={todo.id}
            style={{ padding: 30, border: '2px solid black' }}
          >
            {todo.id}. {todo.title}
          </div>
        ))}
    </div>
  );
};

export default Request;
