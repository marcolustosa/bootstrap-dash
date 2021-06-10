var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago'],
        datasets: [{
            label: 'Codes',
            fill: false,
            data: [62, 80, 60, 75, 70, 82, 72, 87,],
            borderColor: 'rgb(48, 99, 255)',
            tension: 0.4
    }]
    },
    options: {
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        },
      }
});
