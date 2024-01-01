// Frame8.js
import Chart from 'react-apexcharts';
import "../Styles/Frame8.css";

const Frame8 = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '25%', // Ajustez la valeur pour définir l'espacement entre les barres
        borderRadius: 4,
        distributed: true,
        dataLabels: {
          position: 'bottom',
        },
      },
    },
    xaxis: {
      categories: ['Sep 10', 'Sep 11', 'Sep 12', 'Sep 13', 'Sep 14', 'Sep 15', 'Sep 16'],
    },
    yaxis: {
      title: {},
      labels: {
        formatter: function (value) {
          const customLabels = ['20k', '40k', '80k', '100k'];
          return customLabels[value];
        },
      },
    },
    colors: ['#edf3f9'],
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
  };

  const series = [
    {
      data: [100000, 100000, 100000, 100000, 100000, 100000, 100000],
    },
  ];

  return (
    <div className="frame8">
      
        <div className='Summary'>
          Summary
          
        </div>
        <div className='small-frame8'>
          <div className='Sales'>
            Sales <span className="chevron8">&#9660;</span>
          </div>
        </div>
        <div className='L7D'>
          Last 7 Days  <span className="chevron88">&#9660;</span>
        </div>
        <Chart options={options} series={series} type="bar" height={350} />
      
    </div>
  );
};

export default Frame8;
