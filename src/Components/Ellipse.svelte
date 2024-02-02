<script>
	import { onMount } from "svelte";
    import rough from 'roughjs';

    export let idName;
    export let boxwidth=100;
    export let boxheight=100;

  onMount(() => {
    const svgElement = document.getElementById(idName);
    const rc = rough.svg(svgElement);
    const line = rc.ellipse(boxwidth/2+30, boxheight/2+20, boxwidth+45, boxheight+25, {stroke:"#f02324", strokeWidth:3.5, bowing:2.5});
    svgElement.appendChild(line);
  });
</script>


<svg id={idName} style:width={boxwidth+60} style:height={boxheight+40} class="absolute top-[-28px] left-[-35px] z-[-1]"></svg>
