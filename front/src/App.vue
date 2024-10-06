
<template>
  <!-- search-->
  <div class="banner"> <br>Découvrez les offres d’emplois les plus rechercher dans votre région.
    <div class="flex items-center justify-center  mt-10" >
    
      <div class="mr-4">
        <label class="block text-black text-base font-bold" for="Poste">Poste</label>
        <input class="shadow appearance-none border rounded py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Poste" type="text" placeholder="Job title">
      </div>

      <div class="mr-4">
        <label class="block text-balck text-base font-bold" for="Lieu">Lieu</label>
        <input class="shadow appearance-none border rounded py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Lieu" type="text" placeholder="Où ?">
      </div>

      <button @click="handleSearch"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full mt-5">Recherche</button>
    </div>
  </div>
   <!-- Résultats de recherche -->
    <!-- <ul id="job-list">
      <li v-for="(job, index) in jobList" :key="index">{{ job.lieu }} - {{ job.post }}</li>
      <li v-if="jobList.length === 0">Aucun résultat trouvé.</li>
    </ul> -->

</template>
<script setup>
import ChartCompoment from './ChartCompoment.vue'
// function fetchData(searchQuery = '') {
//   const url = `http://localhost:3000/api/search?query=${searchQuery}`; 
//     fetch(url)
//     .then(response => response.json()) 
//     .then(data => {
//       displayData(data);  
//       })
//     .catch(error => {
//       console.error('Erreur de récupération des données :', error);
//     });
// }

// function displayData(data) {
//   const jobList = document.getElementById('job-list');
//   jobList.innerHTML = ''; 
//     if (data.length === 0) {
//       jobList.innerHTML = '<li>Aucun résultat trouvé.</li>';
//     } else {
//       data.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = `${item.lieu} - ${item.post}`; 
//         jobList.appendChild(li); 
//       });
//     }
// }


// window.onload = function() {
//   fetchData(); 
// };

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

.myChartcontents{
  width: 500px;
  height: 150px;
}
</style>
