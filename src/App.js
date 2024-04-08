import { useState } from 'react';
import AddFriend from './AddFriend';

const friends = [
    {
        id: 1,
        image: 'https://www.ws-trend.de/cdn/shop/articles/wsonnwald_00886_spiderman_swinging_beb96897-ff40-437e-bbc0-53dffb2dd231.png?v=1696231723',
        name: 'Spiderman',
        amount: 10,
    },
    {
        id: 2,
        image: 'https://www.kinoundco.de/media/cache/newsteaserimg/media/docock1_sony-pictures.jpg',
        name: 'Doc Ock',
        amount: -10,
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
    const [openModule, setOpenModule] = useState(false);
    function handlerOpenModule() {
        setOpenModule(!openModule);
    }
    return (
        <div className="app-container">
            <div className="first-half">
                <FriendsList></FriendsList>
            </div>
            <SplitWith
                openModule={openModule}
                onHanlerOpenModule={handlerOpenModule}
            ></SplitWith>
        </div>
    );
}

function FriendsList() {
    const [openAddFriend, setOpenAddFriend] = useState(false);
    function handlerOpenAddFriend() {
        setOpenAddFriend(!openAddFriend);
    }
    return (
        <div className="friends-container">
            <ul>
                {friends.map((friend) => (
                    <Friends
                        name={friend.name}
                        img={friend.image}
                        key={friend.id}
                        amount={friend.amount}
                    />
                ))}
            </ul>
            {!openAddFriend ? (
                <button className="btn" onClick={handlerOpenAddFriend}>
                    add
                </button>
            ) : (
                ''
            )}

            {openAddFriend ? (
                <AddFriend onOpenAddFriend={handlerOpenAddFriend} />
            ) : (
                ''
            )}
        </div>
    );
}

function Friends({ name, img, amount }) {
    return (
        <form>
            <li className="friends-grid-container">
                <div className="image-selected-friend">
                    <img alt="name" className="image-select" src={img}></img>
                </div>
                <div className="name-selected-friend-text">
                    <p>{name}</p>
                    <p>{amount}</p>
                </div>
                <SelectButton />
            </li>
        </form>
    );
}

function SelectButton({ onHanlerOpenModule, openModule }) {
    return (
        <button onClick={onHanlerOpenModule} className="btn select">
            {openModule ? 'close' : 'select'}
        </button>
    );
}

function SplitWith({ openModule }) {
    if (openModule)
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
