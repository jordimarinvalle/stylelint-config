(() => {
    const generator = new StyleLintOncogene(options);
    const dismissBtn = document.querySelector('.js-dismiss-btn');
    const resetBtn = document.querySelector('.js-reset-btn');
    const backBtn = document.querySelector('.js-back-btn');

    backBtn.addEventListener('click', () => {
        generator.prevStep();
    });
})();
