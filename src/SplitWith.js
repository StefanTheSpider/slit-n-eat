import { useState } from 'react';
import Button from './Button';

export default function SplitWith({ selectedFriends, onHandleSplit }) {
    const [bill, setBill] = useState(null);
    const [expense, setExpense] = useState(null);
    const [whoPays, setWhoPays] = useState('You');

    function handleBill() {
        let splitedBill = Math.abs(bill - expense);
        return splitedBill;
    }

    function handleSubmit(e) {
        e.preventDefault(); /* verhindert, dass die Seite neu geladen wird(weil wir nur rendern wollen) */
        if (!bill || !expense) return;
        onHandleSplit(whoPays === 'You' ? expense : -expense);
    }

    return (
        <form className="split-with-container" onSubmit={handleSubmit}>
            <h2>Split the bill with {selectedFriends.name}</h2>
            <div className="flex-item">
                <p>Bill valeu</p>
                <input
                    value={bill}
                    placeholder="bill amount"
                    onChange={(e) => setBill(Number(e.target.value))}
                ></input>
            </div>
            <div className="flex-item">
                <p>Your expense</p>
                <input
                    value={expense}
                    onChange={(e) =>
                        setExpense(
                            Number(e.target.value) > bill
                                ? 'please be realistic'
                                : Number(e.target.value)
                        )
                    }
                    placeholder="Your expense"
                ></input>
            </div>
            <div className="flex-item">
                <p>{selectedFriends.name}`s expense</p>
                <input value={handleBill()} disabled></input>
            </div>
            <div className="flex-item">
                <p>Who is paying?</p>
                <select
                    onChange={(e) => setWhoPays(e.target.value)}
                    value={whoPays}
                >
                    <option value="You">You</option>
                    <option value="Friend">{selectedFriends.name}</option>
                </select>
            </div>
            <Button>split bill</Button>
        </form>
    );
}
