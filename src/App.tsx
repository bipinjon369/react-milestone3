import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import Task from './components/Task.tsx'
import TaskHeader from './components/TaskHeader.tsx'

type Task = {
  task: string;
  status: boolean;
};

function App() {
  const [isTaskAddScreen, setIsTaskAddScreen] = useState(false)
  const [isTaskUpdate, setIsTaskUpdate] = useState(false)
  const [taskName, setTaskName] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });
  console.log('Selected Index: ', selectedIndex)
  // // On the first load, fetch the tasks from local storage
  // useEffect(() => {
  //   const storedTasks = localStorage.getItem('tasks')
  //   if (storedTasks) {
  //     setTasks(JSON.parse(storedTasks))
  //   }
  // }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const handleAddTask = () => {
    console.log('Add screen here')
    setIsTaskAddScreen((prev) => !prev)
    setIsTaskUpdate(false)
    setTaskName('')
  }
  // Handler to add task
  const addTask = () => {
    if (!taskName.trim()) {
      alert('Task name cannot be empty');
      return;
    }

    const newTask = {
      task: taskName.trim(),
      status: false
    };

    setTasks([newTask, ...tasks]);
    setIsTaskAddScreen(false)
    setTaskName('')
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  // Handler to set the update screen
  const setUpdateScreen = (index: number) => {
    setSelectedIndex(index)
    setIsTaskUpdate(true)
    setIsTaskAddScreen(true)
    setTaskName(tasks[index].task)
  }
  // Handler to update task name
  const handleUpdateTask = () => {
     if (!taskName.trim()) {
      alert('Task name cannot be empty');
      return;
    }
    const updatedTasks = [...tasks];
    updatedTasks[selectedIndex].task = taskName;
    setTasks(updatedTasks);
    setIsTaskUpdate(false)
    setIsTaskAddScreen(false)
    setTaskName('')
  };

  // Handler to update the status of the task
  const updateTaskStatus = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = true;
    setTasks(updatedTasks);
  };
  return (
    <>
      <Header />
      <div className='px-[64px] pt-[47px]'>
        {/* Add Task screen */}

        <TaskHeader isAddScreen={isTaskAddScreen} onClick={handleAddTask} />
        {/* Task section */}
        {isTaskAddScreen ?
        <>
          <div>
            <input 
              className='text-placeholder-text pt-9 font-inter outline-none border-none placeholder:text-placeholder-text' 
              placeholder='  Add new task.....'
              onChange={(e) => {
                console.log('Task input changed to:', e.target.value);
                setTaskName(e.target.value);
              }}
              value={taskName}
              >
            </input>    
          </div>
          <div className='flex justify-center pt-[415px]'>
            <button className="bg-nav-green rounded-[12px]" onClick={isTaskUpdate ? handleUpdateTask : addTask}>
              <p className="px-[153px] py-[19px] text-white font-raleway text-button-text">{isTaskUpdate ? 'Save Changes' : 'Add Task'}</p>
            </button>
          </div>
        </> 
        : 
        <section className='flex flex-col gap-4 pt-[36px]'>
          {tasks.map((task, index) => (
            <Task 
              key={index} 
              taskName={task.task} 
              taskStatus={task.status} 
              onDelete={() => handleDeleteTask(index)} 
              updateTask={handleUpdateTask} 
              onUpdate={() => setUpdateScreen(index)}
              updateTaskStatus={() => updateTaskStatus(index)}
            />          
          ))}
        </section>}
      </div>
    </>
  )
}

export default App
