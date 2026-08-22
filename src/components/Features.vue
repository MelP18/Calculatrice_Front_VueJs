/*=============================++++ HTML ++++=================================*/
<template>
    <section class="feature-section" id="features">
        <div class="feature-head">
            <div class="home-eyebrow">Fonctionnalités</div>
            <h2>Pensée pour le calcul sérieux.</h2>
        </div>

        <div class="spec-row">
            <div class="code">FN.SCI</div>
            <h3>Fonctions scientifiques complètes</h3>
            <p>Trigonométrie (sin, cos, tan, tanh, atan), logarithmes, racines, puissances et constantes usuelles — accessibles en un clic depuis le clavier de la calculatrice, avec bascule RAD/DEG.</p>
        </div>
        <div class="spec-row">
            <div class="code">FN.HIST</div>
            <h3>Historique horodaté</h3>
            <p>Chaque calcul est enregistré avec le jour et l'heure exacts. Retrouve n'importe quelle opération passée depuis ta page Historique, classée par ordre chronologique.</p>
        </div>
        <div class="spec-row">
            <div class="code">FN.THM</div>
            <h3>Mode clair et sombre</h3>
            <p>L'interface s'adapte à ta luminosité ambiante d'un simple geste, sans jamais perdre la cohérence visuelle de la calculatrice.</p>
        </div>
        <div class="spec-row">
            <div class="code">FN.ACC</div>
            <h3>Accessible partout</h3>
            <p>Aucune installation : CalMelp fonctionne directement dans ton navigateur, sur ordinateur comme sur mobile, avec ton compte synchronisé.</p>
        </div>
    </section>
</template>

/*=============================++++ CSS ++++=================================*/
<style scoped>
.home-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-SMono-regular);
    font-size: 0.6875rem;
    letter-spacing: 2px;
    color: var(--tertiary-color);
    text-transform: uppercase;
    margin-bottom: 22px;
}

.home-eyebrow::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--tertiary-color);
    box-shadow: 0 0 8px var(--tertiary-color);
}

.feature-section {
    max-width: 940px;
    margin: 0 auto;
    padding: 90px 44px 100px;
}

@media (max-width: 768px) {
    .feature-section {
        padding-top: 150px;
    }
}

.feature-head h2 {
    font-family: var(--font-Fraunces-semibold);
    font-size: 2rem;
    color: var(--base-color);
    letter-spacing: -.4px;
}

html[data-theme="dark"] .feature-head h2 {
    color: var(--primary-color);
}

.spec-row {
    display: grid;
    grid-template-columns: 90px 200px 1fr;
    gap: 20px;
    align-items: start;
    padding: 26px 0;
    border-top: 1px solid var(--border-subtle);
}

.spec-row:last-child {
    border-bottom: 1px solid var(--border-subtle);
}

.spec-row .code {
    font-family: var(--font-SMono-regular);
    font-size: 0.75rem;
    color: var(--tertiary-color);
    font-weight: 700;
    padding-top: 3px;
}

.spec-row h3 {
    font-size: 1.03125rem;
    font-family: var(--font-bold);
    color: var(--text-color);
}

.spec-row p {
    color: var(--text-muted);
    font-size: 0.875rem;
    line-height: 1.65;
}

@media (max-width:680px) {
    .spec-row {
        grid-template-columns: 50px 1fr;
    }

    .spec-row h3 {
        grid-column: 2;
    }

    .spec-row p {
        grid-column: 1 / -1;
    }
}
</style>
