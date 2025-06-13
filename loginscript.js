document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'test' && password === '1234') {
        alert('ログイン成功！');
        window.location.href = 'casino.html'; // 次の画面へ
    } else {
        alert('ログイン失敗。ユーザー名またはパスワードを確認してください。');
    }
});
