import { useState } from "react";
import ListOfGoals from "./ListOfGoals";
import GoalForm from "./GoalForm";

function GoalManagger() {
    const [allGoals, updateAllGoals] = useState([]);
    console.log(allGoals);
    function addGoal(goal) {
        updateAllGoals([...allGoals, goal]);
    }

    return (
        <div className="GoalManagger">
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
        </div>
    );
}

export default GoalManagger;
