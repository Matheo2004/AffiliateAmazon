gsap.set(".navbar-button-animated::before", { scaleX: 0, transformOrigin: "right center" });

gsap.utils.toArray(".navbar-button-animated").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, {
      color: "#333",
      backgroundColor: "#fff",
      duration: 0.3,
    });
    gsap.to(button.querySelector("::before"), {
      scaleX: 1,
      opacity: 1,
      duration: 0.6,
      ease: "expo.out",
    });
    gsap.to(button, { x: 10, duration: 0.6, ease: "expo.out" });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      color: "#fff",
      backgroundColor: "#333",
      duration: 0.3,
    });
    gsap.to(button.querySelector("::before"), {
      scaleX: 0,
      opacity: 0,
      duration: 0.6,
      ease: "expo.out",
    });
    gsap.to(button, { x: 0, duration: 0.6, ease: "expo.out" });
  });
});


gsap.utils.toArray(".button-categorie").forEach((category) => {
    const link = category.querySelector("a");
  category.addEventListener("mouseenter", () => {
    gsap.to(category, {
      backgroundColor: "#333",
      color: "#fff",
      scale: 1.1,
      duration: 0.3,
    });
    gsap.to(link, {
      color: "#fff",
      duration: 0.3,
    });
  });

  category.addEventListener("mouseleave", () => {
    gsap.to(category, {
      backgroundColor: "#fff",
      color: "#333",
      scale: 1,
      duration: 0.3,
    });
    gsap.to(link, {
      color: "#333",
      duration: 0.3,
    });
  });
});


// JavaScript with GSAP
gsap.utils.toArray(".contact-button").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, {
      backgroundColor: "#ff6600",
      color: "#fff",
      duration: 0.3,
    });
    gsap.to(button.querySelector("::before"), {
      scaleX: 1,
      opacity: 1,
      duration: 0.6,
      ease: "expo.out",
    });
    gsap.to(button, { x: 10, duration: 0.6, ease: "expo.out" });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      backgroundColor: "#333",
      color: "#fff",
      duration: 0.3,
    });
    gsap.to(button.querySelector("::before"), {
      scaleX: 0,
      opacity: 0,
      duration: 0.6,
      ease: "expo.out",
    });
    gsap.to(button, { x: 0, duration: 0.6, ease: "expo.out" });
  });
});

gsap.set("#back_button", { opacity: 0 });

gsap.to("#back_button", {
  opacity: 1,
  pointerEvents: "auto",
  delay: 0.5,
  duration: 0.5,
});


//animation aparition nav
/*gsap.registerPlugin(ScrollTrigger);   

gsap.from(".navbar-button-animated", {
  opacity: 0,
  x: -20,
  duration: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".navbar-button-animated",
    start: "top 80%",
  },
});*/


gsap.registerPlugin(ScrollTrigger);

