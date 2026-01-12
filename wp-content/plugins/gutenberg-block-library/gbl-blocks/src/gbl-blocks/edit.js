import { TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    return (
        <div>
            <TextControl
                label="Question"
                value={attributes.question}
                onChange={(val) => setAttributes({ question: val })}
            />
            <TextControl
                label="Answer"
                value={attributes.answer}
                onChange={(val) => setAttributes({ answer: val })}
            />
        </div>
    );
}
