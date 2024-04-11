export default function SplitWith() {
    return (
        <form>
            <div className="flex-item">
                <p>Bill valeu</p>
                <input placeholder="bill amount"></input>
            </div>
            <div className="flex-item">
                <p>Your expense</p>
                <input placeholder="Your expense"></input>
            </div>
            <div className="flex-item">
                <p>Friends expense</p>
                <input disabled></input>
            </div>
            <div className="flex-item">
                <p>Who is paying?</p>
                <select>
                    <option>You</option>
                    <option>Friend</option>
                </select>
            </div>
        </form>
    );
}
