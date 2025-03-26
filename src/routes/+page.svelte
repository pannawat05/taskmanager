<script>
    import Header from '../components/Header.svelte';
    import TaskList from '../components/TaskList.svelte';
    import AddTask from '../components/AddTask.svelte';
</script>
<Header />
<div class="card">
<TaskList />
</div>
<style>
    .card {
        margin: 1rem;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.1);
        background-color:#fefae0;
    }
</style>
