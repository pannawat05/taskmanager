<script>
    import { tasks, toggleTask, deleteTask } from '../stores/tasksStore';
    import SearchFilter from './Searchfilter.svelte'; // Make sure the correct path is used

    let searchQuery = '';
    let filterStatus = 'all';

    function handleSearch(event) {
        searchQuery = event.detail.query;
    }

    function handleFilter(event) {
        filterStatus = event.detail.status;
    }

    $: filteredTasks = $tasks
        ? $tasks.filter(task => {
            const matchesQuery = task.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = filterStatus === 'all' || task.completed.toString() === filterStatus;
            return matchesQuery && matchesStatus;
        })
        : [];
</script>

<div  class = "search">
    <p>Avaliable-Task</p>
    <SearchFilter on:search={handleSearch} on:filter={handleFilter} />
</div>

{#if filteredTasks.length === 0}
    <p>No tasks found.</p>
{:else}
    <div id="task">
        {#each filteredTasks as task (task.id)}
            <b style="text-decoration: {task.completed ? 'line-through' : 'none'};">
                {#if task.completed}
                    <i 
                        class="fa-solid fa-circle-check state-icon" 
                        on:click={() => toggleTask(task.id)}
                        role="button" 
                        tabindex="0"
                        on:keydown={(e) => e.key === 'Enter' && toggleTask(task.id)}
                    ></i>
                {:else}
                    <i 
                        class="fa-regular fa-circle state-icon" 
                        on:click={() => toggleTask(task.id)}
                        role="button" 
                        tabindex="0"
                        on:keydown={(e) => e.key === 'Enter' && toggleTask(task.id)}
                    ></i>
                {/if}
                {task.title} &nbsp;
                <i 
                    class="fa-solid fa-trash" 
                    on:click={() => deleteTask(task.id)} 
                    id="del"
                    role="button"
                    tabindex="0"
                    on:keydown={(e) => e.key === 'Enter' && deleteTask(task.id)}
                ></i>
            </b>
        {/each}
    </div>
{/if}

<style>
    div b {
        padding: 0.5rem;
        margin: 0.5rem 0;
        font-size: larger;
        border: 2px solid #219ebc;
        width: fit-content;
        height: 8%;
        border-radius: 5px;
    }
    div {
        display: flex;
        flex-direction: column;
    }
    .state-icon {
        cursor: pointer;
    }
    #del {
        cursor: pointer;
    }
    #del:hover {
        color: red;
        font-size: larger;
    }
    .search{
        width:60vw;
        display: flex;
    }
    .search p{
        font-size: 1.5rem;
        margin-right: 1rem;
        font-weight: bold;
        margin-bottom: 5px s;
    }
   
</style>
