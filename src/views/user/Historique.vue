<template>
    <div class="block">
        <div class="profil">
            <div class="user__main__title">
                <h1>PROFILE</h1>
                <hr>
            </div>
            <div class="main">
                <div class="user__info" v-if="userData">
                    <div class="user__username">
                        <h4>Pseudonyme</h4>
                        <p>{{ userData.username }}</p>
                    </div>
                    <div class="user__email">
                        <h4>E-mail</h4>
                        <p>{{ userData.email }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="calcul">
            <div class="user__calculation">
                <h1>Historique des calculs</h1>
                <hr>
            </div>
            <div class="main__table">
                <table v-if="userCalculation">
                    <thead>
                        <tr>
                            <th> Jours </th>
                            <th> Heures </th>
                            <th> Calculs </th>

                        </tr>
                    </thead>
                    <tbody v-if="userCalculation" v-for="element in userCalculation">
                        <tr v-if="element.id_calculation == userData._id">
                            <td>{{ element.date }}</td>
                            <td>{{ element.hours }}</td>
                            <td>{{ element.calculation }}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { userOpeationStore } from '@/stores/operation'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'


const { userData } = storeToRefs(useUserStore())
const { user } = useUserStore()
user()

const { userCalculation } = storeToRefs(userOpeationStore())
console.log(userCalculation);

const { getCalculation } = userOpeationStore()
getCalculation()
</script>

<style scoped>
.block{
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.user__info {
    display: flex;
    flex-wrap: wrap;
    gap: 34px;
    background: var(--background-button);
    border-radius: var(--border-radius-base);
    padding: 20px;
    box-shadow: var(--box-shadow);
}

.user__info h4 {
    font-family: var(--font-SMono-regular);
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: .5px;
    color: var(--text-muted);
    margin-bottom: 6px;
}

.user__info p {
    font-weight: 700;
    color: var(--text-color);
}

.main__table {
    overflow-x: auto;
    padding-bottom: 15px;
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 4px;
}

thead th {
    text-align: left;
    padding: 10px 12px;
    background-color: var(--base-color);
    color: var(--color-white);
    font-size: 0.8125rem;
    font-weight: bold;
}
thead th:first-child { border-top-left-radius: var(--border-radius-primary); border-bottom-left-radius: var(--border-radius-primary); }
thead th:last-child { border-top-right-radius: var(--border-radius-primary); border-bottom-right-radius: var(--border-radius-primary); }

tbody tr td {
    padding: 9px 12px;
    font-family: var(--font-SMono-regular);
    letter-spacing: .5px;
    background-color: var(--background-button);
    color: var(--table-row-text);
    font-weight: 600;
    font-size: 0.8125rem;
    white-space: nowrap;
}
tbody tr td:first-child { border-top-left-radius: var(--border-radius-primary); border-bottom-left-radius: var(--border-radius-primary); }
tbody tr td:last-child { border-top-right-radius: var(--border-radius-primary); border-bottom-right-radius: var(--border-radius-primary); }

.user__calculation h1 {
    font-family: var(--font-Fraunces-semibold);
    font-size: 1.15rem;
    color: var(--primary-color);
    margin-bottom: 8px;
}
.user__calculation hr {
    border: none;
    height: 3px;
    width: 48px;
    border-radius: 2px;
    background-color: var(--accent-green);
}
.calcul{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>