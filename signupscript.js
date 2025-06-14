document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const GAS_URL = 'https://script.google.com/macros/s/AKfycbxjFVMVn9utG4oDLEUKQsQkx-zU-dNwq9HZfDHO5V9SASzlk-xlzc__cMf4jB1ERFLing/exec';

    // ここを変える！！
    const params = new URLSearchParams({
        username: username,
        email: email,
        password: password
    });

    try {
        const response = await fetch(GAS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
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
