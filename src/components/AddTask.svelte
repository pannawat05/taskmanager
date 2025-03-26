<script>
    import { createEventDispatcher } from "svelte";
    import { addTask } from '../stores/tasksStore';

    const dispatch = createEventDispatcher();
    let taskTitle = "";

    function submitTask() {
        if (taskTitle.trim() !== "") {
            addTask(taskTitle);
            dispatch('close');
        }
    }
</script>

<div class="modal">
    <div class="modal-content">
        <h2>Add New Task</h2>
        <input
            type="text"
            placeholder="Enter task title"
            bind:value={taskTitle}
        />
        <div class="buttons">
            <button class="add" on:click={submitTask}>Add Task</button>
            <button class="cancel" on:click={() => dispatch('close')}>Cancel</button>
        </div>
    </div>
</div>

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        background: white;
        color:black;
        padding: 20px;
        border-radius: 10px;
        width: 300px;
        text-align: center;
    }
    input {
        width: 90%;
        padding: 8px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
    }
    .add {
        background-color: #28a745;
        color: white;
        padding: 8px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .add:hover {
        background-color: #218838;
    }
    .cancel {
        background-color: #dc3545;
        color: white;
        padding: 8px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .cancel:hover {
        background-color: #c82333;
    }
</style>
