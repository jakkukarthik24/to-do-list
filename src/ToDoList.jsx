import React,{useState} from 'react';
function ToDoList(){
    const [tasks,setTasks]=useState([]);
    const [newTask,setNew]=useState("");
    function handleNew(event){
        setNew(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!=""){
            setTasks(t=>[...t,newTask]);
            setNew("");
        }
    }
    function removeTask(index){
        setTasks(tasks.filter((_,i)=>i!==index));
    }
    function moveUp(index){
        if(index>0){
            const updTask=[...tasks];
            [updTask[index],updTask[index-1]]=[updTask[index-1],updTask[index]];
            setTasks(updTask);
        }
    }
    function moveDown(index){
        if(index<tasks.length-1){
            const updTask=[...tasks];
            [updTask[index],updTask[index+1]]=[updTask[index+1],updTask[index]];
            setTasks(updTask);
        }
    }
    return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input 
                    type="text"
                    value={newTask}
                    onChange={handleNew}
                    placeholder='Enter new task' />
                <button className="add-task" onClick={addTask} >Add</button><br/>
                <ol>
                    {tasks.map((task,index)=>
                        <li key={index}>
                            <span className='text'>{task}</span>
                            <button className='delete-task' onClick={() => removeTask(index)}>Delete</button>
                            <button className='move-button' onClick={() => moveUp(index)}>⬆️</button>
                            <button className='move-button' onClick={() => moveDown(index)}>⬇️</button>
                        </li>)}
                </ol>
            </div>
        </div>
    );
}
export default ToDoList