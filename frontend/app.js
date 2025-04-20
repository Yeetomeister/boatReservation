// app.js
async function bookDate(date, user) {
    const response = await fetch('/api/book', {
        method: 'POST',
        body: JSON.stringify({ date, user })
    });
    return response.json();
}