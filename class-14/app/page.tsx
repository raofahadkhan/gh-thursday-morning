import React from "react";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

  const parsedResponse: ITodo[] = await response.json();

  console.log("todos >>>", parsedResponse);

  return (
    <div>
      {parsedResponse.map((todo, index) => (
        <div key={index} className="flex flex-col gap-5 border border-black ">
          <p>userId: {todo.userId}</p>
          <p>id: {todo.id}</p>
          <p>title: {todo.title}</p>
          <p>completed: {`${todo.completed}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
