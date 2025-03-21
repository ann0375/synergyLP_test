
document.addEventListener("DOMContentLoaded", function () {
    // 例えば「pタグ」「imgタグ」など特定の要素にアニメーションを適用
    const fadeElements = document.querySelectorAll("p, img, h1, h2, h3, button, .fadeup-target"); 

    // IntersectionObserverの設定
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // entry.targetが.no-animationクラスを持つ親要素内に含まれている場合、アニメーションしない
            if (entry.isIntersecting && !entry.target.closest(".no-animation")) {
                entry.target.classList.add("active"); // 画面に入ったらクラス追加
                observer.unobserve(entry.target); // 1回だけ実行
            }
        });
    }, { threshold: 0.3 });

    // fadeElementsの各要素を監視
    fadeElements.forEach((el) => observer.observe(el));
});




