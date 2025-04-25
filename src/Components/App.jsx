function name(params) {
    const [tasks, setTasks] = useState([]);

    return (
        <div className="app">
            <h1>TaskTrackr</h1>
            <TaskForm tasks={tasks} deleteTask={...} editTask={...}/>
        </div>
    )
}