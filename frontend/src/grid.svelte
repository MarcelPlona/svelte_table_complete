<script>
    import Column from "./column.svelte";

    let persons_data = [];

    fetch("http://localhost:3000/")
        .then((response) => response.json())
        .then((data) => {
            persons_data = data;
        });
</script>

<div class="grid">
    {#if persons_data.length != 0}
        <Column which_column={"properties"} />
        {#each persons_data as person}
            <Column which_column={"values"} {person} />
        {/each}
    {:else}
        <p class="loading">Loading...</p>
    {/if}
</div>

<style>
    .grid {
        display: inline-flex;
        position: relative;
        margin: 50px;
    }

    .loading {
        color: black;
        font-size: 40px;
        font-weight: 600;
        position: fixed;
        top: 50vh;
        left: 50vw; 
        transform: translate(-50%, -150%);
    }
</style>
