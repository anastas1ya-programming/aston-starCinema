export function Fallback({ error }) {
    return (
        <div className="container" role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>{error.message}</pre>
        </div>
    );
}