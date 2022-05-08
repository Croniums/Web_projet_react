import * as React from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  //const [visites, setVisites] = useState(0);

  return (
    <div>
        <link href="/dist/output.css" rel="stylesheet"></link>
      <body class="bg-zinc-50 h-screen">
      <ToastContainer />
        
        <header class="h-24 bg-gradient-to-b from-black to-zinc-800 pt-5 pl-5 flex sticky top-0 z-30">
          <h1 class="text-5xl font-bold text-white">
            Application Annuaire
          </h1>
          <div class="right-0">
            <a class="text-white hover:underline ml-8" href="#qst1" onClick={() => toast.info("En quoi consiste cette application ?")}>En quoi consiste cette application ?</a>
            <a class="text-white hover:underline ml-8" href="#qst2" onClick={() => toast.info("Comment gérer ces données ?")}>Comment gérer ces données ?</a>
          </div>
        </header>


        <main class="h-fit">
          <div class="h-12 w-6/6 bg-gradient-to-b from-zinc-800"></div>
          <div class="flex" id="qst1">
            <div class="border-2 border-gray-600 rounded w-5/12 hover:scale-110 ease-linear duration-300 ml-52 mt-24">
              <h1 class="font-bold text-3xl underline mb-5">En quoi consiste cette application ?</h1>
              <p class="ml-5">Cette application a pour but de recueillir des informations sur une liste de Contact et de les enregistrer dedans un bloc note à information utile sur vos connaissances.</p>
              <h1 class="font-bold text-2xl mb-5 ml-3">Pourquoi cette application ?</h1>
              <p class="ml-5">N’avez-vous jamais oublié de vous souvenir d’une date d’anniversaire, un numéro de téléphone ou bien des informations importantes sur quelqu’un ? Et bien cette application regroupe toutes les informations d’on vous aviez besoin.</p>
            </div>
            <img src="https://zupimages.net/up/22/18/2ba5.png" alt="image1" class="w-52 h-75 ml-24 mt-12 rounded-lg object-cover" id="box"/>
            <div class="w-1/6">
              <h1 class="font-bold text-2xl mb-5 ml-3 mt-12">Vue de l'app</h1>
              <p class="ml-3">Voici un visuel de l'application sur la page principale ou l'on peut observer les profils ainsi que multiples option d'ajout et de suppresion avec un système de filtre.</p>
            </div>
          </div>

            <div class="w-6/6 bg-gradient-to-t from-zinc-300 h-8 mt-24"></div>
            <div class="w-6/6 bg-zinc-300 h-8"></div>
            <div class="w-6/6 bg-gradient-to-b from-zinc-300 h-8 mb-24"></div>

          <div class="flex mb-24">
            <div class="border-2 border-gray-600 rounded w-5/12 hover:scale-110 ease-linear duration-300 ml-52 mt-24">
              <h1 class="font-bold text-3xl underline mb-5" id="qst2">Comment gérer ces données ?</h1>
              <p class="ml-5 w-5/6">Vous allez surement vous posez la question, comment marche cette application ? Et Bien rien de plus simple ! pour cela il vous suffit juste de renseigner dans les champ prévus a cet effet les informations d'un profil et hop ! Le tour est joué !</p>
              <h1 class="font-bold text-2xl mb-5 ml-3 text-red-800 animate-pulse">/!\ Attention l'application n'est pas fonctionnelle entièrement /!\</h1>
              <p class="ml-5 text-red-400 w-5/6">Le projet que vous pourrez observer sur l'application est incomplet ! Multiples fonctionnalités tel que la sauvegarde dans le localstorage, l'attribution de filtre et l'option d'ajout et de suppresion d'éléments sur l'application non pas pus être fait dans les temps malheuresement</p>
            </div>
            <img src="https://zupimages.net/up/22/18/mqpa.png" alt="image2" class="w-52 h-75 ml-24 mt-12 rounded-lg object-cover"/>
            <div class="w-1/6">
              <h1 class="font-bold text-2xl mb-5 ml-3 mt-12">Vue de l'app</h1>
              <p class="ml-3">Voici un visuel de l'application sur la page de Profil. Sur cette dernière nous pouvons éditer les champs afin de rentrer nos informations dans l'application ainsi que les modifier</p>
            </div>
          </div>

          <div class="w-6/6 bg-gradient-to-t from-stone-300 h-8 mt-24"></div>

        </main>
        

        <footer class="bg-stone-300 w-6/6 h-52">
            <p class="text-black text-xl w-3/6 ml-24">Cette application à été réalisé dans le but d'un projet de cours afin de tester nos capacités ce site n'est donc pas professionnel et reste purement éxperimental.</p>
            <div class="ml-24 mt-8"><a href="https://github.com/Croniums/Web_projet_react" class="underline text-stone-500">Github Site Web</a></div>
            <div class="ml-24"><a href="https://github.com/Croniums/Mobile_projet_react" class="underline text-stone-500">Github Application</a></div>
        </footer>

      </body>
      
    </div>
  );
}


export default App;