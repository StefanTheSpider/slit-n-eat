export default function AddFriend({ onOpenAddFriend }) {
    return (
        <div className="add-friend-container">
            <div>
                <div className="first-input">
                    <p>👫 Friend name</p>
                    <input></input>
                </div>
                <div className="second-input">
                    <p>🌃 Image URL</p>
                    <input type="url" onChange={(e) => e.target.value}></input>
                </div>
            </div>
            <button className="btn select">add</button>
            <button onClick={onOpenAddFriend} className="btn select close">
                close
            </button>
        </div>
    );
}
