<script>
	import { onMount } from "svelte";
    import rough from 'roughjs';

    export let stars;
    export let idName;
    let x, y, w, h, windowWidth, widthsvg, heightsvg;

  onMount(() => {
    windowWidth = window.innerWidth;
    if(windowWidth>600){
        x=15;
        y=15;
        w=20;
        h=15;
    }else{
        x=8;
        y=8;
        w=12;
        h=8;
    }
    stars.forEach((ele, i) => {
        const svgElement = document.getElementById(`${idName}${i}`);
        const rc = rough.svg(svgElement);
        const line = rc.ellipse(x, y, w, h, {stroke:"#1d1d1d", strokeWidth:3, bowing:1, roughness:1,  fill:"#0677ea", fillWeight:ele?3:0, fillStyle :"zigzag", hachureGap:6});
        svgElement.appendChild(line);
    });

  });

$:widthsvg = w;
$:heightsvg = h;
</script>

<div class="flex">

    {#each stars as s, i (i)}
        <svg id={`${idName}${i}`} style:width={widthsvg+7} style:height={heightsvg+10}></svg>
    {/each}
</div>
