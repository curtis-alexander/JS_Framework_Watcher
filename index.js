/* global Chart, axios */

axios.get('https://api.github.com/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Stars', 'Watchers', 'Forks', 'Popularity'],
    datasets: [{
      label: '# of Votes',
      data: [5, 19, 3, 8, 22, 13],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 2)',
        'rgba(54, 162, 235, 2)',
        'rgba(255, 206, 86, 2)',
        'rgba(75, 192, 192, 2)',
        'rgba(153, 102, 255, 2)',
        'rgba(255, 159, 64, 2)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});