import { useState } from 'react';
import AddFriend from './AddFriend';
import Button from './Button';
import SplitWith from './SplitWith';

const InitialFriends = [
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
    {
        id: 3,
        image: 'https://www.superheldenfilme.net/wp-content/uploads/2020/04/venom-let-there-be-carnage-venom-2-heisst-nun-venom-let-there-be-carnage-und-kommt-8-monate-spaeter-ins-kino.jpg',
        name: 'Venom',
        amount: 0,
    },
];

export default function App() {
    const [friends, setFriends] = useState(InitialFriends);

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
    }

    const [openAddFriend, setOpenAddFriend] = useState(false);

    function handleOpenAddFriend() {
        setOpenAddFriend((show) => !show);
    }

    const [openSplitt, setOpenSplitt] = useState(false);

    function handleOpenSplitt() {
        setOpenSplitt((show) => !show);
    }

    return (
        <div className="app-container">
            <div className="first-half">
                <FriendsList
                    onClick={handleOpenSplitt}
                    friends={friends}
                ></FriendsList>
                {openAddFriend && (
                    <AddFriend
                        onAddFriend={handleAddFriend}
                        onClick={handleOpenSplitt}
                    />
                )}
                <Button onClick={handleOpenAddFriend}>
                    {!openAddFriend ? 'add a friend' : 'close'}
                </Button>
            </div>

            {!openSplitt && (
                <div className="split-with-container">
                    <SplitWith></SplitWith>
                    <Button>split bill</Button>
                </div>
            )}
        </div>
    );
}

function FriendsList({ friends, onClick }) {
    return (
        <div className="friends-container">
            <ul>
                {friends.map((friend) => (
                    <Friends
                        name={friend.name}
                        img={friend.image}
                        key={friend.id}
                        amount={friend.amount}
                        onClick={onClick}
                    />
                ))}
            </ul>
        </div>
    );
}

function Friends({ name, img, amount, onClick }) {
    return (
        <form className="friends-form">
            <li className="friends-grid-container">
                <div className="image-selected-friend">
                    <img alt="name" className="image-select" src={img}></img>
                </div>
                <div className="name-selected-friend-text">
                    <h3>{name}</h3>
                    <p>
                        {amount < 0 ? (
                            <p className="red">
                                you owe {name} {Math.abs(amount)}€
                            </p>
                        ) : amount > 0 ? (
                            <p className="green">
                                {name} owes you {amount}€
                            </p>
                        ) : (
                            <p>you are even</p>
                        )}
                    </p>
                </div>
                <Button onClick={onClick}>select</Button>
            </li>
        </form>
    );
}
