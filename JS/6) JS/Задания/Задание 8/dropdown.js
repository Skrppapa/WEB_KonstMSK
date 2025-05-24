function addItem() {
    // Получаем элементы ввода текста и значения
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    
    // Получаем элемент select (выпадающий список)
    const menu = document.getElementById('menu');
    
    // Проверяем, что оба поля не пустые
    if (textInput.value.trim() === '' || valueInput.value.trim() === '') {
        return; // Если хотя бы одно поле пустое, ничего не делаем
    }
    
    // Создаем новый элемент option
    const newOption = document.createElement('option');
    
    // Устанавливаем текст и значение для нового option
    newOption.textContent = textInput.value;
    newOption.value = valueInput.value;
    
    // Добавляем новый option в select
    menu.appendChild(newOption);
    
    // Очищаем поля ввода после добавления
    textInput.value = '';
    valueInput.value = '';
}