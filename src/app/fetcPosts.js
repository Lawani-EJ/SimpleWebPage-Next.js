export async function fetchAllPost() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if(!res.ok) {
            throw new Error("Failed to get posts");
        }
        return await res.json();
}

export async function fetchOnePost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!res.ok) {
        throw new Error("Failed to get single posts");
    }
    return await res.json();
}