const ctx2 = document.getElementById('doughnut').getContext('2d');
const doughnut = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Binance', 'Litecoin', 'Dogecoin'],
        datasets: [{
            label: '# of coins',
            data: [37, 31, 31],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
    }
});