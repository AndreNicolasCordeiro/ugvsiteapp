let ctx04 = document.querySelector("#revenueChart04");
let revChart04 = new Chart(ctx04,{
  type: "doughnut",
  data: {
    labels: ["Matemática", "Programação", "Hardware", "Design"],
    datasets: [
      {
        label: "Programação",
        borderColor: "black",
        borderWidth: "1",
        backgroundColor: [
          "#15398d",
          "#4663a5",
          "#91a2c9",
          "#c1cbe1",
          "#ffffff",
        ],
        data: [20, 20, 20, 20],
      }
    ]
  },
  options: {
    responsive: true,
    tooltips: {
      intersect: false,
      node: "index",
    }
  }
});