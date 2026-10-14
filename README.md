☀️ SolarPower Calculator

A web-based application that estimates solar energy production and compares it with household electricity demand.

🚀 Live Demo: "Open SolarPower Calculator" (https://somemmanuelegyir.github.io/Solar-Panels---calculator-/)

📌 About the Project

SolarPower Calculator is a learning project that combines web development with basic renewable energy concepts.

The application estimates how much electricity a solar system can generate based on its capacity, peak sunlight hours, and system efficiency. It also compares estimated solar production with daily household energy demand.

✨ Features

- ☀️ Daily Energy Production: Estimates electricity generated per day in kilowatt-hours (kWh).
- 📅 Monthly Energy Production: Estimates production over 30 days.
- 🏠 Household Demand Coverage: Estimates the percentage of daily household demand covered by solar production, capped at 100%.
- ⚡ Daily Energy Balance: Shows the estimated difference between solar production and household demand.
- ✅ Input Validation: Checks input values and displays an error message when values are invalid.
- 🔄 Interactive Calculations: Updates results when users submit their inputs.

🧮 Calculation Formulas

1. Daily Energy Production

Daily Energy (kWh) = Solar Capacity (kW) × Peak Sunlight Hours × System Efficiency

System efficiency is converted from a percentage to a decimal before calculation.

Example:

1 kW × 5 hours × 0.80 = 4 kWh per day

2. Monthly Energy Production

Monthly Energy (kWh) = Daily Energy Production × 30

Example: 4 × 30 = 120 kWh per month

3. Household Demand Coverage

Demand Coverage (%) = (Daily Energy Production ÷ Daily Household Demand) × 100

The displayed percentage is capped at 100%.

4. Daily Energy Balance

Energy Balance (kWh) = Daily Energy Production − Daily Household Demand

- Positive: Estimated energy surplus.
- Zero: Estimated production equals demand.
- Negative: Estimated energy shortfall.

🛠️ Technologies Used

- HTML5: Web page structure.
- CSS3: Styling and layout.
- JavaScript: Calculations, validation, and interactive functionality.
- GitHub: Source code hosting and version control.
- GitHub Pages: Website deployment.

🚀 How to Use

1. Open the "live calculator" (https://somemmanuelegyir.github.io/Solar-Panels---calculator-/).
2. Enter solar system capacity in kW.
3. Enter peak sunlight hours per day.
4. Enter system efficiency as a percentage.
5. Enter daily household electricity demand in kWh.
6. Tap Calculate Solar Energy.
7. Review the estimated daily energy, monthly energy, demand coverage, and daily energy balance.

📚 Skills Demonstrated

Through this project, I practised:

- Developing a web application with HTML, CSS, and JavaScript.
- Translating mathematical formulas into executable code.
- Working with numerical inputs and unit conversions.
- Implementing input validation and error handling.
- Debugging JavaScript and testing application functionality.
- Managing files and changes using GitHub.
- Deploying a website through GitHub Pages.
- Applying basic renewable energy calculations to a practical project.

⚠️ Limitations

This calculator provides simplified estimates for educational and preliminary planning purposes.

Actual solar output depends on geographic location, seasonal sunlight, weather, shading, panel orientation, temperature, and system losses.

A daily demand coverage of 100% does not necessarily mean a household can operate entirely on solar power at every hour. This calculator does not model battery storage, hourly demand, or detailed equipment specifications.

The results do not replace professional solar system design or electrical assessment.

👨‍💻 Developer

Som Emmanuel Egyir

Aspiring Electrical Engineer | Technology and Renewable Energy Enthusiast

Interested in electrical engineering, renewable energy, software development, artificial intelligence, and practical technology solutions.

This project reflects my interest in learning by building practical applications and exploring how technology can support energy awareness.

🔗 Project Links

- Live Application: "SolarPower Calculator" (https://somemmanuelegyir.github.io/Solar-Panels---calculator-/)
- Source Code: "GitHub Repository" (https://github.com/somemmanuelegyir/Solar-Panels---calculator-/)

---

Built as a learning project exploring the intersection of web development and solar energy.
