import { useEffect, useState } from '@wordpress/element';

export default function Edit() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/wp-json/wp/v2/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div>
            <h3>Latest Posts</h3>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title.rendered}</li>
                ))}
            </ul>
        </div>
    );
}
