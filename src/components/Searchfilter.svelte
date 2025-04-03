<script>
    import { createEventDispatcher, onMount } from 'svelte';
  
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
  
    let isToggled = false;
    function hideform() {
      isToggled = !isToggled;
    }
  
    onMount(() => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        isToggled = true;
      }
    });
  </script>
  
  <div class="relative w-full max-w-3xl mx-auto">
    <button 
      type="button" 
      class="md:hidden flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full text-white shadow-lg z-10"
      on:click={hideform}
      aria-label="Toggle filter form"
    >
      <i class="fa-solid fa-filter"></i>
    </button>
    
    <div class="flex flex-col md:flex-row items-stretch md:items-center gap-4 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-4 mt-2 md:mt-0" class:hidden={!isToggled}>
      <div class="relative md:w-1/4">
        <select 
          on:change={handleFilterChange}
          class="w-full p-3 border-0 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 appearance-none focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
        >
          <option value="all">All Tasks</option>
          <option value="true">Completed</option>
          <option value="false">Pending</option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-indigo-500 dark:text-indigo-400">
          <i class="fa-solid fa-chevron-down text-xs"></i>
        </div>
      </div>
      
      <div class="relative md:w-2/4 flex-grow">
        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input 
          type="search" 
          placeholder="Search for tasks..." 
          bind:value={searchQuery}
          class="w-full p-3 border-0 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all pl-10"
        />
      </div>
      
      <button 
        class="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium p-3 rounded-xl transition-all duration-200 md:w-1/4 shadow-md hover:shadow-lg"
        on:click={handleSearch}
      >
        <i class="fa-solid fa-magnifying-glass"></i>
        <span>Search</span>
      </button>
    </div>
  </div>
  
  <style type="text/tailwindcss">
    @layer components {
      .hidden {
        display: none;
      }
    }
    @layer utilities {
      .hidden {
        display: none;
      }
    }
    @layer base {
      .hidden {
        display: none;
      }
    }
    @layer forms {
      .hidden {
        display: none;
      }
    }
    
  </style>