const peopleSelect = document.getElementById('people-select');
const szamElements = document.querySelectorAll('#szam');

peopleSelect.addEventListener('change', (e) => {
  console.log('Event listener triggered!');
  const peopleCount = parseInt(e.target.value);
  console.log(`peopleCount: ${peopleCount}`);
  szamElements.forEach((element) => {
    console.log(`Processing element: ${element.textContent}`);
    const currentValue = parseFloat(element.textContent);
    const newValue = currentValue * peopleCount;
    element.textContent = newValue.toString();
  });
});