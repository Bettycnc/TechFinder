<script setup>

</script>

<template>
  <nav class="navbar"> 
    <a href="#accueil">Accueil</a> 
    <a href="#Estimation">Estimation de salaire</a>
  </nav>
  <header>
    <title> Emplois les plus rechercher</title>
  </header>

  <main>
    <div class="banner">
    <h1> <br>Découvrez les offres d’emplois les plus rechercher dans votre région.</h1>
      <div class="recherche">
        <label for="Poste">Poste:</label>
        <input type="text", Placeholder="Job Title"></input>
      </div>
    </div>
  </main>
</template>

<style scoped>
.banner {
  background-color: rgba(45, 45, 190, 0.752);
  width: 100%;
  height: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
}
h1 {
  font-size: 1.8cap;
  font-style: normal;
  font-weight: normal;
  ;
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
.recherche {
  width: 40%;
  background-color: white;
  position: absolute;
  left: 30%;
  border: 2px solid;
  border-color: black;
}

</style>
