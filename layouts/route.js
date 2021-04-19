export default function route({ children, frontMatter }) {
    return (
        <div className="routes-container">
            <div className="text-white max-w-7xl">{children}</div>
        </div>
    );
}
