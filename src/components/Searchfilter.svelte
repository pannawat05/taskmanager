<script>
    import { createEventDispatcher } from 'svelte';

    let searchQuery = '';
    let filterStatus = 'all';

    const dispatch = createEventDispatcher();

    function handleSearch() {
        dispatch('search', { query: searchQuery });
    }

    function handleFilterChange(event) {
        filterStatus = event.target.value;
        dispatch('filter', { status: filterStatus });
    }
let istoggle = false;
    function hideform() {
        let form = document.querySelector('.form');
        if (istoggle) {
            form.style.display = 'none';
            istoggle = false;

        } else {
            form.style.display = 'flex';
            istoggle = true;
        }

    }
</script>

<div class="s">
    <button type="button" class="fa-solid fa-filter" id="f" on:click={hideform} aria-label="Toggle filter form"></button>
    <div class="form">
        <select name="state" id="state" on:change={handleFilterChange}>
            <option value="all">All</option>
            <option value="true">Completed</option>
            <option value="false">Pending</option>
        </select>
        <input type="search" name="search task" placeholder="Search task" bind:value={searchQuery} />
        <button class="search" on:click={handleSearch}><i class="fa-solid fa-magnifying-glass"></i>Search</button>
    </div>
</div>

<style>
    div {
        display: flex;
        gap: 1rem;
        width: 40vw;
        height: 40px;
    }
    input {
        padding: 0.7rem;
        width: 50%;
        border: 1px #8787 solid;
        outline: none;
        border-radius: 8px;
    }
    button {
        padding: 0.6rem 1.2rem;
        margin-left: 5px;
        border: none;
        border-radius: 8px;
        background-color: #ffb703;
        width: 20%;
        color: white;
        cursor: pointer;
        font-size: medium;
    }
    button i {
        font-size: medium;
    }

    select {
        padding: 0.7rem;
        width: 20%;
        border: none;
        background-color: white;
        outline: none;
        border-radius: 8px;
        margin-left: 35px;
        height: 40px;
    }
    h3 {
        padding: 0.5rem;
        margin: 0.5rem 0;
        font-size: larger;
    }
    .s {
        display: flex;
    }
    .s #f {
        margin-right: -2.6rem;
        cursor: pointer;
        background-color: none !important;
        border: none;
        width:fit-content!important;

    }
    .form {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: both 2s;
     
    }

    

    
</style>