const buttons = document.querySelectorAll(".product a");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, {
      scale: 1.1,
      color: "#fff",
      backgroundColor: "#ff6600",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      duration: 0.3,
      ease: "power2.out",
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      scale: 1,
      color: "#fff",
      backgroundColor: "#333",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
const buttons1 = document.querySelectorAll(".product-button");
buttons1.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    var parent = button.closest(".product");
    let isZoomed = parent.classList.contains("zoomed");

    if (!isZoomed) {
      // Check the position of the parent div
      const centerX = window.innerWidth / 2;
      const parentRect = parent.getBoundingClientRect();
      const parentCenterX = parentRect.left + parentRect.width / 2;
      const translateX = centerX - parentCenterX;

      const centerY = window.innerHeight / 2;
      const parentCenterY = parentRect.top + parentRect.height / 2;
      const translateY = centerY - parentCenterY;

      gsap.to(parent, {
        x: translateX,
        y: translateY,
        scale:1.75,
        zIndex: 9999,
        opacity: 1,
        duration: 0.5,
        "background-position": "20px 100px",
        "background-size": "150px",
        ease: "power2.out",
      });
      gsap.to(parent.querySelector(".titre"), {
        fontSize: "10px", // Remplacez par la taille souhaitée en pixels
        duration: 0.5,
        left: "30px", // Remplacez par la position horizontale souhaitée en pixels
        "margin-top": "5", // Ajoutez cette ligne pour supprimer la marge supérieure
        width: "150px", // Remplacez par la largeur souhaitée en pixels
        ease: "power2.out"
      });
      gsap.to(parent.querySelector("p a"), {
        transform: "translateX(-115px) translateY(90px)", // Remplacez les valeurs par les décalages horizontaux et verticaux souhaités en pixels
        scale:0.75,
        duration: 0.5,
      });
      parent.querySelector(".note").style.display="none";
      parent.classList.add("zoomed");
      // Disable buttons in other divs
      const otherButtons = document.querySelectorAll(".product:not(.zoomed)");
      otherButtons.forEach((otherButton) => {
        otherButton.style.pointerEvents = "none";
      });
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 0.9,
            color: "#fff",
            backgroundColor: "#ff6600",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 0.75,
            color: "#fff",
            backgroundColor: "#333",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
      parent.querySelector(".description").style.whiteSpace = "pre-line";
      parent.querySelector(".description").style.display="block";
      gsap.to(parent.querySelector(".description"), {
        transform: "translateX(125px) translateY(-50px)", // Remplacez les valeurs par les décalages horizontaux et verticaux souhaités en pixels
        scale:0.6,
        duration: 0.5,
        width:300,
        marginTop:"-120px",
        marginBottom: '-500px',
      });
    } else {
      gsap.to(parent, {
        translateX: "0%",
        translateY: "0%",
        scale:1,
        zIndex: 1,
        opacity: 1,
        duration: 0.3,
        "background-position": "",
        "background-size": "",
        ease: "power2.out",
      });
      gsap.to(parent.querySelector(".titre"), {
        fontSize: "", // Remplacez par la taille d'origine du texte
        left: "", // Remplacez par la position horizontale d'origine
        marginTop: "", // Remplacez par la marge supérieure d'origine
        width: "", // Remplacez par la largeur d'origine
        duration: 0.5,
        ease: "power2.out"
       });
      gsap.to(parent.querySelector("p a"), {
        scale:1,
        duration: 0.3,
        transform: "",
      });
      // Enable buttons in other divs
      const otherButtons = document.querySelectorAll(".product:not(.zoomed)");
      otherButtons.forEach((otherButton) => {
        otherButton.style.pointerEvents = "auto";
      });
      parent.classList.remove("zoomed");
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.1,
            color: "#fff",
            backgroundColor: "#ff6600",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            color: "#fff",
            backgroundColor: "#333",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
      parent.querySelector(".note").style.display="block";
      parent.querySelector(".description").style.display="none";
      gsap.to(parent.querySelector(".description"), {
        transform: "", // Remplacez les valeurs par les décalages horizontaux et verticaux souhaités en pixels
        scale:"",
        duration: 0.5,
        width:"",
        marginTop:"",
        marginBottom: '',
      });
    }
  });
});

// Sélectionnez la section main
const categoriesSection = document.querySelector("#categories");
const tab_product = document.querySelector("#tab_product");
const backButton = document.getElementById("back_button");

// Sélectionnez les liens de catégorie
const categoryLinks = document.querySelectorAll("#categories li");

// Créez un tableau de produits (à remplacer par vos propres données)
/*const produits_Informatiques = [
  { nom: "Ordinateur portable THOMSON N15C12SL512", image: "https://m.media-amazon.com/images/I/71wuLmUUpyL._AC_UL600_FMwebp_QL65_.jpg", lien: "https://www.amazon.fr/Thomson-N15C12SL512-Ordinateur-portable-THOMSON/dp/B0BLSTFGSW?content-id=amzn1.sym.5e1b444f-510c-4597-a3f9-b15054255be6&pd_rd_r=9e897408-7c1d-4b89-8868-3e0da7ff7e1f&pd_rd_w=uhe5A&pd_rd_wg=6t6HI&pf_rd_p=5e1b444f-510c-4597-a3f9-b15054255be6&pf_rd_r=K16RB1QDD7ZYHHR9MPM7&qid=1685554275&refinements=p_72%3A437873031&s=computers&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&psc=1&linkCode=ll1&tag=amazonprom083-21&linkId=c451dc3c7dd0c6050b3266b3c362a365&language=fr_FR&ref_=as_li_ss_tl" },
  { nom: "Produit 2", image: "chemin-de-l-image-2.jpg" },
  { nom: "Produit 3", image: "chemin-de-l-image-3.jpg" },
  // Ajoutez d'autres produits selon vos besoins
];*/

