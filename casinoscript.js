const GAS_URL = 'https://script.google.com/macros/s/AKfycbxjFVMVn9utG4oDLEUKQsQkx-zU-dNwq9HZfDHO5V9SASzlk-xlzc__cMf4jB1ERFLing/exec';

async function fetchBalance() {
    const email = localStorage.getItem('casino_email');
    if (!email) {
        alert('ログイン情報がありません。再度ログインしてください。');
        window.location.href = 'login.html';
        return;
    }
    try {
        const params = new URLSearchParams({
            email: email,
            action: 'getBalance'
        });
        const response = await fetch(`${GAS_URL}?${params.toString()}`);
        const data = await response.json();

        if (data.result === 'success') {
            document.querySelector('.balance').textContent = `残高: ¥${data.balance}`;
            document.querySelector('.user-info').textContent = `ようこそ, ${data.username}`;
        } else {
            document.querySelector('.balance').textContent = '残高取得失敗';
        }
    } catch (e) {
        document.querySelector('.balance').textContent = '通信エラー';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    fetchBalance();
    setInterval(fetchBalance, 500); // 10秒ごとに残高を自動更新
});
