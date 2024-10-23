
<template>

  <div class="banner"> <!--  C'est ma section de pour ma recherche-->
    <br>Découvrez les offres d’emplois les plus recherchées dans votre région.
    <div class="flex items-center justify-center mt-10">
    
      <div class="mr-4"> <!-- mon espace recherche pour le job-->
        <label class="block text-black text-base font-bold" for="Poste">Poste</label>
        <input 
          class="shadow appearance-none border rounded py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-1 border-black" 
          id="Poste" 
          type="text" 
          placeholder="Job title" 
          v-model="searchPoste" />
      </div>

      <div class="mr-4"> <!-- mon espace recherche pour le lieu-->
        <label class="block text-black text-base font-bold" for="Lieu">Lieu</label>
        <input 
          class="shadow appearance-none border rounded py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-1 border-black" 
          id="Lieu" 
          type="text" 
          placeholder="Où ?" 
          v-model="searchLieu" />
      </div>

      <button @click="handleSearch" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full mt-5">
        Recherche
      </button> <!-- ca c'est mon bouton recherche-->
    </div>
  </div>

<div v-if="loading">Chargement des résultats...</div>   <!-- ca m'affiche un message de chargement pendant la récupération de mes données -->
  <div v-else>
    <h2 v-if="jobs.length === 0" class="flex items-center justify-center mt-8">Aucun emploi trouvé.</h2>
    <div v-else >
      <ul> <!-- ma liste ds emplois recupérer dans ma recherche -->
          <li v-for="job in jobs" :key="job._id" class="border-b py-4">
            <div class="flex items-center justify-center ">
              <img :src="job.company_logo" alt="Logo de l'entreprise" style="width: 80px; height: auto; margin-right: 10px;"> 
              <h3 class="font-semibold">{{ job.job_title }}</h3>
            </div>
            <div class="flex items-center justify-center ">
              <p>{{ job.company_name }} - {{ job.location }} </p>
            </div>
            <div class="flex items-center justify-center ">
             <a :href="job.job_url" target="_blank" class="text-blue-500">Postuler</a> 
            </div>
            
          </li>
        </ul>
    </div> 
  </div> 

</template>

<script>
import axios from 'axios';
// ma fonction recherche connecté a ma base de données :
export default {
  data() {
    return {
      searchPoste: '',
      searchLieu: '',
      jobs: [],
      loading: false,
    };
  },
  methods: {
    async handleSearch() {
      this.loading = true;
      this.jobs = [];
      try {
        const response = await axios.get('http://localhost:3000/api/jobs', {
          params: {
            poste: this.searchPoste,
            lieu: this.searchLieu,
          },
        });
        this.jobs = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des emplois:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};

</script>


<style scoped>
.banner {
  background-color: rgb(130, 170, 161);
  width: 100%;
  height: 220px;
  text-align: center;
  font-size: 2cap;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: none
}
.navbar a {
  margin-left: 10px;
  text-decoration: none;
  color: #000000;
}

</style>
