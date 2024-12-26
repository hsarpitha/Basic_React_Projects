import Home from './Home';
import Contact from './Contact'; 
import About from './About';
import Greeting from './Greeting';

function App() {
  return (
    <div>
    <h1>Hello from React JS</h1>
    <Greeting name = {'Akash'}/>
    <Greeting name = {'Sahana'}/>
    {/* <Home name = {'Arna'} age = {21} />  */}
    {/* <Contact /> */}
    {/* <About /> */}
    </div>
  );
}

export default App;