// Créez un objet contenant les tableaux de produits avec différents noms
const produitsParCategorie = {
  Ordinateur_Portable: [
    { nom: "Ordinateur portable THOMSON N15C12SL512", 
    image: "https://m.media-amazon.com/images/I/71wuLmUUpyL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3N5Rw9u", 
    descr: "Marque  SGIN\n Taille de l'écran 15,6 Pouces\n Taille du disque dur  256 Go\n Modèle du CPU Celeron\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  Windows 11\n Caractéristique spéciale  Portable, Bluetooth\n Description de la carte graphique Intégré Coprocesseur graphique  Intel Celeron Vitesse du CPU  2,8 GHz",
    note: "4.3"},
    
    { nom: "SGIN Ordinateur Portable 15,6 Pouces Windows 11", 
    image: "https://m.media-amazon.com/images/I/71Itr7FLPmL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3qlNEYX", 
    descr: "Marque  SGIN\n Taille de l'écran 15,6 Pouces\n Taille du disque dur  256 Go\n Modèle du CPU Celeron\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  Windows 11\n Caractéristique spéciale  Portable, Bluetooth\n Description de la carte graphique Intégré Coprocesseur graphique  Intel Celeron Vitesse du CPU  2,8 GHz",
    note: "4.3"},
    
    { nom: "MENGHU 15.6 Ordinateur Portable Windows 11", 
    image: "https://m.media-amazon.com/images/I/61qTDr4oIfL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3IUUPxP", 
    descr: "Marque  MENGHU\n Nom de modèle M15 pro\n Taille de l'écran 15,6 Pouces\n Modèle du CPU Celeron\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  Windows 11\n Caractéristique spéciale  Portable, Bluetooth\n Description de la carte graphique Intégré Vitesse du CPU  2,8 GHz\n Description du disque dur SSD",
    note: "4.3"},
    
    { nom: "Apple Ordinateur Portable MacBook Air 2020", 
    image: "https://m.media-amazon.com/images/I/61EdyD3MchL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3OOuYLC", 
    descr: "Marque  Apple\n Nom de modèle Macbook air\n Taille de l'écran 13\n Couleur Argent\n Taille du disque dur  256 Go\n Modèle du CPU Apple A8\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  MacOS 10.14 Mojave\n Caractéristique spéciale  Fingerprint Reader, Portable\n Description de la carte graphique Intégré",
    note: "4.3"},
    
    { nom: "Lenovo IdeaPad 3 17ITL6 Ordinateur Portable", 
    image: "https://m.media-amazon.com/images/I/619BTXubo8L._AC_SL1500_.jpg", 
    lien: "https://amzn.to/3N8oplS", 
    descr: "Marque  Lenovo\n Nom de modèle Notebook\n Taille de l'écran 17.3\n Couleur Gris\n Taille du disque dur  512 Go\n Modèle du CPU Core i5\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  Windows 11\n Caractéristique spéciale  Music player\n Description de la carte graphique Intégré",
    note: "4.3"},
    
    { nom: "HP Chromebook 15a-na0003sf Ordinateur Portable", 
    image: "https://m.media-amazon.com/images/I/61yNpas1gEL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/43AzpOR", 
    descr: " Marque  HP\n Nom de modèle 75M96EA\n Taille de l'écran 15,6 Pouces\n Couleur Gris\n Taille du disque dur  64 Go\n Modèle du CPU Celeron\n Taille de la mémoire RAM installée  4 Go\n Système d'exploitation  Chrome OS\n Caractéristique spéciale  Portable\n Description de la carte graphique Intégré",
    note: "4.3"},
    
    { nom: "Apple 2022 MacBook Air avec Puce M2 : 13,6 Pouces", 
    image: "https://m.media-amazon.com/images/I/71VTsuH2+7L._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3oCyzlr", 
    descr: "Marque  Apple\n Nom de modèle Apple MacBook Air avec puce M2\n Taille de l'écran 13.6\n Couleur Minuit\n Taille du disque dur  256 Go\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  Mac OS\n Caractéristique spéciale  Portable\n Description de la carte graphique Intégré\n Description du disque dur SSD",
    note: "4.3"},
    
    { nom: "Lenovo IdeaPad 1 15IGL7 - Ordinateur Portable", 
    image: "https://m.media-amazon.com/images/I/71QIL9Y4+UL._AC_SL1500_.jpg", 
    lien: "https://amzn.to/42qv1QS", 
    descr: "Marque  Lenovo\n Nom de modèle IdeaPad 1 15IGL7\n Taille de l'écran 15,6 Pouces\n Couleur Gris clair\n Modèle du CPU Pentium\n Taille de la mémoire RAM installée  8 Go\n Système d'exploitation  Windows 11 Home en mode S\n Caractéristique spéciale  Portable\n Description de la carte graphique Intégré Coprocesseur graphique  Intel UHD Graphics 605",
    note: "4.3"},
    
    { nom: "HP Laptop 15s-fq0001sf PC Portable 15.6 FHD", 
    image: "https://m.media-amazon.com/images/I/81yyq1vo5wL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3WNf71H", 
    descr: "Marque  HP\n Nom de modèle 64V08EA\n Taille de l'écran 15,6 Pouces\n Couleur Gris\n Taille du disque dur  128 Go\n Modèle du CPU Celeron\n Taille de la mémoire RAM installée  4 Go\n Système d'exploitation  Windows 11 Home in S mode\n Caractéristique spéciale  Anti Glare Screen\n Description de la carte graphique Intégré",
    note: "4.3"},
    
    { nom: "MSI Crosshair 15 C12VF-434FR", 
    image: "https://m.media-amazon.com/images/I/71FnLh-8SLL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/43GfddP", 
    descr: "Marque  MSI\n Nom de modèle Crosshair 15 C12VF-434FR\n Taille de l'écran 15,6 Pouces\n Couleur Noir\n Taille du disque dur  512 Go\n Modèle du CPU Core i5\n Taille de la mémoire RAM installée  16 Go\n Système d'exploitation  Windows 11 Home\n Caractéristique spéciale  Portable\n Description de la carte graphique RTX4060",
    note: "4.3"},
    
    { nom: "Jumper Ordinateur Portable", 
    image: "https://m.media-amazon.com/images/I/81TdjGd7p0L._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/43A11Tu", 
    descr: "Marque  Jumper\n Nom de modèle S5MAX 4128\n Taille de l'écran 16 Pouces\n Couleur Gris\n Taille du disque dur  128 Go\n Modèle du CPU Celeron\n Taille de la mémoire RAM installée  4 Go\n Système d'exploitation  Windows 11\n Caractéristique spéciale  Portable, Bluetooth\n Description de la carte graphique Intégré",
    note: "4.3"},
    
    { nom: "MSI Crosshair 15 C12VG-432FR", 
    image: "https://m.media-amazon.com/images/I/71FnLh-8SLL._AC_UL600_FMwebp_QL65_.jpg", 
    lien: "https://amzn.to/3qrrULh", 
    descr: "Marque  MSI\n Nom de modèle Crosshair 15 C12VG-432FR\n Taille de l'écran 15,6 Pouces\n Couleur Noir\n Taille du disque dur  512 Go\n Modèle du CPU Core i7\n Taille de la mémoire RAM installée  16 Go\n Système d'exploitation  Windows 11 Home\n Caractéristique spéciale  Portable\n Description de la carte graphique RTX4070",
    note: "4.3"},

  ],
  Mode: [
    { nom: "Produit 3", image: "chemin-de-l-image-3.jpg" },
    { nom: "Produit 4", image: "chemin-de-l-image-4.jpg" },
    // ...
  ],
  // Ajoutez d'autres catégories avec leurs tableaux de produits correspondants
};

