export default function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className="btn select">
            {children}
        </button>
    );
}
