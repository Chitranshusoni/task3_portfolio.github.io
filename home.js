class home extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML=  <div class="container">
            <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Hello, my name is</div>
                <div class="text-2">Chitranshu Soni</div>
                <div class="text-3">And I'm a cloud <span class="typing"></span></div>
            
            </div>

        </div>
    </section>
    </div>
 }
};


customElements.define('app-home', home);
