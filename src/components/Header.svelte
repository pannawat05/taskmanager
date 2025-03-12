<script>

</script>
<nav>
    <h1>TaskManager App</h1>
<div class="search-wrap">
    <input type="search" name="search task" placeholder="secach taask" id="">
    <button class="search">Search</button>
</div>

    <button class="add">+Add Task</button>
</nav>



<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        background-color: #E35205;
        color: white;
        box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
    }
    nav h1 {
        font-size: 1.5rem;
    }
    nav .search-wrap {
        display: flex;
        width:60%;
        align-items: center;
    }
    nav input {
        padding: 0.5rem;
        width:40%;
        border: none;
        border-radius: 5px;
    }
    nav button {
        padding: 0.5rem 1rem;
        margin-left: 3px;
        border: none;
        border-radius: 5px;
        background-color: #F9A826;
        color: white;
        cursor: pointer;
    }
    nav button:hover {
        background-color: #F9A826;
    }
    nav button:active {
        background-color: #E35205;
    }
    nav button:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        nav {
            flex-direction: column;
            align-items: flex-start;
        }
        nav .search-wrap {
            width: 100%;
            margin-top: 1rem;
        }
        nav input {
            width: 100%;
        }
        nav .add {
            display:flex;
            margin-top: 1rem;
           margin-left:50%;
        }
    }
    

</style>