// Ajoutez un gestionnaire d'événement de clic à chaque lien de catégorie
categoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    // Masquer la section main
    categoriesSection.style.display = "none";

    // Afficher la nouvelle div
    tab_product.style.display = "block";
    tab_product.classList.add("right-column");
    back_button.style.display = "block";
    document.getElementById("titre_categorie").textContent = event.target.textContent;
    const produits = produitsParCategorie[event.target.textContent];

    produits.forEach((produit, index) => {
      const productContainer = document.querySelector(`#product-${index + 1}`);
      if (productContainer) {
        productContainer.querySelector(".titre").textContent = produit.nom;
        productContainer.style.backgroundImage = `url('${produit.image}')`;
        productContainer.querySelector("p a").setAttribute("href", produit.lien);
        productContainer.querySelector(".description").textContent = produit.descr;
        productContainer.querySelector(".description").style.display="none";
        productContainer.querySelector(".note").textContent = produit.note + "/5";
      }
    });
  });
});
function showCategories() {
  categoriesSection.style.display = "block";
  tab_product.style.display = "none";
  backButton.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
  // Vérifier si l'élément existe sur la page
  var backButton = document.querySelector("#back_button");
  if (backButton) {
    // Appliquer les modifications uniquement si l'élément est trouvé
    backButton.addEventListener("click", showCategories);
  }
});
//backButton.addEventListener("click", showCategories);
