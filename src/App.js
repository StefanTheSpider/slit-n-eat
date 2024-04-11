import { useState } from 'react';
import AddFriend from './AddFriend';
import Button from './Button';
import SplitWith from './SplitWith';

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
    {
        id: 3,
        image: 'https://www.superheldenfilme.net/wp-content/uploads/2020/04/venom-let-there-be-carnage-venom-2-heisst-nun-venom-let-there-be-carnage-und-kommt-8-monate-spaeter-ins-kino.jpg',
        name: 'Venom',
        amount: 0,
    },
];

export default function App() {
    const [openAddFriend, setOpenAddFriend] = useState(false);
    const [openSplitModule, setOpenSplitModule] = useState(false);

    function handleOpenAddFriend() {
        setOpenAddFriend((openFriend) => !openFriend);
    }

    function handleOpenSplitModule() {
        setOpenSplitModule((openModule) => !openModule);
    }

    return (
        <div className="app-container">
            <div className="first-half">
                <FriendsList></FriendsList>
                {openAddFriend && <AddFriend></AddFriend>}
                <Button onClick={handleOpenAddFriend}>add a friend</Button>
            </div>

            {!openSplitModule ? (
                <div className="split-with-container">
                    <SplitWith></SplitWith>
                    <Button>split bill</Button>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

function FriendsList() {
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
        <form className="friends-form">
            <li className="friends-grid-container">
                <div className="image-selected-friend">
                    <img alt="name" className="image-select" src={img}></img>
                </div>
                <div className="name-selected-friend-text">
                    <p>{name}</p>
                    <p>
                        {amount < 0 ? (
                            <p>
                                you owe {name} {Math.abs(amount)}€
                            </p>
                        ) : amount > 0 ? (
                            <p>
                                {name} owes you {amount}€
                            </p>
                        ) : (
                            <p>you are even</p>
                        )}
                    </p>
                </div>
                <Button>select</Button>
            </li>
        </form>
    );
}
