function SignPlayer(canvas, ctx, options) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.symbols = options.symbols;
  this.fontSize = options.fontSize || 60;
  this.lineHeight = options.lineHeight || 1.5;

  this.play = function(text) {
    this.clearCanvas();
    let x = 0;
    let y = this.fontSize;
    for (let i = 0; i < text.length; i++) {
      const symbol = this.symbols[text[i]];
      if (symbol) {
        this.drawSymbol(symbol, x, y);
      }
      x += this.fontSize;
      if (x > this.canvas.width - this.fontSize) {
        x = 0;
        y += this.fontSize * this.lineHeight;
      }
    }
  };

  this.clearCanvas = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  this.drawSymbol = function(symbol, x, y) {
    this.ctx.font = this.fontSize + "px Arial";
    this.ctx.fillText(symbol, x, y);
  };
}
