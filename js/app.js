document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let el = document.getElementsByName("q")[0];
    //let btn = document.getElementsByTagName("button")[0]
    let action = document.querySelector("form");
    let dates = new Date().getFullYear();
    //console.log(btn)
    /**
     * 
     * @param {*} element_footer 
     */
    let footer = element_footer => {
        element_footer.innerHTML = `
        <img alt="AUR license" src="https://img.shields.io/aur/license/c">
        <time datetime="2023-10-02"> - ${dates}</time>`;
    };

    footer(document.querySelector("footer p"));

    /* objet light mode interface */
    const button_mode = {
        parents: document.querySelector("body"),
        light_mode: document.querySelector(".light-mode"),
        logo: document.querySelector("button span"),
        btn_toggle() {
            this.light_mode.addEventListener("click", e => {

                this.parents.classList.toggle("mode-light");
                this.logo.classList.toggle("toogle-color");
                e.stopPropagation();
            });
        }
    };

    button_mode.btn_toggle(); //event


    /* btn.addEventListener("click",(e)=>{
    e.preventDefault()
      // el.value ? console.log(el.value) : console.log("erreur")
    if(el.value){
        console.log(action.getAttribute("action")+el.value)
     
           
        }
        else{
            console.log("erreur")
        }
    }) */
});