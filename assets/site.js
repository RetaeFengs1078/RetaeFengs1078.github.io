document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const citation = document.getElementById(button.dataset.copy);
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(citation.textContent.trim());
      button.textContent = 'Copied';
      status.textContent = 'BibTeX citation copied to clipboard.';
      window.setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 2000);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(citation);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = 'Text selected';
      status.textContent = 'Citation selected. Copy the selected text, or download the BibTeX file.';
    }
  });
});
