
window.onload = startGeneration;

function startGeneration() {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#middleNameOutput').innerText = initPerson.middleName;
    document.querySelector('#birthMonthOutput').innerText = initPerson.birthMonth;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#professionOutput').innerText = initPerson.profession;

};

document.querySelector('#btnClear').addEventListener('click', function() {
    document.querySelector('#firstNameOutput').innerText = 'Имя';
    document.querySelector('#surnameOutput').innerText = "Фамилия";
    document.querySelector('#middleNameOutput').innerText = "Отчество";
    document.querySelector('#birthMonthOutput').innerText = "Месяц";
    document.querySelector('#birthYearOutput').innerText = "Год";
    document.querySelector('#genderOutput').innerText = "Пол";
    document.querySelector('#professionOutput').innerText = "Профессия";
})

document.querySelector('#btnRetry').addEventListener('click', startGeneration);