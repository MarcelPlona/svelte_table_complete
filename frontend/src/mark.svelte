<script>
    export let mark;
    let bg_color;
    if (mark <= 1) {
        bg_color = "verylow";
    } else if (mark <= 2) {
        bg_color = "low";
    } else if (mark <= 3) {
        bg_color = "medium";
    } else if (mark <= 4) {
        bg_color = "high";
    } else {
        bg_color = "veryhigh";
    }
</script>

<div class="mark_box {bg_color}">
    <p>{mark.toFixed(1)}</p>
</div>

<style>
    .mark_box {
        width: 90px;
        height: 90px;
        color: rgb(255, 255, 255);
        font-weight: 700;
        font-size: 36px;
        border-radius: 20px;
        box-sizing: border-box;
        border: solid 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin:10px 0;
    }

    .verylow {
        background-color: #f44;
        border-color: #f66;
    }

    .low {
        background-color: rgb(255, 121, 68);
        border-color: rgb(255, 150, 102);
    }

    .medium {
        background-color: rgb(255, 224, 51);
        border-color: rgb(248, 245, 77);
    }

    .high {
        background-color: rgb(177, 255, 74);
        border-color: rgb(199, 255, 147);
    }

    .veryhigh {
        background-color: rgb(65, 255, 81);
        border-color: #7f7;
    }
</style>
