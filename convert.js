
function convertToUnit(inches, unit) {
    switch (unit) {
      case "-mm":
        return inches * 25.4;
      case "-cm":
        return inches * 2.54;
      case "-m":
        return inches * 0.0254;
      default:
        return "Invalid unit. Use -mm, -cm, or -m.";
    }
  }
  
  function runTests() {
    console.log("Running tests...");
  
    const testCases = [
      { inches: 3, unit: "-mm", expected: 76.2 },
      { inches: 3, unit: "-cm", expected: 7.62 },
      { inches: 3, unit: "-m", expected: 0.0762 },
      { inches: 5, unit: "-mm", expected: 127 },
      { inches: 5, unit: "-cm", expected: 12.7 },
      { inches: 5, unit: "-m", expected: 0.127 },
    ];
  
    testCases.forEach((testCase, index) => {
      const result = convertToUnit(testCase.inches, testCase.unit);
      const status = result === testCase.expected ? "Pass" : "Fail";
      console.log(`Test ${index + 1}: ${status}`);
    });
  }
  
  if (process.argv.includes("-t")) {
    runTests();
  } else if (process.argv.length === 4) {
    const inches = parseFloat(process.argv[2]);
    const unit = process.argv[3];
  
    if (!isNaN(inches)) {
      const result = convertToUnit(inches, unit);
      console.log(`${result.toFixed(2)} ${unit}`);
    } else {
      console.log("Invalid input. Please provide a valid number of inches.");
    }
  } else {
    console.log("Usage: node convert.js <inches> <unit>");
    console.log("Example: node convert.js 3 -cm");
    console.log("Use -t flag to run tests.");
  }
  