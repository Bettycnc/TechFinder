<template>
   <Doughnut :data="data" :options="options" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as Chartcontents from './Chartcontents.ts'

ChartJS.register(ArcElement, Tooltip, Legend) 

export default {
  name: 'App',
  components: {
    Doughnut
  },
  data() {
    return Chartcontents
  }
}

</script>