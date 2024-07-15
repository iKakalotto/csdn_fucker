document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'c') {
        // Copy the selected content to the clipboard
        let selection = window.getSelection();
        navigator.clipboard.writeText(selection.toString());
    }
});
