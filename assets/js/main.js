(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
var M=[["B&eacute;chamel", "Milk thickened with a white roux.", ["Mornay (with cheese)", "Soubise (with onion)", "Cream sauce"], "Lasagne, gratins, macaroni cheese"], ["Velout&eacute;", "Light stock thickened with a blond roux.", ["Supr&ecirc;me (with cream)", "Mushroom sauce", "Herb sauce"], "Chicken, fish, vegetables"], ["Espagnole", "Brown stock with a brown roux and tomato.", ["Demi-glace", "Mushroom brown sauce", "Pepper sauce"], "Steak, roasts"], ["Tomato", "Tomatoes simmered with aromatics.", ["Marinara-style", "Creole", "Spicy tomato"], "Pasta, fish, eggs"], ["Hollandaise", "Butter emulsified into egg yolks with lemon.", ["B&eacute;arnaise (with tarragon)", "Maltaise (with orange)", "Mousseline (with cream)"], "Eggs, asparagus, fish"]];
var nodes=[].slice.call(document.querySelectorAll('.sc-node'));if(nodes.length){function mt(i){nodes.forEach(function(n,j){n.classList.toggle('on',i===j);n.setAttribute('aria-pressed',i===j?'true':'false');});var m=M[i];$('mt-o').innerHTML=m[2].map(function(k){return '<div>'+k+'</div>';}).join('')+'<p><b>Great with:</b> '+m[3]+'</p>';}nodes.forEach(function(n,i){n.addEventListener('click',function(){mt(i);});});mt(0);}
var P=[['steak','Steak',5,'shallot'],['chicken','Chicken',4,'shallot and garlic'],['pork chops','Pork',4,'onion'],['fish fillets','Fish',2,'shallot'],['mushrooms','Mushroom',3,'garlic']],L=[['stock','250 ml stock',4],['cream','150 ml stock, then 100 ml cream',5],['lemon','200 ml stock and the juice of half a lemon',3],['tomato','150 ml stock and 3 tbsp chopped tomatoes',5]],F=[['butter','Swirl in 1&ndash;2 tbsp cold butter, a piece at a time.'],['mustard','Whisk in 1 tbsp Dijon or wholegrain mustard.'],['herbs','Stir in a handful of chopped parsley, chives or tarragon.'],['pepper','Add 1 tsp crushed peppercorns and a spoon of cream.']];
var pp=$('pb-p');if(pp){var pl=$('pb-l'),pf=$('pb-f');function pb(){var p=P[+pp.value],l=L[+pl.value],f=F[+pf.value];
  $('pb-o').innerHTML='<h3>'+p[1]+' with '+l[0]+' and '+f[0]+' sauce</h3><ol><li>Sear the '+p[0]+'. Rest on a warm plate. <span class="tm">'+p[2]+'+ min</span></li><li>Pour off most fat. Soften a little '+p[3]+'. <span class="tm">1 min</span></li><li>Deglaze with '+l[1]+'. Scrape up the browned bits.</li><li>Simmer to reduce by half, until it coats a spoon. <span class="tm">'+l[2]+' min</span></li><li>Off the heat: '+f[1]+' Season with salt, pepper and lemon.</li></ol><p>Serves 2. Spoon over and eat straight away.</p>';}
 [pp,pl,pf].forEach(function(x){x.addEventListener('change',pb);});pb();}
var rv=$('rx-v');if(rv){var th=[].slice.call(document.querySelectorAll('input[name=th]'));function rx(){var k=1;th.forEach(function(x){if(x.checked)k=+x.value;});var v=Math.max(0,parseFloat(rv.value)||0),per=[30,50,75][k],g=Math.round(v/1000*per),tb=Math.round(g/14*2)/2;
  $('rx-b').style.height=Math.min(130,20+g*.6)+'px';$('rx-f').style.height=Math.min(130,20+g*.6)+'px';$('rx-o').innerHTML='<strong>'+g+' g + '+g+' g</strong><p>butter and plain flour (about '+tb+' tbsp each) for '+v+' ml of liquid.</p><p class="sc-small">Cook the roux 2&ndash;3 minutes, then whisk in warm liquid gradually.</p>';}
 rv.addEventListener('input',rx);th.forEach(function(x){x.addEventListener('change',rx);});rx();}
[].forEach.call(document.querySelectorAll('.sc-fx'),function(b){b.addEventListener('click',function(){b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')==='true'?'false':'true');});});
})();
