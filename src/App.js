import "./App.css";
import { useState } from "react";
import Form from './Form';
import Filter from "./Filter";
import Tasks from "./Tasks";

function App() {
  const [filter, setFilter] = useState("all");
  const [newId, setNewId] = useState(3);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task 1",
      done: false,
    },
    {
      id: 2,
      name: "Task 2",
      done: true,
    }
  ]);
  const formSubmit = (value) => {
    const newTask = {
      id: newId,
      name: value,
      done: false
    };
    setTasks([...tasks, newTask]);
    setNewId(newId + 1);
  }
  const onCheckHandler = (id, checked) => {
    setTasks(tasks.map(item => {
      return item.id === id ? {...item, done: checked} : item;
    }));
  };

  const onFilterChange = (newValue) => {
    setFilter(newValue);
  }

  const filterTasks = () => {
    // "all", "active", "completed"
    if(filter === 'active') {
      return tasks.filter(item => item.done === false);
    } else if(filter === 'completed') {
      return tasks.filter(item => item.done === true);
    }
    return tasks;
  }

  const deleteHandler = (id) => {
    const filterValues = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(filterValues);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <Form onSubmit={formSubmit} />
              <Filter onFilterChange={onFilterChange}/>
              <Tasks tasks={filterTasks()} onCheckHandler={onCheckHandler} deleteHandler={deleteHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import './App.css';
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(10);
//   const [step, setStep] = useState(5);
//   const [items, setItems] = useState([1,2,3]);
//   const [obj, setObj] = useState({
//     count: 10, key1: 'key2'
//   });
//   const clickHandler = () => {
//     setCount(count + step);
//     setItems([count + step, ...items]);
//     setObj(
//       {...obj, count:  count + step, key1: 'Updted with ' + (count + step)}
//     );
//   }
//   return (
//     <div className="App">
//       <h4>Count : {count}</h4>
//       <button onClick={clickHandler}>Increment</button>
//       {
//         items.map((item, index) => {
//           return <p key={index}>{item}</p>
//         })
//       }
//       <h4>{obj.count}</h4>
//     </div>
//   );
// }

// export default App;