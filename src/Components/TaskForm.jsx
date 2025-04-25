function TaskForm({addTask}) {
    const [input, setInput] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
    
}