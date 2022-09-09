import { useState } from 'react';


const TodoList = () => {
    const [task, setTask] = useState("");
    const [complete, setComplete] = useState(false);

    let [tasks, setTasks] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.length ===0){
            return;
        }
        let taskObj = { task, complete }
        setTasks([...tasks, taskObj])
    }

    const handleToggleTask =(idx)=>{
        const updatedTasks = tasks.map((task,i) =>{
            if (idx === i) {
                task.complete = !task.complete;
                //to avoid mutating task directly:
                // const updatedTask = {...task ,complete: !task.complete}
                // return updatedTask
            }

            return task;
        })
        setComplete(updatedTasks);
    }
    const deleteTask = (idx) =>{
        let filteredCopy = tasks.filter((task, i) => {
            return i !== idx;
        })
        setTasks(filteredCopy)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> New Task: </label>
                <input type="text" onChange={(e) => setTask(e.target.value)} value={task} />
                <input type="submit" value="Create Task" />
            </form>
            <hr />
            <div>
                {
                    tasks.map((todo, i) => {
                        const classes=[]
                        if (todo.complete) {
                            classes.push("line-through");
                        }
                        return (
                            <div key={i}>
                                <p className={classes.join(" ")}>{todo.task} <input type="checkbox" checked={task.complete} onClick={(e)=>{handleToggleTask(i)}}></input></p>
                                <button onClick={(e) => deleteTask(i)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodoList;