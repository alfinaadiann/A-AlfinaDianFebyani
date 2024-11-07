function divideNumbers(num1, num2) {
    try {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            throw new Error("Input harus berupa angka.");
        }
  
        if (num2 === 0) {
            throw new Error("Pembagian dengan nol tidak diizinkan.");
        }
  
        return num1 / num2;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
  }
  
  function handleDivision() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
  
    const result = divideNumbers(num1, num2);
    document.getElementById("result").textContent = `Hasil: ${result}`;
    console.log("Hasil:", result);
  }