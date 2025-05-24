function toggle() {

    const content = document.getElementById('extra');
    const button = document.querySelector('.button');
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = 'Less';
    } else {
        content.style.display = 'none';
        button.textContent = 'More';
    }
}