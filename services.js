class services extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML= ` <div class="container">
        <section class="services" id="services">
        <div class="max-width">
            <h2 class="title">My services</h2>
            <div class="serv-content">
                <div class="card">
                    <div class="box">
                        <i class="fas fa-paint-brush"></i>
                        <div class="text">Network Design</div>
                        <p>Network-as-a-service (NaaS) is a cloud service model in which customers rent networking services from cloud providers.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-chart-line"></i>
                        <div class="text">Identify & Security Design</div>
                        <p>Identity Security is a comprehensive solution for securing all identities– human or machine – throughout the cycle of accessing critical assets.
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-code"></i>
                        <div class="text">Web Developer</div>
                        <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </section>
    </div>`
    }
};


customElements.define('app-services', services);