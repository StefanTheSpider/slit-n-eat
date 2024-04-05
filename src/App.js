const friends = [
    {
        image: 'https://www.ws-trend.de/cdn/shop/articles/wsonnwald_00886_spiderman_swinging_beb96897-ff40-437e-bbc0-53dffb2dd231.png?v=1696231723',
        name: 'Spiderman',
        amount: 10,
    },
];

export default function App() {
    return (
        <div className="App">
            <SlitNEat />
        </div>
    );
}

function SlitNEat() {
    return (
        <div>
            <Friends></Friends>
            <AddFriend></AddFriend>
            <SplitWith></SplitWith>
        </div>
    );
}

function Friends() {
    return (
        <div className="friends-container">
            <div className="friends-grid-container">
                <div className="image-selected-friend">
                    <img
                        alt="name"
                        className="image-select"
                        src={friends.map((friend) => friend.image)}
                    ></img>
                </div>
                <div className="name-selected-friend-text">
                    <p>{friends.map((friend) => friend.name)}</p>
                    <p>{friends.map((friend) => friend.amount)}</p>
                </div>
                <button className="btn select">select</button>
            </div>
            <button className="btn">add</button>
        </div>
    );
}

function AddFriend() {
    return (
        <div className="add-friend-container">
            <input></input>
            <input type="url" onChange={(e) => e.target.value}></input>
            <button className="btn">add</button>
        </div>
    );
}

function SplitWith() {
    return (
        <div className="split-with-container">
            <input></input>
            <input></input>
            <p></p>
            <select></select>
            <button className="btn">split bill</button>
        </div>
    );
}
