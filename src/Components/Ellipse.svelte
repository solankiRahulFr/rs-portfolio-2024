<script>
	import { onMount } from "svelte";
    import rough from 'roughjs';

    export let idName;
    export let boxwidth=100;
    export let boxheight=100;

  onMount(() => {
    const svgElement = document.getElementById(idName);
    const rc = rough.svg(svgElement);
    const line = rc.ellipse(boxwidth/2+38, boxheight/2+28, boxwidth+60, boxheight+40, {stroke:"#f02324", strokeWidth:3.5, bowing:2.5});
    svgElement.appendChild(line);
  });
</script>


<svg id={idName} style:width={boxwidth+80} style:height={boxheight+60} class="absolute top-[-32px] left-[-45px] z-[-1]"></svg>
