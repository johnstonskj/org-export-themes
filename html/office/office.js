function initMath() {
    const KATEX_MACROS = KATEX_MACROS || {};
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
            macros: KATEX_MACROS
        });
    });
}
