<template>
    <div class="sidebar">
        <div class="sidebar__menu">
            <ul class="sidebar__menu__list">
                <li class="sidebar__menu__list__item">
                    <RouterLink to="/user" class="sidebar__menu__logo" id="bien">
                        <span class="mdi mdi-home"></span>
                        <h4>Calculatrice</h4>
                    </RouterLink>
                </li>
                <!-- <li class="sidebar__menu__list__item">
                    <RouterLink to="/user/profile" class="sidebar__menu__logo">
                        <span class="mdi mdi-account"></span>
                        <h4>Profile</h4>
                    </RouterLink>
                </li> -->
                <li class="sidebar__menu__list__item">
                    <RouterLink to="/user/historique" class="sidebar__menu__logo">
                        <span class="mdi mdi-view-list"> </span>
                        <h4>Historique</h4>
                    </RouterLink>
                </li>
                <li class="sidebar__menu__list__item">
                    <RouterLink to="/user/logout" class="sidebar__menu__logo">
                        <span class="mdi mdi-logout"></span>
                        <h4>Deconnexion</h4>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.sidebar__menu__logo {
    width: 45px;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
}

.sidebar {
    z-index: 7;
    width: 65px;
    margin-top: 62px;
    height: calc(100vh - 62px);
    background-color: var(--base-color);
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    box-shadow: 0 0 5px var(--base-color);
}

.sidebar__menu__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.sidebar__menu__list .sidebar__menu__list__item {
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.router-link-exact-active {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 45px;
    height: 45px;
    background-color: var(--secondary-color);
    border-radius: 50%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5),
        inset 2px 2px 3px rgba(255, 255, 255, 0.25),
        inset -3px -3px 5px rgba(0, 0, 0, 0.5);

}

.sidebar__menu__list__item .sidebar__menu__logo span {
    position: absolute;
    font-size: 30px;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: var(--color-white);
}

.sidebar__menu__list__item .sidebar__menu__logo h4 {
    position: absolute;
    z-index: 15;
    left: 80px;
    background-color: var(--primary-color);
    color: var(--color-white);
    font-size: 18px;
    padding: 5px 15px;
    border-radius: var(--border-radius-base);
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25),
        inset -3px -3px 5px rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
}

.sidebar__menu__list__item .sidebar__menu__logo h4::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -4px;
    transform: translateY(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    background-color: var(--primary-color);
}

.sidebar__menu__list__item .sidebar__menu__logo:hover h4 {
    opacity: 1;
    visibility: visible;
    transition: 0.5s;
}

.sidebar__menu__list__item .sidebar__menu__logo:hover span {
    position: absolute;
    font-size: 30px;
    color: var(--color-white);

}</style>