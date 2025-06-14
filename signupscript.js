document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // GASのWebアプリURLに書き換えてください
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbzUD96GRynJqkYmwoW1XQfDHtq5RgWQgzTuUkN9FJB833_l7Yf6qX3bsBqSgtx_GTisYw/exec';

    try {
        const response = await fetch(GAS_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, email, password})
        });
        const data = await response.json();

        if (data.result === 'success') {
            alert('登録が完了しました。ログインしてください。');
            window.location.href = 'login.html';
        } else {
            alert('登録失敗：' + (data.message || 'エラーが発生しました。'));
        }
    } catch (e) {
        alert('通信エラーが発生しました。');
    }
});
