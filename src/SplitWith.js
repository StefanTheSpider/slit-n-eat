import { useState } from 'react';

export default function SplitWith() {
    const [bill, setBill] = useState(null);
    const [expense, setExpense] = useState(null);
    const [whoPays, setWhoPays] = useState('You');

    function handleBill() {
        let splitedBill = Math.abs(bill - expense);
        return splitedBill;
    }

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
                <input value={handleBill()} disabled></input>
            </div>
            <div className="flex-item">
                <p>Who is paying?</p>
                <select
                    onChange={(e) => setWhoPays(e.target.value)}
                    value={whoPays}
                >
                    <option value="You">You</option>
                    <option value="Friend">Friend</option>
                </select>
            </div>
        </form>
    );
}
