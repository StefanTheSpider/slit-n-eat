import { useState } from 'react';
import AddFriend from './AddFriend';
import Button from './Button';

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
        setOpenModule((open) => !open);
    }

    const [openAddFriend, setOpenAddFriend] = useState(false);
    function handlerOpenAddFriend() {
        setOpenAddFriend(!openAddFriend);
    }

    return (
        <div className="app-container">
            <div className="first-half">
                <FriendsList></FriendsList>
                <AddFriend openAddFriend={openAddFriend}></AddFriend>
                <Button onHandlerOpenAddFriend={handlerOpenAddFriend}>
                    {!openAddFriend ? 'add' : 'close'}
                </Button>
            </div>
            <SplitWith
                openModule={openModule}
                onHandlerOpenModule={handlerOpenModule}
            ></SplitWith>
        </div>
    );
}

function FriendsList({ openAddFriend, openModule, onHanlerOpenModule }) {
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
                <Button>selct</Button>
            </li>
        </form>
    );
}

function SplitWith({ openModule, onHandlerOpenModule }) {
    if (!openModule)
        return (
            <form className="split-with-container">
                <div className="flex-item">
                    <p>Bill valeu</p>
                    <input></input>
                </div>
                <div className="flex-item">
                    <p>Your expense</p>
                    <input></input>
                </div>
                <div className="flex-item">
                    <p>Friends expense</p>
                    <p></p>
                </div>
                <div className="flex-item">
                    <p>Who is paying?</p>
                    <select>
                        <option>You</option>
                        <option>Friend</option>
                    </select>
                </div>

                <Button onHandlerOpenModule={onHandlerOpenModule}>
                    split bill
                </Button>
            </form>
        );
}
