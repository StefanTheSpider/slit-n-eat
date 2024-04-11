import { useState } from 'react';

export default function SplitWith() {
    const [bill, setBill] = useState(0);
    const [expense, setExpense] = useState(0);
    return (
        <form>
            <div className="flex-item">
                <p>Bill valeu</p>
                <input
                    value={bill}
                    placeholder="bill amount"
                    onChange={(e) => setBill(e.target.value)}
                ></input>
            </div>
            <div className="flex-item">
                <p>Your expense</p>
                <input
                    value={expense}
                    onChange={(e) => setExpense(e.target.value)}
                    placeholder="Your expense"
                ></input>
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
