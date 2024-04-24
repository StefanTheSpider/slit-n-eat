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
    /**
     *! Hier wird der State für das öfnen und schlißen des Moduls "Freund hinzufügen" gesetzt
     */
    const [openAddFriend, setOpenAddFriend] = useState(false);
    /**
     *! Hier wird der State für das öfnen und schlißen des Moduls "Freund hinzufügen" gesteuert
     */
    function handleOpenAddFriend() {
        setOpenAddFriend((show) => !show);
    }

    const [selectedFriends, setSelectedFriends] = useState(null);

    function handleSelections(friend) {
        setSelectedFriends((selected) =>
            selected?.id === friend.id ? null : friend
        );
        setOpenAddFriend(false);
    }

    return (
        <div className="app-container">
            <div className="first-half">
                <FriendsList
                    friends={friends}
                    onSelections={handleSelections}
                    selectedFriends={selectedFriends}
                />

                {openAddFriend && (
                    <AddFriend
                        onAddFriendButton={handleOpenAddFriend}
                        onAddFriend={handleAddFriend}
                    />
                )}

                <Button onClick={handleOpenAddFriend}>
                    {!openAddFriend ? 'add a friend' : 'close'}
                </Button>
            </div>
            {selectedFriends && <SplitWith selectedFriends={selectedFriends} />}
        </div>
    );
}

function FriendsList({ friends, onSelections, selectedFriends }) {
    return (
        <div className="friends-container">
            <ul>
                {friends.map((friend) => (
                    <Friends
                        friend={friend}
                        key={friend.id}
                        onSelections={onSelections}
                        onSelectedFriends={selectedFriends}
                    />
                ))}
            </ul>
        </div>
    );
}

function Friends({ friend, onSelections, onSelectedFriends }) {
    const isSelected = onSelectedFriends?.id === friend.id;
    console.log(isSelected);

    return (
        <div className={isSelected ? 'selected' : 'friends-form'}>
            <li className="friends-grid-container">
                <div className="image-selected-friend">
                    <img
                        alt="name"
                        className="image-select"
                        src={friend.image}
                    ></img>
                </div>
                <div className="name-selected-friend-text">
                    <h3>{friend.name}</h3>
                    <div>
                        {friend.amount < 0 ? (
                            <p className="red">
                                you owe {friend.name} {Math.abs(friend.amount)}€
                            </p>
                        ) : friend.amount > 0 ? (
                            <p className="green">
                                {friend.name} owes you {friend.amount}€
                            </p>
                        ) : (
                            <p>you are even</p>
                        )}
                    </div>
                </div>
                <Button onClick={() => onSelections(friend)}>
                    {isSelected ? 'close' : 'select'}
                </Button>
            </li>
        </div>
    );
}
