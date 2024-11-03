// ini javascript
// membuat konstanta
const calculateBMIButton = document.getElementById('calculate-bmi');
const resetButton = document.getElementById('reset');
const resultTextElement = document.getElementById('resultText');
const resultNumberElement = document.getElementById('resultNumber')
const resultDetailsElement = document.getElementById('resultDetails');
const linksElement = document.getElementById('links');
const containerElement = document.getElementById('container');
// mengakses button
calculateBMIButton.addEventListener('click', calculateBMI);
resetButton.addEventListener('click', resetForm);
// menimbulkan fungsi
function calculateBMI(event) {
    event.preventDefault();
    const jenisKelamin = document.getElementById('jenis-kelamin').value;
    const beratBadan = parseInt(document.getElementById('berat-badan').value);
    const usia = parseInt(document.getElementById('usia').value);
    const tinggiBadan = parseInt(document.getElementById('tinggi-badan').value);
    const bmi = calculateBMIValue(beratBadan, tinggiBadan);
// memproses data form
    resultTextElement.textContent = `BMI kamu adalah ${bmi.toFixed(2)}`;
    resultNumberElement.textContent = `${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        resultDetailsElement.textContent = `Anda kekurangan berat badan. Anda harus mempertimbangkan untuk menambah berat badan untuk meningkatkan kesehatan Anda`;
    } else if (bmi <= 24.9) {
        resultDetailsElement.textContent = `Anda memiliki berat badan normal. Selamat! Anda memiliki berat badan yang sehat.`;
    } else if (bmi <=29.9) {
        resultDetailsElement.textContent = `Anda kelebihan berat badan. Anda harus mempertimbangkan untuk menurunkan berat badan untuk meningkatkan kesehatan Anda.`;
    } else {
        resultDetailsElement.textContent = `Anda obesitas. Anda harus mempertimbangkan untuk menurunkan berat badan untuk meningkatkan kesehatan Anda.`;
    }

    linksElement.innerHTML = `Untuk informasi lebih lanjut, konsultasikan dengan profesional kesehatan. <a href="https://play.google.com/store/apps/details?id=com.example.bmicalculator" target="_blank">Unduh aplikasi kami di Google Play</a> or <a href="https://apps.apple.com/us/app/bmi-calculator/id123456789" target="_blank">App Store</a>.`;
    }

    function resetForm(event) {
        event.preventDefault();
        document.getElementById('berat-badan').value = '';
        document.getElementById('usia').value = '';
        document.getElementById('tinggi-badan').value = '';
        resultTextElement.textContent = '';
        resultNumberElement.textContent = '';
        resultDetailsElement.textContent = '';
        linksElement.innerHTML = '';
    }

    function calculateBMIValue(beratBadan, tinggiBadan) {
        return beratBadan / Math.pow(tinggiBadan / 100, 2);
    }