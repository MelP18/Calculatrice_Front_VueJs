<template>
    <div class="logout-modal__overlay" @click.self="$emit('cancel')">
        <div class="logout-modal">
            <div class="logout-modal__mark"><span class="mdi mdi-logout"></span></div>
            <h3>Déconnexion</h3>
            <p>Voulez-vous vraiment vous déconnecter ?</p>
            <div class="logout-modal__actions">
                <button class="logout-modal__cancel" @click="$emit('cancel')">Annuler</button>
                <button class="logout-modal__confirm" @click="$emit('confirm')">Se déconnecter</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineEmits(['confirm', 'cancel'])
</script>

<style scoped>
.logout-modal__overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(4px);
}

.logout-modal {
    width: 100%;
    max-width: 340px;
    margin: 20px;
    background: var(--hero-bg);
    border-radius: 16px;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;
    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.6);
    animation: logout-modal-in .2s ease;
}

@keyframes logout-modal-in {
    from { opacity: 0; transform: translateY(8px) scale(.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}

.logout-modal__mark {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, var(--tertiary-color), var(--secondary-color));
    margin-bottom: 8px;
}

.logout-modal__mark .mdi {
    font-size: 1.5rem;
    color: var(--white);
}

.logout-modal h3 {
    font-family: var(--font-Fraunces-semibold);
    font-size: 1.25rem;
    color: var(--white);
}

.logout-modal p {
    color: rgba(255, 255, 255, 0.65);
    font-size: 0.875rem;
    margin-bottom: 10px;
}

.logout-modal__actions {
    display: flex;
    gap: 12px;
    width: 100%;
}

.logout-modal__actions button {
    flex: 1;
    padding: 11px;
    border-radius: 10px;
    font-family: var(--font-bold);
    font-size: 0.8125rem;
    border: none;
    cursor: pointer;
    transition: background .15s ease;
}

.logout-modal__cancel {
    background: rgba(255, 255, 255, 0.08);
    color: var(--white);
}
.logout-modal__cancel:hover { background: rgba(255, 255, 255, 0.16); }

.logout-modal__confirm {
    background: var(--accent-coral);
    color: var(--hero-bg);
}
.logout-modal__confirm:hover { background: #f5a6a3; }
</style>
