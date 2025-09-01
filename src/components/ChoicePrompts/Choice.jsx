const Choice = ({ text, action }) => {
    return (
        <div className="choice" onClick={() => action(text)}>
            {text}
        </div>
    );
}

export default Choice;