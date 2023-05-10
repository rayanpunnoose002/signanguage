const canvas = document.getElementById('sign-canvas');
const ctx = canvas.getContext('2d');

function convertToSignLanguage() {
  const textInput = document.getElementById('text-input').value;
  const options = {
    symbols: {
      A: '✌️',
      B: '👈',
      C: '🤘',
      D: '🤚',
      E: '🤙',
      F: '✋',
      G: '🤛',
      H: '🖐',
      I: '🤞',
      J: '✊',
      K: '👊',
      L: '👍',
      M: '👆',
      N: '👇',
      O: '👌',
      P: '👎',
      Q: '🤝',
      R: '☝️',
      S: '🖖',
      T: '👋',
      U: '🙌',
      V: '🤜',
      W: '👐',
      X: '👉',
      Y: '👏',
      Z: '🙏',
    },
    fontSize: 60,
    lineHeight: 1.5,
  };
  const player = new SignPlayer(canvas, ctx, options);
  player.play(textInput.toUpperCase());
}
