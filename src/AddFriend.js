import Button from './Button';

export default function AddFriend() {
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
            <Button>add</Button>
        </div>
    );
}
