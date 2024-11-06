function Subject(props) {
    return (
        <div className={props.className}>
            <h3>{props.subjectName}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Subject;