import logo from './logo.svg';
import './App.css';
import BetterCounter from './BetterCounter';
import MyComponent from './UseLocalStorage';
import Add from './Add';
import { Routes, Route, Link, BrowserRouter} from "react-router-dom"
import ShowNameAndAge from './ShowNameAndAge';
import TodoApp from './TodoAppCustomHooks';
import ShowHobbies from './ShowHobbies';
import Todos from './AssignmentMarch1/Todoapp';
import './AssignmentMarch1/Todo.css'
function App() {
  return (
    <div className="App">
    {/*<BrowserRouter>
    <a href="/bettercounter">BetterCounter</a><br/>
    <Link to ="/bettercounter">BetterLinkCounter</Link><br/>
    <Link to="/uselocalstorage">LinkLocalStorage</Link><br/>
    <Link to="/show/Mounisha/21">show name and age</Link><br/>
    <Link to="/bettercounter/todo">Todo as a child</Link>
    <Routes>
      <Route path="/bettercounter" element={<BetterCounter/>}>
      <Route path="todo" element={<TodoApp/>}/>
      </Route>
      <Route path="/uselocalstorage" element={<MyComponent/>}/>
      <Route path="/show/:name/:age" element={<ShowNameAndAge/>}/>
    </Routes>
    </BrowserRouter>
   <BrowserRouter>
   <Link to="/uselocalstorage">LinkLocalStorage</Link><br/>
   <Link to="/uselocalstorage/counter">LinkCounter</Link><br/>
   <Routes>
   <Route path="/uselocalstorage" element={<MyComponent/>}>
   <Route path="counter" element={<BetterCounter/>}/>
   </Route>
   </Routes>
   </BrowserRouter>
    <TodoApp/>
    <BrowserRouter>
    <Link to ="/hobbylist/Gardening/Driving/Cooking/Coding/Reading">All Hobbies</Link>
    <Routes>
    <Route path="/hobbylist/:hobby1/:hobby2/:hobby3/:hobby4/:hobby5" element={<ShowHobbies/>}/>
    </Routes>
    </BrowserRouter>*/}
    <Todos/>
    </div>
  );
}

export default App;
