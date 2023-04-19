class about extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML= ` <div class="container">
            <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About me</h2>
            <div class="about-content">
                <div class="column left">
                    <img src="Chit.jpeg" alt="myself">
                </div>
                <div class="column right">
                    <div class="text">I'm Chitranshu, I am a cloud <span class="typing-2"></span></div>
                    <p>Hey their, I  born and brought up in Jhunjhunu itself currently i am persuing MCA from JECRC University except all this tech things i like bike riding.</p>
                </div>
            </div>
        </div>
    </section>
    </div>`
    }
};


customElements.define('app-about', about);