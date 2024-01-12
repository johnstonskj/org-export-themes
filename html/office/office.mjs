"use strict";

import katex from 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.mjs';

function initMath(options) {
    const KATEX_MACROS = document.KATEX_MACROS || {};
    document.addEventListener("DOMContentLoaded", function() {
        katex.renderMathInElement(document.body, {
            macros: KATEX_MACROS
        });
    });
}
