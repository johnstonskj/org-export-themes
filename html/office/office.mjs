"use strict";

import renderMathInElement from 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.mjs';

export default function initMath(options) {
    const KATEX_MACROS = document.KATEX_MACROS || {};
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
            macros: KATEX_MACROS
        });
    });
}
