const TodoList = ({ todos = [] }) => (
    <div className="list-container">
      <NewTodoForm />
      {todos.map{todo => <TodoListItem todo={todo}/>}}  
    </div>
  )
  
  const TodoListItem = ({ todo }) => (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <button className="completed">Completed</button>
      <button className="removed">Removed</button>
    </div>
  )
  
  const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    
    return (
      <div className="new-todo-form">
        <input 
          className="new-todo-input" 
          type="text" 
          placeholder="Type Todo Here!"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}/>
        <button className="new-todo-button">Create Todo</button>
      </div>
    );
  };
  
  
  class App extends React.Component {
    constructor(props) {
      super(props);
    } 
    render() {
      return (
        <div className="App">
          <TodoList />
        </div>
      )
    }
  }
  
  ReactDOM.render(<App/>, document.getElementById('root'));
  