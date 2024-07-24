/**
 * Copy the selected content to the clipboard
 */
function CopyToClipboard() {
    let selection = window.getSelection();
    navigator.clipboard.writeText(selection.toString());
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'c') {
        CopyToClipboard();
    }
});

let cnt = document.getElementById("content_views");
cnt.addEventListener('copy', function(event) {
    CopyToClipboard();
});
