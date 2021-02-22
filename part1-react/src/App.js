import './App.css';
import Message from './Message.js'


const Description = () => {
  return <p>
    This is the course application fullstack bootcamp
  </p>
}
const App = () => {

  return (
    <div className="App">
      <Message color='red' message='Estamos trabajando' />
      <Message color='blue' message='En un curso' />
      <Message color='green' message='de React' />
      <Description />

    </div>
  )
}



export default App;
