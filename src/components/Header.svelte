<script>
    import { onMount } from "svelte";
    import AddTask from './AddTask.svelte';
    import { tasks, addTask } from '../stores/tasksStore';
    import Searchfilter from "./Searchfilter.svelte";
    import { createEventDispatcher } from 'svelte';

    let showMenu = false;
    let showModal = false;
    let taskName = "";
    let searchQuery = '';
    let filterStatus = 'all';
    const dispatch = createEventDispatcher();

    function handleAddTask() {
        if (taskName.trim() !== "") {
            addTask(taskName);
            taskName = "";
            showModal = false;
        }
    }

    function handleSearch(event) {
        searchQuery = event.detail.query;
        updateTaskList();
    }

    function handleFilter(event) {
        filterStatus = event.detail.status;
        updateTaskList();
    }

    function updateTaskList() {
        dispatch('update', { query: searchQuery, status: filterStatus });
    }

    onMount(() => {
        const timeDisplay = document.getElementById("time");

        function refreshTime() {
            const dateString = new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });
            const formattedString = dateString.replace(" ", " - ");
            timeDisplay.innerHTML = formattedString;
        }

        setInterval(refreshTime, 1000);
    });
</script>

<nav class="bg-orange-600 text-white shadow-lg rounded-lg p-4 {showMenu == false ?'flex' : 'block'} items-center justify-between">
    <div class="flex items-center gap-4">
        <button class="md:hidden" on:click={() => showMenu = !showMenu}>
            <i class="fa-solid fa-bars text-2xl"></i>
        </button>
        <div class="flex name">
        <img src="https://cdn-icons-png.flaticon.com/512/2098/2098402.png" alt="" srcset="" width="50" height="50" class="rounded-full" />
        <h1 class="text-2xl font-bold">TaskManager App</h1>
    </div>
    </div>
    
    <div class="hidden md:{showMenu == false? 'flex' : 'block'} items-center gap-4 menu"  style="margin-right:20%" class:hidden={!showMenu}>
        <h2 id="time" class="text-lg font-semibold align-items-center"></h2>
        <button class="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-lg flex items-center gap-2" on:click={() => showModal = true}>
            <i class="fa-solid fa-plus"></i> Add Task
        </button>
    </div>

    {#if showModal}
        <AddTask on:close={() => showModal = false} />
    {/if}
</nav>
<style type="text/tailwindcss">
    @layer components {
        .bg-orange-600 {
            @apply bg-orange-600;
        }
        .bg-yellow-400 {
            @apply bg-yellow-400;
        }
        .bg-yellow-500 {
            @apply bg-yellow-500;
        }
    }

    

</style>

