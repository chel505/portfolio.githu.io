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
    // リロード時に一度非表示状態を確実に作る
    mainText.classList.remove('show');
    void mainText.offsetWidth; // ← ブラウザに再描画を強制してリセット！

    // 少し遅れてアニメーション開始
    setTimeout(() => {
      mainText.classList.add('show');
    }, 400);
  }
});