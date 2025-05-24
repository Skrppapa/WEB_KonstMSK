function solve() {
    
  const textInput = document.getElementById('text').value;
  const conventionInput = document.getElementById('naming-convention').value;
  const res = document.getElementById('result');
  
  if (conventionInput !== 'Pascal Case' && conventionInput !== 'Camel Case') {
      res.textContent = 'Error!';
      return;
  }
  
  const txt = textInput.split(' ');
  let result = '';
  
  for (let i = 0; i < txt.length; i++) {
      const word = txt[i];
      if (word.length === 0) continue;

      const processedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
      
      if (i === 0 && conventionInput === 'Camel Case') {
          result += processedWord[0].toLowerCase() + processedWord.slice(1);
      } else {
          result += processedWord;
      }
  }
  
  res.textContent = result;
}