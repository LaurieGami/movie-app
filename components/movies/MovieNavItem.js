export default function MovieNavItem({ handleClick, isActive, children }) {
    return (
        <li>
            <button
                onClick={handleClick}
            >
                {children}
            </button>
        </li>
    )
}