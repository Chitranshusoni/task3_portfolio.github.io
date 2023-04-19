class about extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML= ` <div class="container">
        <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">My creative skills & experiences.</div>
                    <p>I am a beginner in this work but i know how to get work done and I am getting better day by day.</p>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>80%</span>
                        </div>
                        <div class="line css"></div>
                    </div>

                    <div class="bars">
                        <div class="info">
                            <span>c language</span>
                            <span>70%</span>
                        </div>
                        <div class="line bootstrap"></div>
                    </div>

                    <div class="bars">
                        <div class="info">
                            <span>Python</span>
                            <span>60%</span>
                        </div>
                        <div class="line js"></div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </div>`
    }
};


customElements.define('app-about', about);