<script>
  //Importing Line class from the vue-chartjs wrapper
  import {Doughnut} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default { 
    extends: Doughnut,
    computed: {
        datacollection: function() {
			return {
				//Data to be represented on x-axis
				labels: ['Red', 'Blue', 'Yellow'], 
				datasets: [
					{
						label: 'Data One',
						backgroundColor: ['red','blue','yellow'],
						pointBackgroundColor: 'white',
						borderWidth: 1,
						pointBorderColor: '#249EBF',
						//Data to be represented on y-axis
						data: [10, 20, 30]
					}
				],
				options: {
					maintainAspectRatio: false
				}
			};
		}
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>
