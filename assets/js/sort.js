function sortList() {
  const ul = document.getElementById('nameList');
  const items = ul.getElementsByTagName('li');
  const names = [];
  
  for (let i = 0; i < items.length; i++) {
    names.push(items[i].textContent);
  }
  
  for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length; j++) {
      if (names[i] > names[j]) {
        const temp = names[i];
        names[i] = names[j];
        names[j] = temp;
      }
    }
  }
  
  ul.innerHTML = '';
  for (let i = 0; i < names.length; i++) {
    const li = document.createElement('li');
    li.textContent = names[i];
    ul.appendChild(li);
  }
}