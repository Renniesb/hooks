import logo from './logo.svg';
import './App.css';
import getData from './getData'

function App() {
  const users = getData('https://jsonplaceholder.typicode.com/users',[])
  const posts = getData('https://jsonplaceholder.typicode.com/posts',[])

  return (
    <div className="App">
      <header className="App-header">
        <h2>Users</h2>
        <ul>
          {users.data.map( user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>

        <h2>Posts</h2>
        <ul>
          {posts.data.map( posts =>(
            <li key={posts.id}>posts.title</li>
          )

          )}
        </ul>

        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
