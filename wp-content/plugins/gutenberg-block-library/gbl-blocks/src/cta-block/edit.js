import { TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    return (
        <>
            <TextControl
                label="CTA Text"
                value={attributes.text}
                onChange={(v) => setAttributes({ text: v })}
            />
            <TextControl
                label="Button Text"
                value={attributes.button}
                onChange={(v) => setAttributes({ button: v })}
            />
        </>
    );
}
