let balance = 0;
const transactions = [];

const updateBalance = () => {
    document.getElementById('balance').textContent = `₹${balance.toFixed(2)}`;
};

const deposit = () => {
    const amount = parseFloat(document.getElementById('depositAmount').value);
    if (amount > 0) {
        balance += amount;
        transactions.push(`Deposited: ₹${amount.toFixed(2)}`);
        updateBalance();
        alert('Deposit successful!');
    } else {
        alert('Please enter a valid amount.');
    }
    document.getElementById('depositAmount').value = '';
};

const withdraw = () => {
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        transactions.push(`Withdrew: ₹${amount.toFixed(2)}`);
        updateBalance();
        alert('Withdrawal successful!');
    } else {
        alert('Invalid amount or insufficient balance.');
    }
    document.getElementById('withdrawAmount').value = '';
};

const showHistory = () => {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = transactions.map(tx => `<li>${tx}</li>`).join('');
};

document.getElementById('dashboardBtn').onclick = () => switchSection('dashboard');
document.getElementById('depositBtn').onclick = () => switchSection('deposit');
document.getElementById('withdrawBtn').onclick = () => switchSection('withdraw');
document.getElementById('historyBtn').onclick = () => {
    showHistory();
    switchSection('history');
};

const switchSection = (sectionId) => {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
};

// Initialize
updateBalance();
