<script>
	import { onMount } from "svelte";
    import rough from 'roughjs';

    export let idName;
    export let boxwidth=40;
    export let boxheight=40;

  onMount(() => {
    const svgElement = document.getElementById(idName);
    const rc = rough.svg(svgElement);
    const line = rc.ellipse(boxwidth/2+3, boxheight/2+3, boxwidth, boxheight, {stroke:"#f02324", strokeWidth:3.5, bowing:2.5});
    svgElement.appendChild(line);
  });


</script>


<svg id={idName} style:width={boxwidth+10} style:height={boxheight+8} class="absolute top-[-13px] left-[-14px] z-[-1]"></svg>