"use strict";

import renderMathInElement from 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.mjs';

export function initMath(options) {
    const KATEX_MACROS = document.KATEX_MACROS || {};
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
            macros: KATEX_MACROS
        });
    });
}

export default function init(options) {
    console.log("office::init");
}
