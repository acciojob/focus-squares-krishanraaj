//your JS code here. If required.
const squares = document.querySelectorAll('.focus-sq');

squares.forEach(square => {
  square.addEventListener('mouseenter', () => {document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll('.focus-sq');

  squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
      squares.forEach(sq => {
        if (sq !== square) {
          sq.style.backgroundColor = '#6F4E37'; // Coffee
        }
      });
    });

    square.addEventListener('mouseleave', () => {
      squares.forEach(sq => {
        sq.style.backgroundColor = '#E6E6FA'; // Lavender
      });
    });
  });
});

    squares.forEach(sq => {
      if (sq !== square) {
        sq.style.backgroundColor = '#6F4E37'; // Coffee
      }
    });
  });

  square.addEventListener('mouseleave', () => {
    squares.forEach(sq => {
      sq.style.backgroundColor = '#E6E6FA'; // Lavender
    });
  });
});
