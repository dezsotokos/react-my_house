import { useState } from "react";

function GoalForm(props) {
    const [formDate, setFormDate] = useState({goal: '', by: ''});

    function changeHandler(e) {
        setFormDate({ ...formDate, [e.target.name]: e.target.value});
    }

    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formDate);
        setFormDate({goal: "", by: ""})
    }
    return (
        <>
            <h2>My Little Lemon Goals</h2>
            <form onSubmit={submitHandler}>
                <input type="text" name="goal" placeholder="Goal" value={formDate.goal} onChange={changeHandler} />
                <input type="text" name="by" placeholder="By..." value={formDate.by} onChange={changeHandler} />
                <button>Submit Goal</button>
            </form>
        </>
    );
}

export default GoalForm;
