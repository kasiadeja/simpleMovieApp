class NewMovie extends HTMLElement{

    set el(el) {
        this.innerHTML = `
        <style>
        body{
            font-family: 'Montserrat', sans-serif;
            line-height: 1.5;
            font-size: 14px;
            color: whitesmoke;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: black;
        }   

        .section{
            border: 2rem solid rgba(73, 72, 72, 0.514);
            width: 40vw;
            margin: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        a{
            text-decoration: none;
            color: whitesmoke;
            background-color: rgba(73, 72, 72, 0.514);
            text-align: center;
        }

        img{
            max-width: 147px;
            height: 200px; 
            border: 2px solid white;
            margin: 1rem;
             
        }
        
        p{
            font-size: 0.8rem;
            text-align: center;
        }
        </style>
 
        <div class=section>
         <a href="${el.id.label}">
          <h3>${el.title.label}</h3>
          <img src="${el['im:image'][2].label}">  
          <p>${el.summary.label}</p>
          </a>
        </div> 
        `;
    }

}

customElements.define('new-movie' , NewMovie);