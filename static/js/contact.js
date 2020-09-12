function affciheFunction(){
    let AfficheAll="<div class='contactForm'><form action='contact' method='POST' enctype='multipart/form-data'><h1>Comments</h1><label for='nom'>Nom:</label><br><input type='text' id='nom' name='nom'><br><label for='email'>Email:</label><br><input type='email' id='email' name='email'><br><label for='rate'>Rate:</label><br><select name='rate'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select><br><label for='message'>Message:</label><br><textarea name='message' id='message' cols='80' rows='6'></textarea><br><input type='submit' value='Send'></form></div>"
    document.getElementById('Mrecomments').outerHTML=AfficheAll;
}


var MYelement=Array.from(document.getElementsByClassName('rates'));

for (let a=0;a<MYelement.length;a++){
    let results=MYelement[a].getAttribute('id');
    for(let i=0;i<parseInt(results);i++){
        yellow_=document.createElement('img');
        yellow_.setAttribute('src','/static/images/starYellow.jfif');
        yellow_.setAttribute('class','star');
        MYelement[a].appendChild(yellow_);
    }
    for(let inc = 0; inc<5-parseInt(results); inc++){
        gray_=document.createElement('img');
        gray_.setAttribute('src','/static/images/starGray.png');
        gray_.setAttribute('class','star');
        MYelement[a].appendChild(gray_);
    }
}

