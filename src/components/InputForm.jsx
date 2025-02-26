import '../css/InputForm.css';

export default function InputForm() {
    return (
        <>
            <form className="form">

                <div className="missile_weight">
                    <label>Missile Weight (kg)</label>
                    <input type="number" name="missileWeight" />
                </div>

                <div className="missile_velocity">
                    <label>Missile Velocity (m/s)</label>
                    <input type="number" name="missileVelocity" />
                </div>

                <div className="missile_acceleration">
                    <label>Missile Acceleration (m/s^2)</label>
                    <input type="number" name="missileAcceleration" />
                </div>

                <div className="missile_thrust">
                    <label>Missile Thrust (N)</label>
                    <input type="number" name="missileThrust" />
                </div>

                <div className="missile_burn_time">
                    <label>Missile Burn Time (s)</label>
                    <input type="number" name="missileBurnTime" />
                </div>
                <button className='calculate_button'>Calculate</button>
            </form>
            <div className='calculation'>
                <div className='result'>Result</div>
            </div>
        </>
    )
}