<script>
    import { tasks } from '../stores/tasksStore';
    import { onMount } from 'svelte';

    let taskList = [];

    onMount(() => {
        $: taskList = $tasks; // อัปเดตค่า taskList ทุกครั้งที่ $tasks เปลี่ยน
    });
</script>

{#if taskList.length === 0}
    <p>No tasks yet. Add some!</p>
{:else}
    <div>
        {#each taskList as task (task.id)}
            <b>
                {#if task.completed}
                <i class="fa-solid fa-circle-check"></i>
                {:else}
                <i class="fa-regular fa-circle"></i>
                {/if}
                {task.title} &nbsp;<i class="fa-solid fa-trash"></i>
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
</style>
