// const TodoList = ({ todos }) => {
//     const renderedTodos = todos.map(({id, title, completed}) => {
    
//         return <div key={id}>{completed ? '✔' : ""}{title}</div>
//     });

//     return <section>{renderedTodos}</section>;
// };

// export default TodoList;


// using logical and operator

// const TodoList = ({ todos }) => {
//   const renderedTodos = todos.map((todo) => {
//     return (
//       <div key={todo.id}>
//         {todo.completed && '✔'}
//         {todo.title}
//       </div>
//     );
//   });

//   return <section>{renderedTodos}</section>;
// };

// export default TodoList;

const TodoList = ({ todos }) => {
    const renderedTodos = todos.map(({ id, title, completed }) => {
        return (
        <div key={id}>
            {completed && '✔'}
            {completed || '✖'}
            {title}
        </div>
        );
    });

    return <section>{renderedTodos}</section>;
};

export default TodoList;