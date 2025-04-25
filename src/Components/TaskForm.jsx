function TaskForm({addTask}) {
    const [input, setInput] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    }
    
}