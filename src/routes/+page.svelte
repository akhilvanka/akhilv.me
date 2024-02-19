<script>
  import P5 from "p5-svelte";
  import { browser } from '$app/environment';

  let screenSize;
  let screenHeight;
  let darkMode = true;


  if (browser) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkMode = true;
    } else {
        darkMode = false;
    }
  }

  const sketch = (p5) => {
		let t = 0; // time variable
        
		p5.setup = () => {
			p5.createCanvas(screenSize-1160, screenHeight-256);
			p5.noStroke();
			p5.fill('#D1C9BC');
		};

		p5.draw = () => {
            if (darkMode) {
			    p5.background(30, 50);
            } else {
                p5.background(240, 50)
            } // translucent background (creates trails)

			// make a x and y grid of ellipses
			for (let x = 0; x <= p5.width; x = x + 20) {
				for (let y = 0; y <= p5.height; y = y + 20) {
					
					// starting point of each circle depends on mouse position
					const xAngle = p5.map(p5.mouseX, 0, p5.width, -4 * p5.PI, 4 * p5.PI, true);
					const yAngle = p5.map(p5.mouseY, 0, p5.height, -4 * p5.PI, 4 * p5.PI, true);

					// and also varies based on the particle's location
					const angle = xAngle * (x / p5.width) + yAngle * (y / p5.height);

					// each particle moves in a circle
					const myX = x + 20 * p5.cos(2 * p5.PI * t + angle);
					const myY = y + 20 * p5.sin(2 * p5.PI * t + angle);

					p5.ellipse(myX, myY, 5); // draw particle
				}
			}

			t = t + 0.005; // update time
		};
	};
</script>

<svelte:head>
    <title>Akhil Vanka</title>
    <meta name="description" content="Someone trying to make the most of life while it lasts. Student at The George Washington University.">
    <meta name="keywords" content="Akhil Vanka, Akhil, Vanka, akhilvanka, akhilv, akhilv.me, akhilvanka_, akhilvanka.com, developer, student, gwu, naus, naus.app">
    <meta name="author" content="Akhil Vanka">
    <meta http-equiv="Content-Language" content="en">
    <link rel="canonical" href="https://akhilv.me">
    <meta name='og:title' content='Akhil Vanka'>
    <meta name='og:description' content='Someone trying to make the most of life while it lasts. Student at The George Washington University.'>
    <meta name='og:type' content='website'>
    <meta name='og:url' content='https://akhilv.me'>
    <meta name='og:image' content='https://akhilv.me/og.png'>
    <meta name='twitter:card' content='summary_large_image'>
    <meta name='twitter:site' content='@akhilvanka_'>
    <meta name='twitter:creator' content='@akhilvanka_'>
    <meta name='twitter:title' content='Akhil Vanka'>
    <meta name='twitter:description' content='Someone trying to make the most of life while it lasts. Student at The George Washington University.'>
    <meta name='twitter:image' content='https://akhilv.me/og.png'>
</svelte:head>


