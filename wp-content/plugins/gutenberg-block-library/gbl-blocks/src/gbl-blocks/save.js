export default function save({ attributes }) {
    return (
        <div>
            <h4>{attributes.question}</h4>
            <p>{attributes.answer}</p>
        </div>
    );
}
