let map;
let shortDescription = document.getElementById("description");
const vieuxPortLoc = { lat: 43.2959362, lng: 5.3738812749023 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.3, lng: 5.4 },
    zoom: 12,
  });
}

window.initMap = initMap;

function vieuxPort() {
   map = new google.maps.Map(document.getElementById("map"), {
    center: vieuxPortLoc,
    zoom: 16,
  });
   document.getElementById("presentation").style.backgroundImage= "url('media/vieuxport.jpg')" ;
   document.getElementById("presentation").style.backgroundSize = "auto";
   document.getElementById("description").style.opacity ="0.9";
   shortDescription.innerHTML="Maecenas posuere neque vitae viverra vehicula. Sed quis diam pharetra. Nam et fermentum ipsum. Fringilla risus sagittis. Pellentesque urna. Aenean sed sapien tortor. Pellentesque eget ante odio. Pellentesque interdum mauris sit amet massa lobortis suscipit.";
   const marker = new google.maps.Marker({
       position: vieuxPortLoc,
       map: map,
     });
}




function prado() {
   map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.26327448635048, lng: 5.367873126709002 },
    zoom: 16,
  });
   document.getElementById("presentation").style.backgroundImage= "url('media/prado.jpg')" ;
   document.getElementById("presentation").style.backgroundSize = "auto";
   document.getElementById("description").style.opacity ="0.9";
   shortDescription.innerHTML="Cras viverra commodo convallis. Nulla nec metus elementum, ultrices leo vel, varius ante. Aenean at commodo turpis, eu finibus nisi.Maecenas posuere neque vitae viverra vehicula. Etiam porttitor venenatis mi eu eleifend.";
}

function panier() {
   map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.29995778914463, lng: 5.367744380676247 },
    zoom: 17,
  });
   document.getElementById("presentation").style.backgroundImage= "url('media/panier.jpeg')" ;
   document.getElementById("presentation").style.backgroundSize = "auto";
   document.getElementById("description").style.opacity ="0.9";
   shortDescription.innerHTML="Suspendisse ultrices porttitor nibh nec consectetur. Ut dapibus ex sed quam gravida, eu aliquam libero accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
}

function nddm() {
   map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.29308853837261, lng: 5.383818859302498 },
    zoom: 17,
  });
   document.getElementById("presentation").style.backgroundImage= "url('media/coursjulien.jpg')" ;
   document.getElementById("presentation").style.backgroundSize = "auto";
   document.getElementById("description").style.opacity ="0.9";
   shortDescription.innerHTML="Aliquam dui lorem, egestas in fermentum in, tempus at tortor. Morbi nulla ipsum, tincidunt et porta at, ullamcorper facilisis justo. Etiam interdum, ante sit amet commodo fermentum, risus massa aliquam ligula, id convallis nisl dolor a nulla.";
}

function malmousque() {
   map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.28048636733, lng: 5.350790137 },
    zoom: 16,
  });
   document.getElementById("presentation").style.backgroundImage= "url('media/malmousque.jpg')" ;
   document.getElementById("presentation").style.backgroundSize = "auto";
   document.getElementById("description").style.opacity ="0.9";
   shortDescription.innerHTML="Morbi elementum risus quis scelerisque ultrices. Vestibulum elementum metus arcu, sed pellentesque tellus tristique at. In feugiat neque sit amet libero pellentesque, in blandit magna molestie.";
}

function frioul() {
   map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.28031355623479, lng: 5.306415671550608 },
    zoom: 15,
  });
   document.getElementById("presentation").style.backgroundImage= "url('media/frioul.jpeg')" ;
   document.getElementById("presentation").style.backgroundSize = "auto";
   document.getElementById("description").style.opacity ="0.9";
   shortDescription.innerHTML="Sed tincidunt egestas commodo. Nunc sollicitudin placerat elit eu imperdiet. Proin sit amet nibh semper, eleifend libero luctus, posuere nisl. Aenean viverra a enim ut convallis.";
}