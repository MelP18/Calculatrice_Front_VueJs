<template>
    <section class="home-hero-section">
        <div class="home-hero landing-container">
            <div class="home-hero-text">
                <div class="home-eyebrow">Calculatrice scientifique en ligne</div>
                <h1>Chaque calcul,<br>consigné avec <em>exactitude.</em></h1>
                <p class="lede">CalMelp associe un moteur de calcul scientifique complet à un historique horodaté de
                    chaque opération. Aucune installation, aucune perte de données entre deux sessions.</p>
                <div class="home-ctas">
                    <RouterLink to="/signup" class="btn-primary" id="hero-signup">Créer un compte gratuit</RouterLink>
                    <a class="btn-text" id="hero-scroll" href="#features">Voir les fonctionnalités <span
                            class="mdi mdi-arrow-down"></span></a>
                </div>
                <div class="home-meta-row">
                    <div><strong>10</strong><span>décimales de précision</span></div>
                    <div><strong>12+</strong><span>fonctions scientifiques</span></div>
                    <div><strong>∞</strong><span>historique conservé</span></div>
                </div>
            </div>

            <div class="home-visual">
                <div class="live-calc">
                    <div class="live-tag"><span>CalMelp · modèle SC-1</span><span class="dot">● en ligne</span></div>
                    <div class="live-screen">
                        <div class="live-expr" id="live-expr">{{ exprDisplay }}</div>
                        <div class="live-res" id="live-res">{{ resultDisplay }}</div>
                    </div>
                    <div class="live-keys">
                        <button class="fn clear" @click="clearAll">C</button><button class="fn backspace" @click="backspace">⌫</button><button data-num="7" @click="pressNumber('7')">7</button><button data-num="8" @click="pressNumber('8')">8</button><button
                            data-num="9" @click="pressNumber('9')">9</button><button class="op" data-op="/" @click="pressOp('/')">÷</button>
                        <button data-num="4" @click="pressNumber('4')">4</button><button data-num="5" @click="pressNumber('5')">5</button><button
                            data-num="6" @click="pressNumber('6')">6</button><button class="op" data-op="*" @click="pressOp('*')">×</button>
                        <button data-num="1" @click="pressNumber('1')">1</button><button data-num="2" @click="pressNumber('2')">2</button><button
                            data-num="3" @click="pressNumber('3')">3</button><button class="op" data-op="-" @click="pressOp('-')">−</button>
                        <button data-num="0" @click="pressNumber('0')">0</button><button data-num="." @click="pressNumber('.')">.</button><button class="op"
                            id="live-equals" @click="pressEquals">=</button><button class="op" data-op="+" @click="pressOp('+')">+</button>
                    </div>
                    <div class="live-hint">essaie-la — aucun compte requis</div>
                </div>
            </div>
        </div>
    </section>

</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const expr = ref('')
const exprDisplay = ref(' ')
const resultDisplay = ref('0')
let justEq = false

function evalExpr(str: string): number | '' | 'Erreur' {
    if (!str.trim()) return ''
    try {
        const val = Function('"use strict"; return (' + str + ')')()
        if (typeof val !== 'number' || !isFinite(val)) return 'Erreur'
        return Math.round(val * 1e10) / 1e10
    } catch (e) {
        return ''
    }
}

function render() {
    exprDisplay.value = expr.value || ' '
    const preview = evalExpr(expr.value)
    resultDisplay.value = preview === '' ? (expr.value || '0') : String(preview)
}

function pressNumber(num: string) {
    if (justEq) { expr.value = ''; justEq = false }
    expr.value += num
    render()
}

function pressOp(op: string) {
    justEq = false
    if (!expr.value) return
    const last = expr.value.trim().slice(-1)
    if ('+-*/'.includes(last)) {
        expr.value = expr.value.slice(0, -1) + op
    } else {
        expr.value += op
    }
    render()
}

function pressEquals() {
    if (!expr.value) return
    const val = evalExpr(expr.value)
    if (val === 'Erreur' || val === '') { resultDisplay.value = 'Erreur'; return }
    exprDisplay.value = expr.value + ' ='
    resultDisplay.value = String(val)
    expr.value = String(val)
    justEq = true
}

function clearAll() {
    expr.value = ''
    justEq = false
    render()
}

function backspace() {
    justEq = false
    expr.value = expr.value.slice(0, -1)
    render()
}
</script>

<style scoped>
/* ---- HERO ---- */
.home-hero-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 69px);
    background: var(--hero-bg);
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
    background-size: 34px 34px;
    padding-top:40px;
}

.home-hero {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 0.86fr;
    gap: 40px;
    align-items: center;
}

