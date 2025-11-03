window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const title = section.querySelector('.title');
    const underline = section.querySelector('.underline');
    if (!title || !underline) return; // タイトルや線がないセクションはスキップ

    const rect = title.getBoundingClientRect();

    if (rect.top < windowHeight * 0.9) {
      title.classList.add('show');
      underline.classList.add('show');
    }
  });
});

window.addEventListener('DOMContentLoaded', function() {
  const mainText = document.querySelector('.main-text');
  if (mainText) {
    setTimeout(() => {
      mainText.classList.add('show');
    }, 400); // ← 1.2秒後にフェードイン（太陽が落ちる動きに合わせて調整OK）
  }
});