import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  document.body.addEventListener("click", () => {
    
    let sampleText = 'Sample Text';
    const  elements = 5;
    for(let i=0;i<elements;i++)
    {
        let newarticle = document.createElement('article');
        let articleIdName = 'article-'+i;

        newarticle.setAttribute('id',articleIdName);
        document.body.appendChild(newarticle);
        
        document.getElementById(articleIdName).classList.add('message');
        document.getElementById(articleIdName).innerHTML = sampleText;
    }

    
  });

});
