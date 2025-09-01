import "./Cat.css";
import catNormal from "../../../assets/cat.png";
import catHungry from "../../../assets/cat-hungry.png";
import catSick from "../../../assets/cat-sick.png";
import catDead from "../../../assets/cat-dead.png";

const Cat = ({ catState }) => {
    const getCatImage = (state) => {
        switch (state) {
            case "normal":
                return catNormal;
            case "hungry":
                return catHungry;
            case "sick":
                return catSick;
            case "dead":
                return catDead;
        }
    };

    return (
        <div className="cat-container">
            <img 
                src={getCatImage(catState)} 
                alt={`Cat is ${catState}`}
                className="cat-image"
            />
        </div>
    );
};

export default Cat;