<svelte:window bind:innerWidth={screenSize} bind:innerHeight={screenHeight} />
<main class="text-darkGrey dark:text-offWhite text-[15px] md:text-[16px] md:my-[128px] my-[48px] antialiased underline-offset-2 box-border flex">
    <div class="grid md:grid-cols-[192px_680px_96px] max-w-[968px] mx-[24px] leading-[28px] grid-cols-1">
        <article class="md:col-start-2 md:col-end-2 space-y-[32px] col-start-1 col-end-1">
            <div class="space-y-[28px]">
                <div class="flex"> 
                    <h1 style="font-family: 'Inter', sans-serif;" class="font-medium flex-1">Akhil Vanka</h1>
                    <a href="https://www.matrix.0f.fyi" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70 block">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 6C12.5 6.27614 12.2761 6.5 12 6.5C11.7239 6.5 11.5 6.27614 11.5 6C11.5 5.72386 11.7239 5.5 12 5.5C12.2761 5.5 12.5 5.72386 12.5 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M18.5 6C18.5 6.27614 18.2761 6.5 18 6.5C17.7239 6.5 17.5 6.27614 17.5 6C17.5 5.72386 17.7239 5.5 18 5.5C18.2761 5.5 18.5 5.72386 18.5 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M18.5 12C18.5 12.2761 18.2761 12.5 18 12.5C17.7239 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.7239 11.5 18 11.5C18.2761 11.5 18.5 11.7239 18.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.5 6C6.5 6.27614 6.27614 6.5 6 6.5C5.72386 6.5 5.5 6.27614 5.5 6C5.5 5.72386 5.72386 5.5 6 5.5C6.27614 5.5 6.5 5.72386 6.5 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.5 12C6.5 12.2761 6.27614 12.5 6 12.5C5.72386 12.5 5.5 12.2761 5.5 12C5.5 11.7239 5.72386 11.5 6 11.5C6.27614 11.5 6.5 11.7239 6.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18C11.5 17.7239 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.7239 12.5 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M18.5 18C18.5 18.2761 18.2761 18.5 18 18.5C17.7239 18.5 17.5 18.2761 17.5 18C17.5 17.7239 17.7239 17.5 18 17.5C18.2761 17.5 18.5 17.7239 18.5 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.5 18C6.5 18.2761 6.27614 18.5 6 18.5C5.72386 18.5 5.5 18.2761 5.5 18C5.5 17.7239 5.72386 17.5 6 17.5C6.27614 17.5 6.5 17.7239 6.5 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                    </a>
                    <a href="https://twitter.com/akhilvanka_" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70 block">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="3.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C18.8125 4.75 19.25 9.125 19.25 12V13.25C19.25 14.3546 18.3546 15.25 17.25 15.25V15.25C16.1454 15.25 15.25 14.3546 15.25 13.25V8.75"></path>
                        </svg>    
                    </a>
                    <a href="https://linkedin.com/in/akhilvanka" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70 block">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.78168 19.25H13.2183C13.7828 19.25 14.227 18.7817 14.1145 18.2285C13.804 16.7012 12.7897 14 9.5 14C6.21031 14 5.19605 16.7012 4.88549 18.2285C4.773 18.7817 5.21718 19.25 5.78168 19.25Z"></path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 14C17.8288 14 18.6802 16.1479 19.0239 17.696C19.2095 18.532 18.5333 19.25 17.6769 19.25H16.75"></path>
                            <circle cx="9.5" cy="7.5" r="2.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.75 10.25C16.2688 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2688 4.75 14.75 4.75"></path>
                            </svg> 
                    </a>
                    <a href="https://github.com/akhilvanka" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70 block">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                            <rect width="14.5" height="14.5" x="4.75" y="4.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2"></rect>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.75 10.75L11.25 13L8.75 15.25"></path>
                            </svg>
                    </a>
                </div>

                <p style="font-family: 'DM Sans', sans-serif;">
                    <em style="font-family: 'Merriweather', serif">Developer. Photographer.</em>
                    Someone trying to make the most of life while it lasts. Currently a student at 
                    <a href="https://www.gwu.edu" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70">The George Washington University</a>
                    and building <a href="https://naus.app" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70">naus.app</a>.
                </p>
                <p style="font-family: 'DM Sans', sans-serif;">
                    Also an avid photographer in my daily life, check some stuff out on <a href="https://www.instagram.com/akhilvanka_" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70">Instagram</a>.
                </p>
            </div>
            <div style="font-family: 'DM Sans', sans-serif;" class="flex flex-row">
                <div class="flex-1">
                    <p class="text-[#737373] text-[14px] my-[12px]">Experience</p>
                    <a href="https://www.bernardsboe.com" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70">Bernards Township BOE</a>
                    <p class="text-[#737373] text-[15px] tracking-tight">Chromebook technician <br> and aide.</p>
                </div>
                <div class="flex-1 space-y-[12px]">
                    <p class="text-[#737373] text-[14px] my-[12px]">Projects</p>
                    <div>
                        <a href="https://github.com/akhilvanka/mobileID" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70">CBORD</a> 
                        <svg class='inline' width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='m19 15.477-.02-9.672a.802.802 0 0 0-.218-.577c-.145-.152-.34-.228-.587-.228H8.499a.751.751 0 0 0-.777.76c0 .199.076.371.227.517.15.145.326.218.525.218h3.733l4.52-.129-1.728 1.54-9.767 9.783a.692.692 0 0 0-.232.518c0 .205.078.387.235.545a.74.74 0 0 0 .542.237.73.73 0 0 0 .527-.224l9.775-9.78 1.544-1.727-.143 4.188v4.065c0 .199.075.376.225.531.15.155.327.232.531.232.202 0 .38-.076.534-.228a.768.768 0 0 0 .23-.569Z' fill='#c4b69f'/></svg>
                        <p class="text-[#737373] text-[15px] tracking-tight">Reverse engineering CBORD authentication.</p>
                    </div>
                    <div>
                        <a href="https://0f.fyi" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70">0f</a>
                        <svg class='inline' width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='m19 15.477-.02-9.672a.802.802 0 0 0-.218-.577c-.145-.152-.34-.228-.587-.228H8.499a.751.751 0 0 0-.777.76c0 .199.076.371.227.517.15.145.326.218.525.218h3.733l4.52-.129-1.728 1.54-9.767 9.783a.692.692 0 0 0-.232.518c0 .205.078.387.235.545a.74.74 0 0 0 .542.237.73.73 0 0 0 .527-.224l9.775-9.78 1.544-1.727-.143 4.188v4.065c0 .199.075.376.225.531.15.155.327.232.531.232.202 0 .38-.076.534-.228a.768.768 0 0 0 .23-.569Z' fill='#c4b69f'/></svg>
                        <p class="text-[#737373] text-[15px] tracking-tight">Removes paywall's for you.</p> 
                    </div>
                    <div>
                        <a href="https://github.com/akhilvanka/merlin" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70">Merlin</a>
                        <svg class='inline' width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='m19 15.477-.02-9.672a.802.802 0 0 0-.218-.577c-.145-.152-.34-.228-.587-.228H8.499a.751.751 0 0 0-.777.76c0 .199.076.371.227.517.15.145.326.218.525.218h3.733l4.52-.129-1.728 1.54-9.767 9.783a.692.692 0 0 0-.232.518c0 .205.078.387.235.545a.74.74 0 0 0 .542.237.73.73 0 0 0 .527-.224l9.775-9.78 1.544-1.727-.143 4.188v4.065c0 .199.075.376.225.531.15.155.327.232.531.232.202 0 .38-.076.534-.228a.768.768 0 0 0 .23-.569Z' fill='#c4b69f'/></svg>
                        <p class="text-[#737373] text-[15px] tracking-tight">PJLINK proof-of-concept for local school district.</p> 
                    </div>
                </div>
                <div class="flex-1">
                    <p class="text-[#737373] text-[14px] my-[12px]">Research</p>
                    <div>
                        <a href="https://research.akhilv.me" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70">Testing</a>
                        <svg class='inline' width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='m19 15.477-.02-9.672a.802.802 0 0 0-.218-.577c-.145-.152-.34-.228-.587-.228H8.499a.751.751 0 0 0-.777.76c0 .199.076.371.227.517.15.145.326.218.525.218h3.733l4.52-.129-1.728 1.54-9.767 9.783a.692.692 0 0 0-.232.518c0 .205.078.387.235.545a.74.74 0 0 0 .542.237.73.73 0 0 0 .527-.224l9.775-9.78 1.544-1.727-.143 4.188v4.065c0 .199.075.376.225.531.15.155.327.232.531.232.202 0 .38-.076.534-.228a.768.768 0 0 0 .23-.569Z' fill='#c4b69f'/></svg>
                        <p class="text-[#737373] text-[15px] tracking-tight">Website full of interesting ideas.</p>  
                    </div> 
                </div> 
            </div>
            <div style="font-family: 'DM Sans', sans-serif;">
                <p class="text-[#737373] text-[14px] my-[12px]">Contact</p> 
                <p>Feel free to ask me any questions, or reach over on any platform I exist upon. I'm always open to new ideas and opportunities.
                <br><br>
                <a href="mailto:hi@akhilv.me" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70">hi@akhilv.me</a>
                </p>
            </div>
            <footer class="text-[#737373] text-[14px] my-[12px]">
                <p>© 2023 Akhil Vanka</p>
        </article>
    </div>
    {#key screenSize}
        {#if screenSize > 1160}
            <div class="mr-[192px] subpixel-antialiased sticky">
                <P5 {sketch} />
            </div>
        {/if} 
    {/key}
</main>
