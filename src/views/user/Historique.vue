<template>
    <div class="block">
        <div class="profil">
            <div class="user__main__title">
                <h1>PROFILE</h1>
                <hr>
            </div>
            <div class="main">
                <div class="user__info" v-if="userData">
                    <div class="user__email">
                        <h4>Avatar</h4>
                        <img :src="userData.avatar" alt="avatar">
                    </div>
                    <div class="user__username">
                        <h4>Pseudonime</h4>
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
                <table>
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
.main__table {
    overflow-x: auto;
    padding-bottom: 15px;
}

table {
    width: 100%;
    border: 1px solid var(--base-color);
    /* border-collapse: collapse; */
}

thead {
    width: 100%;
}

tbody {
    width: 100%;
}

thead th {
    text-align: left;
    padding: 10px 5px;
    background-color: var(--base-color);
    color: var(--color-white);
    font-size: 18px;
    font-weight: bold;
}


tbody tr td {
    padding: 5px;
    letter-spacing: 2px;
    background-color: var(--color-gray-tertiary);
    color: var(--base-color);
    font-weight: bold;
    white-space: nowrap;
}

.user__info div {
    display: flex;
    gap: 15px;
}

.user__calculation h1 {
    font-size: 16px;
    color: var(--primary-color);
    margin-bottom: 5px;
    /* border-bottom: 1px solid; */
}
.calcul{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>