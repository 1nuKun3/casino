document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const usernameOrEmail = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // GASのWebアプリURLに書き換えてください
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbzsLAH1pqoKZgdjWfcdnE_FBgahMQSaxUszJKB3ui3HD0nrbhqxgcAIfl_RHE7M5l8Blg/exec';

    // クエリパラメータを作成
    const params = new URLSearchParams({
        email: usernameOrEmail,
        password: password
    });

    try {
        const response = await fetch(`${GAS_URL}?${params.toString()}`);
        const data = await response.json();

        if (data.result === 'success') {
            // ログイン成功時、ユーザー名・メールアドレスをlocalStorageに保存
            localStorage.setItem('casino_username', data.username);
            localStorage.setItem('casino_email', usernameOrEmail);
            window.location.href = 'casino.html';
        } else {
            alert('ログイン失敗：' + (data.message || 'ユーザー名またはパスワードが違います。'));
        }
    } catch (e) {
        alert('通信エラーが発生しました。');
    }
});
