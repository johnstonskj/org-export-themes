function initMath() {
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
            macros: {
                "\\Saft": "\\operatorname{\\blacksquare}",
                "\\Sbef": "\\operatorname{\\square}"
            }
        });
    });
}
