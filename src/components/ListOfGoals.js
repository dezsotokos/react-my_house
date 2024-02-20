function ListOfGoals(props) {
    return (
        <ul className="ListOfGoals">
            {props.allGoals.map((goal) => (
                <li key={goal.goal}>
                    <span>My goal is to {goal.goal}, by {goal.by}</span>
                </li>
            ))}
        </ul>
    );
}

export default ListOfGoals;
