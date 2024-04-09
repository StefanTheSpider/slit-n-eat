export default function Button({
    children,
    onHandlerOpenModule,
    onHandlerOpenAddFriend,
}) {
    return (
        <button
            onClick={(onHandlerOpenModule, onHandlerOpenAddFriend)}
            className="btn select"
        >
            {children}
        </button>
    );
}