@media (max-width:900px) {
    .home-hero-section {
        height: auto;
        min-height: calc(100vh - 69px);
        padding-bottom: 60px;
    }

    .home-hero {
        height: auto;
        grid-template-columns: 1fr;
    }
}

.home-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-SMono-regular);
    font-size: 0.6875rem;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.55);
    text-transform: uppercase;
    margin-bottom: 22px;
}

.home-eyebrow::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent-green);
    box-shadow: 0 0 8px var(--accent-green);
}

.home-hero h1 {
    font-family: var(--font-Fraunces-semibold);
    font-size: clamp(2.4rem, 4.2vw, 3.4rem);
    line-height: 1.08;
    color: var(--white);
    margin-bottom: 22px;
    letter-spacing: -0.5px;
}

.home-hero h1 em {
    font-family: var(--font-Fraunces-italic);
    font-size: inherit;
    color: rgba(255, 255, 255, 0.6);
}

.home-hero .lede {
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.96875rem;
    line-height: 1.7;
    max-width: 460px;
    margin-bottom: 32px;
}

.home-ctas {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 22px;
    margin-bottom: 44px;
}

.home-ctas .btn-primary {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    flex-shrink: 0;
    background: var(--white);
    color: var(--base-color);
    border: none;
    padding: 14px 28px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.875rem;
}

.home-ctas .btn-primary:hover {
    background: rgba(255, 255, 255, 0.88);
}

.home-ctas .btn-text {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 600;
    font-size: 0.84375rem;
    white-space: nowrap;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

.home-ctas .btn-text:hover {
    color: var(--white);
}

.home-ctas .btn-text .mdi {
    font-size: inherit;
    color: inherit;
}

.home-meta-row {
    display: flex;
    gap: 36px;
    flex-wrap: wrap;
}

.home-meta-row div {
    font-family: var(--font-SMono-regular);
}

.home-meta-row strong {
    display: block;
    color: var(--white);
    font-size: 1.125rem;
    font-weight: 700;
}

.home-meta-row span {
    color: rgba(255, 255, 255, 0.45);
    font-size: 0.65625rem;
    letter-spacing: 1px;
    text-transform: uppercase;
}

  /* ---- CALCULATRICE EN DIRECT ---- */
  .home-visual{ display:flex; justify-content:center; }
  .live-calc{
    width:100%; max-width: 300px;
    background: linear-gradient(165deg, var(--calc-gradient-start), var(--calc-gradient-end));
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 40px 80px -24px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.07);
  }
  .live-calc .live-tag{
    display:flex; justify-content:space-between; align-items:center;
    font-family: var(--font-SMono-regular); font-size:0.625rem; color: rgba(255,255,255,0.4); letter-spacing:1px;
    margin-bottom:14px; text-transform:uppercase;
  }
  .live-calc .live-tag span{ font-size: inherit; color: inherit; }
  .live-calc .live-tag .dot{ color: var(--accent-green); }
  .live-screen{
    background: rgba(0,0,0,0.28); border-radius:10px; padding:16px;
    margin-bottom:14px; min-height:72px; display:flex; flex-direction:column; justify-content:center; gap:6px;
  }
  .live-expr{ font-family: var(--font-SMono-regular); color: rgba(255,255,255,0.45); font-size:0.78125rem; text-align:right; min-height:15px; overflow:hidden; white-space:nowrap; }
  .live-res{ font-family: var(--font-SMono-regular); color: var(--white); font-size:1.5625rem; font-weight:700; text-align:right; overflow:hidden; white-space:nowrap; }
  .live-keys{ display:grid; grid-template-columns:repeat(4,1fr); gap:6px; }
  .live-keys button{
    font-family: var(--font-SMono-regular); font-size:0.8125rem; font-weight:600;
    background: rgba(255,255,255,0.06); border:none; border-radius:7px; padding:11px 0; color: var(--white);
    transition: background .12s ease;
  }
  .live-keys button:hover{ background: rgba(255,255,255,0.12); }
  .live-keys button:active{ background: rgba(255,255,255,0.2); }
  .live-keys button.op{ background: rgba(127,217,168,0.14); color: var(--accent-green); }
  .live-keys button.op:hover{ background: rgba(127,217,168,0.24); }
  .live-keys button.fn{ grid-column: span 2; background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.8); }
  .live-keys button.fn:hover{ background: rgba(255,255,255,0.18); }
  .live-keys button.fn.clear{ color: var(--accent-coral); }
  .live-hint{ text-align:center; font-family: var(--font-SMono-regular); font-size:0.625rem; color: rgba(255,255,255,0.3); margin-top:12px; letter-spacing:.5px; }
</style>