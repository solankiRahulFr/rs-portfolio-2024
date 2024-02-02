<script>
    import BulletPoint from "../../../Components/bulletPoint.svelte";
    import ExternalLink from "../../../images/exLink.png";
    import BoxProjects from "../../../Components/BoxProjects.svelte";
    import { onMount } from "svelte";
    import EncircleLink from "../../../Components/encircleLink.svelte";
    import Buttons from "../../../Components/Buttons.svelte";
    
    
    let projectBox, BoxW, BoxH;
    
        onMount(()=>{
            // windowWidth = window.innerWidth;
            projectBox = document.getElementById("container-project1");
            console.log(projectBox.clientWidth, projectBox.clientHeight)
    
        }) 
    
        $:if(projectBox) BoxW = projectBox.clientWidth+10;
        $:if(projectBox) BoxH = projectBox.clientHeight + 10;
    </script>
    
    
    
        <div class="flex flex-col justify-center items-cente mt-8 s-688:mx-10 xxs:gap-1 xxs:mx-15 xxs:mt-4">
            <div>
                <div class="flex justify-center items-center gap-4 p-2">
                    <div class="relative w-1/2 s-688:w-full" id="container-project1">
                        <div class="flex">
                            <BulletPoint idName={"project1"}/>
                            <h1 class=" project h3 text-green-700 text-xl xs:text-sm xxs:text-xs"><span class="text-red-700">Gesture Drawing: </span>Une application qui permet aux utilisateurs de créer des dessins à l'aide de gestes de la main capturés par vision par ordinateur.</h1>
                        </div>
                        <h1 class="ml-4 project h3 text-xl xs:text-sm xxs:text-xs">React, Mediapipe</h1>
                        {#if projectBox}
                        <BoxProjects boxwidth={BoxW} boxheight={BoxH} idName={"box-project1"}/>
                        {/if}
                    </div>
                    <div class="relative">
                        <a href="https://solankirahulfr.github.io/GestureDrawingProject/" target="_blank"><img class="w-5 hover:scale-105" src={ExternalLink} alt="external link"/></a>
                            <EncircleLink idName={"link-project1"}/>
    
                    </div>
                </div>
                
            </div>
    
    
            <div class="mt-14">
                <div class="flex justify-center items-center gap-4 p-2">
                    <div class="relative w-1/2 s-688:w-full" id="container-project2">
                        <div class="flex">
                            <BulletPoint idName={"project2"}/>
                            <h1 class=" project h3 text-green-700 text-xl xs:text-sm xxs:text-xs"><span class="text-red-700">Deep Learning Components: </span>Un outil d'interface utilisateur simple pour créer des modèles d'apprentissage profond sans effort.</h1>
                        </div>
                        <h1 class="ml-4 project h3 text-xl xs:text-sm xxs:text-xs">SvelteKit/ flask</h1>
                        {#if projectBox}
                        <BoxProjects boxwidth={BoxW} boxheight={BoxH} idName={"box-project2"}/>
                        {/if}
                    </div>
                    <div class="relative">
                        <a href="https://deep-components.vercel.app" target="_blank"><img class="w-5 hover:scale-105" src={ExternalLink} alt="external link"/></a>
                        <EncircleLink idName={"link-project2"}/>
                    </div>
                </div>
                
            </div>
          
     
    
            <div class="mt-16">
                <div class="flex justify-center items-center gap-4 p-2">
                    <div class="relative w-1/2 s-688:w-full" id="container-project3">
                        <div class="flex">
                            <BulletPoint idName={"project3"}/>
                            <h1 class=" project h3 text-green-700 text-xl xs:text-sm xxs:text-xs"><span class="text-red-700">Apprenez la grammaire française avec l'anglais: </span></h1>
                        </div>
                        <h1 class="ml-4 project h3 text-xl xs:text-sm xxs:text-xs">Rust mdbooks</h1>
                        {#if projectBox}
                        <BoxProjects boxwidth={BoxW} boxheight={BoxH} idName={"box-project3"}/>
                        {/if}
                    </div>
                    <div class="relative">
                        <a href="https://solankirahulfr.github.io/french_grammer_avec_anglais/" target="_blank"><img class="w-5 hover:scale-105" src={ExternalLink} alt="external link"/></a>
                        <EncircleLink idName={"link-project3"}/>
                    </div>
                </div>
                
            </div>
            <div  class="h-full flex flex-col justify-center items-center s-688:w-full mt-12 xxs:mt-14 text-right">
                <span class="text-green-700 text-lg">Pas de pression</span>
                <Buttons buttonwidth={320} idName={"buttonAnchor2"} buttonName={"mais ici vous pouvez obtenir mon CV"}/>
            </div>
        </div>
    
    
    
    