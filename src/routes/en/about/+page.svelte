<script>
    import ProfilePicture from "../../../images/mainImage.png";
    import GithubLogo from "../../../images/githubLogo.svelte";
    import LinkedinLogo from "../../../images/linkedinLogo.svelte";
    import Buttons from "../../../Components/Buttons.svelte";
    import Star from "../../../images/star.svelte";
    import Bracket from "../../../images/Bracket.svelte";
	import { onMount } from "svelte";

    let windowWidth, sizeBracket1=185, sizeBracket2=150;

    onMount(()=>{
        windowWidth = window.innerWidth;
    })

    $:if (windowWidth>600) {sizeBracket1 = 185; sizeBracket2=150}
        else if (windowWidth<600) {sizeBracket1 = 140; sizeBracket2=110}
        else if (windowWidth<365) {sizeBracket1 = 90; sizeBracket2=50}

    

</script>

<div class="flex mx-20 mt-8 gap-4 xxs:gap-1 xs:mx-5 xxs:mx-4 xxs:mt-4">
    <div class="flex-col w-1/5 xs:w-2/5">
        <div class="w-full">
            <img class="drop-shadow-xl w-full" src={ProfilePicture} alt="profile picture"/>
        </div>
        <div class="flex gap-4 mx-4 my-4 xs:mx-0">
            <a href="https://www.linkedin.com/in/rahulsolanki11292/" class="hover:scale-105" target="_blank" rel="noreferrer"><GithubLogo size={32}/></a>
            <a href="https://github.com/solankiRahulFr" class="hover:scale-105" target="_blank" rel="noreferrer"><LinkedinLogo size={32}/></a>
            <a href="https://www.kaggle.com/solankirahulfr" target="_blank" class="text-green-700 text-3xl hover:scale-105">k</a>
        </div>
        <div class="mt-8">
            <Buttons buttonwidth={200} idName={"buttonAnchor1"}/>
        </div>

    </div>
    <div class="flex-col w-4/5 mx-6 mt-10 xs:mx-0 xs:w-3/5">
        <h1 class="intro 2xl:text-4xl h3 text-3xl xs:text-lg xxs:text-sm">I am Rahul Solanki</h1>
        <h1 class="intro 2xl:text-4xl h3 text-3xl xs:text-lg xxs:text-sm">I have 5 years of experience, from <span class="text-green-700">Mechanical Design Engineer</span> to <span class="text-green-700">Full Stack Development</span> to <span class="text-red-700">Artificial intelligence Engineer</span>.</h1>
        <div class="flex flex-wrap gap-8 mt-4">
            <div class="h-full flex justify-start items-center">
                <h1 class="intro text-nowrap h3 text-3xl xs:text-lg xxs:text-sm">I like </h1>
                <Bracket size={sizeBracket1}/>
                <div class="ml-[-25px]">
                    <h1 class="h3 text-3xl xs:text-lg xxs:text-sm">to learn</h1>
                    <h1 class="h3 text-3xl xs:text-lg xxs:text-sm">to draw</h1>
                    <h1 class="h3 text-3xl xs:text-lg xxs:text-sm">Math</h1>
                    <h1 class="h3 text-3xl xs:text-lg xxs:text-sm">Science</h1>
                    <h1 class="h3 text-3xl xs:text-lg xxs:text-sm">Technology</h1>
                </div>
            </div>
            <div class="h-full flex justify-start items-center">
                <h1 class="intro text-nowrap h3 text-3xl xs:text-lg xxs:text-sm ">I am </h1>
                <Bracket size={sizeBracket2} skew={true} />
                <div class="ml-[-25px]">
                    <h1 class="h3 text-3xl xs:text-lg xxs:text-sm mxs:text-sm">a lot curious</h1>
                    <h1 class="h3 text-3xl xs:text-lg xxs:text-sm mxs:text-sm">little innovative</h1>
                    <h1 class="h3 text-3xl xs:text-lg xxs:text-sm mxs:text-sm">little creative</h1>
                    <h1 class="h3 text-3xl xs:text-lg xxs:text-sm mxs:text-sm">always learning</h1>
                </div>
            </div>
        </div>
    </div>

</div>


<style>
    .intro{
        display: block;
        background-image: url("./../../../images/star.svg");
        background-repeat: no-repeat;
        background-position: left 7px;
        background-size: 20px;
        padding-left: 18px;
    }
</style>