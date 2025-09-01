import Choice from "./Choice";
import "./ChoicePrompts.css";

const ChoicePrompts = () => {
    const onChoiceSelect = (text) => {
        console.log("Choice selected! Text is: ", text);
    }

    return (
        <div className="choice-prompts-container">
            <Choice text={"Give Medicine"} action={onChoiceSelect} />
            <Choice text={"Do Nothing"} action={onChoiceSelect} />
        </div>
    );
}

export default ChoicePrompts;