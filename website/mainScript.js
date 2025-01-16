async function fetchKeys() {
    try {
        const response = await fetch("./keysBase.Json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching keys:', error);
    }
}

function displayKeys(keys) {
    const keyItems = document.getElementById('keyItems');
    keyItems.innerHTML = ''; // Clear existing items

    keys.forEach(school => {
        const schoolName = document.createElement('h2');
        schoolName.textContent = school.school;
        keyItems.appendChild(schoolName);

        const keyList = document.createElement('ul');
        school.Data.forEach(keyData => {
            const keyItem = document.createElement('li');
            keyItem.textContent = `Klucz: ${keyData.key}, Pożyczył: ${keyData.Name}, Data Wzięcia: ${keyData.KeyTakenDate}, Czas Wzięcia: ${keyData.KeyTakenTime}`;
            keyList.appendChild(keyItem);
        });
        keyItems.appendChild(keyList);
    });
}

async function init() {
    const keys = await fetchKeys();
    displayKeys(keys);
}

window.onload = init;