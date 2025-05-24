function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchInput = document.getElementById('searchField').value.toLowerCase();
      
      const tableRows = document.querySelectorAll('.container tbody tr');
      
      tableRows.forEach(row => {
         row.classList.remove('select');
      });
      
      if (!searchInput) {
         return;
      }

      tableRows.forEach(row => {
      
         const cells = row.querySelectorAll('td');
         let foundMatch = false; // Флаг для отслеживания совпадений
         
         cells.forEach(cell => {
            const cellText = cell.textContent.toLowerCase();
            
            if (cellText.includes(searchInput)) {
               foundMatch = true;
            }
         });
         
         if (foundMatch) {
            row.classList.add('select');
         }
      });
      
      document.getElementById('searchField').value = '';
   }
}