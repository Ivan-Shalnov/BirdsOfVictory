import { scroll } from './common';
import ClipboardJS from 'clipboard';

// COPY ACCOUNT NUMBER TO CLIPBOARD
{
  const buttons = document.querySelectorAll('[data-clipboard-text]');
  const clipboard = new ClipboardJS(buttons);
  // Message on success
  clipboard.on('success', function (e) {
    showHideMessage(e.trigger);
    setTimeout(showHideMessage, 1000, e.trigger);
  });
  function showHideMessage(btn) {
    btn.classList.toggle('sucessfull');
  }
}
// COPY ACCOUNT NUMBER TO CLIPBOARD
