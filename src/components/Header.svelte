<script>
 import { onMount } from "svelte";
  import jQuery from "jquery";

  onMount(() => {
    const $ = jQuery;

    $(document).ready(function () {
      const btn = $("#btn");
      const content = $("#content");

      btn.on("click", function () {
        content.fadeToggle() 
      });
    });
  });

</script>

<nav>
    <div class="mobile">
        <h1>TaskManager App</h1>
        <div class="ToggleBtn" id="btn">
            <i class="fa-solid fa-bars" id ="toggle"></i>
        </div>
    </div>
   
    <div class="body" id="content">
        <div class="search-wrap">
            <input
                type="search"
                name="search task"
                placeholder="secach taask"
                id=""
            />
            <button class="search">Search</button>
        </div>
        <button class="add">+Add Task</button>
    </div>
   
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
    margin-right: 10px;
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
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
nav button {
    padding: 0.6rem 1.2rem;
    margin-left: 5px;
    border: none;
    border-radius: 8px;
    background-color:#fb8500;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
nav button:hover {
    background-color: #ff9b31;
}
nav button:active {
    background-color: #e35205;
}
nav button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 179, 71, 0.5);
}
nav .add {
    margin-right: 10px;
}
nav .body {
    display: flex;
    width: 90%;
    margin-left: -45%;
}
i {
    font-size: 40px;
    float: right;
}
.ToggleBtn {
    display: none;
    width: 30vw;
}
nav .mobile {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

@media (max-width: 768px) {
    nav {
        flex-direction: column;
        align-items: flex-start;
        padding: 0.5rem;
    }
    nav .search-wrap {
        width: 100%;
        margin-top: 1rem;
    }
    nav input {
        width: 100%;
    }
    nav .add {
        display: flex;
        margin-top: 1rem;
        margin-left: 0;
    }
    nav .body {
        display: none;
        margin-left: 0;
    }
    .ToggleBtn {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        margin-right: 10%;
    }
    .ToggleBtn:hover {
        cursor: pointer;
    }
    nav h1 {
        width: 100%;
        text-align: left;
    }
}

</style>
