
const calculateButton = document.getElementById("calculate");

function calculateSolarEnergy() {
  const capacity = Number(document.getElementById("capacity").value);
  const sunHours = Number(document.getElementById("sunHours").value);
  const efficiency = Number(document.getElementById("efficiency").value);
  const demand = Number(document.getElementById("demand").value);

  const error = document.getElementById("error");

  if (
    !Number.isFinite(capacity) ||
    !Number.isFinite(sunHours) ||
    !Number.isFinite(efficiency) ||
    !Number.isFinite(demand) ||
    capacity <= 0 ||
    sunHours <= 0 ||
    sunHours > 12 ||
    efficiency <= 0 ||
    efficiency > 100 ||
    demand <= 0
  ) {
    error.textContent =
      "Enter valid values. Sunlight must be 1–12 hours, efficiency must be above 0 and at most 100%, and all other values must be positive.";
    return;
  }

  error.textContent = "";

  const dailyEnergy = capacity * sunHours * (efficiency / 100);
  const monthlyEnergy = dailyEnergy * 30;
  const coverage = (dailyEnergy / demand) * 100;
  const balance = dailyEnergy - demand;

  document.getElementById("daily").textContent =
    dailyEnergy.toFixed(2);

  document.getElementById("monthly").textContent =
    monthlyEnergy.toFixed(2);

  document.getElementById("coverage").textContent =
    coverage.toFixed(1);

  document.getElementById("balance").textContent =
    balance.toFixed(2);
}

calculateButton.addEventListener("click", calculateSolarEnergy);

// Calculate results when the page opens.
calculateSolarEnergy();
