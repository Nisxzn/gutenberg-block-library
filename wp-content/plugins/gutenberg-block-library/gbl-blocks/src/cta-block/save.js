export default function save({ attributes }) {
    return (
        <div>
            <h3>{attributes.text}</h3>
            <button>{attributes.button}</button>
        </div>
    );
}
