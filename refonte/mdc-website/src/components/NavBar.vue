<script setup>
import { ref } from 'vue';
const open = ref (false);

const tags = [
    {name: 'Accueil', key: '/'},
    {name: 'Prestations', key: 'prestations'},
    {name: 'Actualités', key: 'actus'},
    {name: 'Contact', key: 'contact'}
]

const menuOpen = () => {
    open.value = !open.value;
}
</script>

<style scoped>
@media (min-width: 768px) {
    ul{
        background: transparent;
    }
}
@media (max-width:768px) {
    ul {
    background: inherit;
    }
}

</style>

<template>
    <div class="bg-gradient-to-r from-green-500 to-green-700 text-white py-4 md:flex items-center justify-between px-4">
        <div class="logo cursor-pointer flex justify-center flex-row">
            <a href="/"><img src="../assets/mdc.png" alt="Logo" class="h-auto md:w-64 w-44"></a>
        </div>
        <span class="text-4xl absolute right-6 top-5 cursor-pointer md:hidden" @click="menuOpen">
            <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
            <i class=""></i>
        </span>
        <ul class="md:flex gap-5 md:static absolute w-full md:w-auto top-36  px-6 md:px-0 pb-10 md:pb-0 duration-500" :class="[open ? 'left-0' : 'left-[-100%]']" >
            <li v-for="tag in tags" class="my-6 md:my-0 text-xl hover:text-gray-800 duration-500">
                <a :href="tag.key">{{ tag.name }}</a>
            </li>
        </ul>

    </div>
</template>

