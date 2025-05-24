function search() {
    
    const searchText = $('#searchText').val().toLowerCase();
    let matches = 0;
    
   $('#towns li').each(function() {
      $(this).html($(this).text());
    });
    
    // Ищем совпадения и форматируем
    $('#towns li').each(function() {
        const itemText = $(this).text().toLowerCase();
        if (searchText && itemText.includes(searchText)) {
            const originalText = $(this).text();
            // Текст с выделением совпадения
            const highlightedText = originalText.replace(
                new RegExp(searchText, 'gi'),
                match => `<strong><u>${match}</u></strong>`
            );
            $(this).html(highlightedText);
            matches++;
        }
    });
    
    $('#result').text(matches + ' matches found');
}