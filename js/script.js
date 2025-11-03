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

window.addEventListener('pageshow', function(event) {
  const mainText = document.querySelector('.main-text');
  if (mainText) {
    // 戻るボタンやリロード時にも毎回リセット
    mainText.classList.remove('show');
    void mainText.offsetWidth; // 再描画
    setTimeout(() => {
      mainText.classList.add('show');
    }, 400);
  }
});