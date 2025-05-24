function lockedProfile() {

    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
 
            const profile = this.parentNode;
            
            const isLocked = profile.querySelector('input[value="lock"]').checked;
            
            if (isLocked) {
                return;
            }
            
            // Скрытые поля в текущем профиле
            const hiddenFields = profile.querySelector('div[id$="HiddenFields"]');
            
            if (hiddenFields.style.display === 'block') {
                hiddenFields.style.display = 'none';
                this.textContent = 'Show more';
            } else {
                hiddenFields.style.display = 'block';
                this.textContent = 'Hide it';
            }
        });
    });
}