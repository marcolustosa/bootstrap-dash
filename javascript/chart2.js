var ctx = document.getElementById('myChart2');

var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ['Fev','Mar', 'Abr','Mai'],
        datasets: [{
        data: [52, 42, 88, 99],
         borderColor: 'rgb(196, 0, 0)',
         tension: 0.1
    }]
    },
    options: {
        plugins: {
            legend: {
              display: false
            }
          },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false,
              
            }
          }
        },
      }
});
