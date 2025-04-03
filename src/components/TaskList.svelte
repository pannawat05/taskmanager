<script>
    import { tasks, toggleTask, deleteTask } from '../stores/tasksStore';
    import SearchFilter from './Searchfilter.svelte'; 
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

<div class="max-w-4xl mx-auto px-4 py-6 w-full">
    <div class="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">Available Tasks</h2>
        <div class="w-full sm:w-auto">
            <SearchFilter on:search={handleSearch} on:filter={handleFilter} />
        </div>
    </div>

    {#if filteredTasks.length === 0}
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
            <p class="text-gray-500 dark:text-gray-400 text-lg">No tasks found.</p>
        </div>
    {:else}
        <div id="task" class="flex flex-col space-y-3">
            {#each filteredTasks as task (task.id)}
                <div 
                    class="bg-white dark:bg-gray-800 shadow-sm hover:shadow transition-all duration-200 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center p-3 sm:p-4"
                >
                    <button 
                        class="flex-shrink-0 mr-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                        on:click={() => toggleTask(task.id)}
                        aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
                    >
                        {#if task.completed}
                            <i class="fa-solid fa-circle-check text-green-500 text-lg sm:text-xl"></i>
                        {:else}
                            <i class="fa-regular fa-circle text-gray-400 hover:text-blue-500 text-lg sm:text-xl"></i>
                        {/if}
                    </button>
                    
                   
                    {#if task.completed}
                        <span class="flex-grow text-sm sm:text-base text-danger-400 dark:text-danger-500 line-through">
                            {task.title}
                        </span>
                    {:else}
                        <span class="flex-grow text-sm sm:text-base text-gray-800 dark:text-gray-100">
                            {task.title}
                        </span>
                    {/if}
                    
                    <button 
                        class="flex-shrink-0 ml-2 text-gray-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-1"
                        on:click={() => deleteTask(task.id)}
                        aria-label="Delete task"
                    >
                        <i class="fa-solid fa-trash text-sm sm:text-base transition-all duration-200 hover:scale-110"></i>
                    </button>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    @import "tailwindcss";
</style>