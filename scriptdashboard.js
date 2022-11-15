let ctx = document.querySelector("#revenueChart");
let revChart = new Chart(ctx,{
  type: "line",
  data: {
    labels: ["Nov 1", "Nov  12", "Nov  18", "Nov  21","Nov  30"],
    datasets: [
      {
        label: "Interação Humano Máquina",
        borderColor: "green",
        borderWidth: "3",
        backgroundColor: "rgba(235, 247, 245, 0.5)",
        data: [3.0, 0.5, 1.0, 1.5, 4.0]
      },
      {
        label: "Programação",
        borderColor: "blue",
        borderWidth: "3",
        backgroundColor: "rgba(235, 228, 255, 0.5)",
        data: [0.5,1.0,3.0,2.5,3.0]
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

let ctx02 = document.querySelector("#revenueChart02");
let revChart02 = new Chart(ctx02,{
  type: "line",
  data: {
    labels: ["Nov 1", "Nov  12", "Nov  18", "Nov  21","Nov  30"],
    datasets: [
      {
        label: "Interação Humano Máquina",
        borderColor: "green",
        borderWidth: "3",
        backgroundColor: "rgba(235, 247, 245, 0.5)",
        data: [3.0, 0.5, 1.0, 1.5, 4.0]
      },
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

let ctx03 = document.querySelector("#revenueChart03");
let revChart03 = new Chart(ctx03,{
  type: "line",
  data: {
    labels: ["Nov 1", "Nov  12", "Nov  18", "Nov  21","Nov  30"],
    datasets: [
      {
        label: "Programação",
        borderColor: "blue",
        borderWidth: "3",
        backgroundColor: "rgba(235, 228, 255, 0.5)",
        data: [0.5,1.0,3.0,2.5,3.0]
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

