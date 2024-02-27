//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  let inputs = document.querySelectorAll('.code');
  inputs[0].focus(); 
  inputs.forEach((input, index) => {
    input.setAttribute('maxLength', 1);

    input.addEventListener('input', () => {
      if (input.value.trim()) {
        if (index + 1 < inputs.length) {
          inputs[index + 1].focus();
          inputs[index + 1].value = '';
        }
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && index > 0) {
        // Handle Backspace key: move focus to the previous input
        inputs[index].value = '';
        inputs[index - 1].focus();
      }
    });
  });
});
