async function fetchData() {
    try {
        const response = await fetch ('https;/jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new error (HTTP error! status; ${response.status});
        }
    }
}