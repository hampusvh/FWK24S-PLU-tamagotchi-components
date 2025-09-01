import "./HealthBar.css";

const HealthBar = ({ hpAmount }) => {
    return (
        <div className="health-bar-container">
            <div className="health-bar-amount" style={{width: `${hpAmount}%`}}></div>
        </div>
    );
}

export default HealthBar;