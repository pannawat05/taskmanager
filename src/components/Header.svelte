
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

        var timeDisplay = document.getElementById("time");


function refreshTime() {
    var dateString = new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });
var formattedString = dateString.replace(" ", " - ");
timeDisplay.innerHTML = formattedString;

}

setInterval(refreshTime, 1000);
    });
</script>

<nav>
    <div class="mobile">
        <h1>TaskManager App</h1>
        <div class="ToggleBtn" id="btn" on:click={() => showMenu = !showMenu}>
            <i class="fa-solid fa-bars" id="toggle"></i>
        </div>
    </div>
    
    <div class="body" class:hidden={!showMenu}>
        <h2 id="time"></h2>

        <button class="add" on:click={() => showModal = true}><i class="fa-solid fa-plus"></i>Add Task</button>
    </div>

    {#if showModal}
        <AddTask on:close={() => showModal = false} />
    {/if}
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        background-color: #e35205;
        color: white;
        box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }
    nav h1 {
        font-size: 1.8rem;
    }
    nav .search-wrap {
        display: flex;
        width: 60%;
        align-items: center;
    }
    nav input {
        padding: 0.7rem;
        width: 70%;
        border: none;
        border-radius: 8px;
    }
    nav button {
        padding: 0.6rem 1.2rem;
        margin-left: 5px;
        border: none;
        border-radius: 8px;
        background-color:#ffb703;
        color: white;
        cursor: pointer;
    }
    nav .add {
        margin-right: 10px;
        margin-left:30%;
        width:15%;
        font-size: large;
    }
    .add i {
        font-size: large;
    }
    nav .body {
        display: flex;
        width: 90%;
        margin-left: -45%;
    }
    i {
        font-size: 40px;
    }
    .ToggleBtn {
        display: none;
    }
    nav .mobile {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .search-wrap select {
        padding: 0.7rem;
        border: none;
        border-radius: 8px;
        box-sizing: border-box;
        height: 40px;
        margin-right: 5px;
        background-color: #fff;
    }
</style>
