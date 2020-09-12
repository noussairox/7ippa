function affciheFunction(){
    let AfficheAll="<div class='contactForm'><form action='contact' method='POST' enctype='multipart/form-data'><h1>Comments</h1><label for='nom'>Nom:</label><br><input type='text' id='nom' name='nom'><br><label for='email'>Email:</label><br><input type='email' id='email' name='email'><br><label for='rate'>Rate:</label><br><select name='rate'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select><br><label for='message'>Message:</label><br><textarea name='message' id='message' cols='80' rows='6'></textarea><br><input type='submit' value='Send'></form></div>"
    document.getElementById('comments').outerHTML=AfficheAll;
}

/*
let elem=Array.from(document.getElementsByClassName("rates"))

let rates = elem[0].getAttribute('id');
let elems=(document.getElementsById(rates.toString());
for(let e=0;e<parseInt(rates);e++){
    ee=document.createElement("img");
    ee.setAttribute('src','/static/images/starYellow.jfif');
    ee.setAttribute('class','star');
    elems.appendChild(ee);
    
}


console.log(rates)*/