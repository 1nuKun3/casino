document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const idVerification = document.getElementById('idVerification').files[0];

    if (username && email && password && idVerification) {
        alert('アカウント登録成功！');
        window.location.href = 'casino.html'; // 登録完了後のリダイレクト
    } else {
        alert('入力内容を確認してください。');
    }
});
