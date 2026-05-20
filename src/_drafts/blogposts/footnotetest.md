---
title: "footnote test"
date: "2025-03-26"
categories: ["crafting","knitting"]
desc: "Showing off some stuff I've knitted."
readmore: true
---
<style>
/* FOOTNOTES */

/* FOOTNOTES */

/*article*/ main {    counter-reset: footnotes;
}

.footnotes {
    font-size:0.95em;
}

.footnotes a {
    text-decoration:underline;
}

a[aria-describedby="footnote-label"] {
    counter-increment: footnotes;
    color: var(--text) !important;
    cursor: default;
    text-decoration:none !important;
}

a[aria-describedby="footnote-label"]:hover {
    background:none;
    cursor:default;
}

a[aria-describedby="footnote-label"]:focus {
    background: var(--bgaccent);
    border-radius: 5px;
}

a[aria-describedby="footnote-label"]::after {
    content: '[' counter(footnotes) ']'; 
    vertical-align: super;
    font-size: 10pt;
    margin-left: 2px;
    text-decoration: underline;
    cursor: pointer;
    color: var(--link);
}

ol.footnotes a {
    text-decoration-thickness: 2px;
}

ol.footnotes a:hover, ol.footnotes a:focus {
    text-decoration-color: var(--linkhover);
    
}

.footnotes :target {
    background: var(--bgaccent);
    border-radius: 5px;
}
</style>

## Neque illa iecur Hyperborea vincula

Lorem markdownum laboret crimine litora fulvis mediis, conponere totis ne
**quam**, tu. Et vulnera Ino ventre ferinos. Ut exerceor, cum per!

<!-- excerpt -->

Neque corpore suis orbes stamina animam. Circa minuitque tamen [Iovemque radix](#1){ aria-describedby="footnote-label" #1-ref }
quondam, suum desint dubie! Cognosceret pater postquam denique obtulimus euhoe
longius quod, sua tandem erat collo, integer primus. Tu interritus minorque
Ossa.

Ante ipse tunc *veros bene*? Quam aut recessit patefecerat fulget: praemia
Memnonis nam, sed [creavit colore](#2){ aria-describedby="footnote-label" #2-ref } et indurat seque femineam cumque. Mutilatae
tulit cursu; *quem subii memorant* quaque adspicit ad sinus, dextras est laevum
pectora. Certa sat cum nostros mihi, esse velatus. Et alte qua.

1. Eductam ut undas vulnera venturaque quis innumeras
2. Felicia placuere viscera
3. Vasto rapit inplent miseranda pos

## Footnotes

<ol class="footnotes">
    <li id="1">
        Iovemque radix blah blah blah <a href="#1-ref" aria-label="Back to content">↩</a>
    </li>
    <li id="2">
        Creavit colore blah blah blah <a href="#2-ref" aria-label="Back to content">↩</a>
    </li>
</ol>