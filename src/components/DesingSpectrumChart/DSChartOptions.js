const DSChartOptions = {
    chart: {
        renderTo: 'container2',
        type: 'line',
    },
    title: {
        text: null,
        x: -20 //center
    },
    xAxis: {
        title: {
            text: 'Periodo estructural (s)'
        },
        gridLineWidth: 1,
        gridZIndex: 4,
        labels: {
            formatter: function() {
                return this.value.toFixed(2);
            }
        }
    },
    yAxis: {
        title: {
            text: 'Aceleración espectral (g)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }],
        labels: {
            formatter: function() {
                return this.value.toFixed(2);
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: '',
        data: []
    }],
    tooltip: {
        formatter: function() {
            return '(' + this.x.toFixed(3) + ', ' + this.y.toFixed(4) + ')';
        }
    }
};

export default DSChartOptions; 