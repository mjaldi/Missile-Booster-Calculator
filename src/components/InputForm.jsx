import '../css/InputForm.css';

export default function InputForm() {
    return (
        <>
            <form className="form">

                <div className="missile_weight">
                    <label>Propellant mass (kg)</label>
                    <input type="number" name="missileWeight" />
                </div>

                <div className="missile_velocity">
                    <label>Structure Mass (kg)</label>
                    <input type="number" name="missileVelocity" />
                </div>

                <div className="missile_acceleration">
                    <label>Specific Impulse</label>
                    <input type="number" name="missileAcceleration" />
                </div>

                <button className='calculate_button'>Add Configuration</button>
            </form>
            <div className='calculation'>
                <div className='result'>Result</div>
            </div>
        </>
    )
}