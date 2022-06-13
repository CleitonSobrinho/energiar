


//Menu mobile

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu () {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu )



// automatic slide effect

let dots = document.getElementsByClassName("dot");
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 8 seconds

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}




function calcular(){    
    
  if(document.getElementById("sol").value == 1){
      amb = document.getElementById("metro").value *  600;
      }else{
          
          amb = document.getElementById("metro").value * 800;
          
          }
              
  pessoas = document.getElementById("pessoas").value * 600 - 600;
  equipamento = document.getElementById("equipamento").value * 600;
  
  
  document.getElementById("texto").innerHTML = ""; 
  document.getElementById("opcao").innerHTML = "";
  document.getElementById("total").innerHTML ="";
  
  if (form.metro.value=="") {
  document.getElementById("texto").innerHTML += "Preencher o campo MÂ²";
  form.metro.focus();
  return false;
  }
 
  if (form.pessoas.value=="") {
  document.getElementById("texto").innerHTML += "Preencher o nÃºmero de pessoas";
  form.pessoas.focus();
  return false;
  }
  if (form.equipamento.value=="") {
 document.getElementById("texto").innerHTML += "Preencher o nÃºmero de equipamentos";
  form.equipamento.focus();
  return false;
  }
  
 
  else{
      
  document.getElementById("total").innerHTML += parseFloat(amb+pessoas+equipamento);

      
      }

  total = (amb+pessoas+equipamento) ;
  $('div#resposta').addClass('opa'); 
  
  document.getElementById("opcao").innerHTML = "";
  document.getElementById("rodape").innerHTML = "";
  
  
  if(total <= 7000){
  
  $('div#resposta').addClass('opa'); 
    document.getElementById("rodape").innerHTML = "<a > Para calcular novamente clique aqui</a>";
  
      }
  if(total > 7000 && total < 9099 ){

   $('div#resposta').addClass('opa'); 
    document.getElementById("rodape").innerHTML = "<a > Para calcular novamente clique aqui</a>";
      }
      
  if(total > 9100 && total < 12099 ){
    
    $('div#resposta').addClass('opa'); 
        document.getElementById("rodape").innerHTML = "<a > Para calcular novamente clique aqui</a>";
      }
      
  if(total > 12100 && total < 18099 ){
      
   $('div#resposta').addClass('opa');  
    document.getElementById("rodape").innerHTML = "<a >  Para calcular novamente clique aqui</a>";
      }   
   
  if(total > 18100 && total < 24099 ){
      
   $('div#resposta').addClass('opa');  
  document.getElementById("rodape").innerHTML = "<a > Para calcular novamente clique aqui</a>";
      }    

  if(total > 24100 ){
  $('div#resposta').addClass('opa');
  $('div#total').addClass('totaldois');
  $('div#rodape').addClass('rodapedois');
  document.getElementById("opcao").innerHTML = "<span>Seu ambiente necessita de um projeto especial. Entre em contato com nossa equipe tÃ©cnica atravÃ©s do televendas: <b>(11) 3003 - 3278 ou (11) 3232 - 3100 </b><br>(Apenas para SÃ£o Paulo e Santos)</span>";
  document.getElementById("rodape").innerHTML += "<a >  Para calcular novamente clique aqui</a>";
      }   
      
  }




