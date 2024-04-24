import Button from './Button';
import { useState } from 'react';

export default function AddFriend({ onAddFriend, onAddFriendButton }) {
    const [name, setName] = useState('');
    const [image, setImg] = useState('');

    function handleSubmit(e) {
        e.preventDefault(); /* verhindert, dass die Seite neu geladen wird(weil wir nur rendern wollen) */
        if (!name || !image) return;
        const newFriend = {
            name,
            image,
            amount: 0,
            id: crypto.randomUUID(),
        };
        onAddFriend(newFriend);
        setImg('');
        setName('');
        onAddFriendButton(false);
    }

    return (
        <form className="add-friend-container" onSubmit={handleSubmit}>
            <div>
                <div className="first-input">
                    <p>👫 Friend name</p>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className="second-input">
                    <p>🌃 Image URL</p>
                    <input
                        value={image}
                        type="url"
                        onChange={(e) => setImg(e.target.value)}
                    ></input>
                </div>
            </div>
            <Button>add</Button>
        </form>
    );
}
