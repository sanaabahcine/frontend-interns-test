// Importez PropTypes depuis la bibliothèque prop-types
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, Legend, Label } from 'recharts';
import "../Styles/Frame4.css";

// Définissez la fonction de rendu de la légende en dehors du composant principal
const CustomLegend = (props) => {
  const { payload } = props;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {payload.map((entry, index) => (
        <div key={`item-${index}`} style={{ marginRight: '15px' }}>
          <svg width="10" height="10">
            <circle cx="5" cy="5" r="5" fill={entry.color} />
          </svg>
          <span style={{ marginLeft: '5px' }}>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

// Définissez les types des propriétés de la légende en dehors de la fonction de rendu
CustomLegend.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      value: PropTypes.any,
    })
  ),
};

const Frame4 = () => {
  const data = [{ value: 40, name: 'Acquisition' }, { value: 30, name: 'Purchase' }, { value: 30, name: 'Retention' }];

  return (
    <div className="frame4">
      <div>
        <div className="frame4-header">
          This Week <span className="chevron">&#9660;</span>
        </div>
        <div className='Marketing'>
          Marketing
        </div>
      </div>

      <div className="frame4-body">
        {/* Insérez le composant de diagramme circulaire ici */}
        <PieChart width={400} height={400}>
          {/* Ajoutez les labels au-dessus du cercle */}
          <Label value="Acquisition" position={{ x: -20, y: -20 }} />
          <Label value="Purchase" position={{ x: 0, y: -20 }} />
          <Label value="Retention" position={{ x: 20, y: -20 }} />

          <Pie
            data={data}
            cx={150} // Ajustez la valeur selon vos besoins pour déplacer vers la gauche
            cy={110} // Ajustez la valeur selon vos besoins pour déplacer vers le haut
            labelLine={false}
            label={false}
            outerRadius={80}
            innerRadius={60}
            fill="#edf3f9"
            stroke="#edf3f9"
            strokeWidth={45}
            dataKey="value"
          >
            <Cell fill="#c43e6d" />
            <Cell fill="#8057db" />
            <Cell fill="#efb057" />
          </Pie>

          {/* Utilisez votre composant de légende personnalisé */}
          <Legend
            verticalAlign="top"
            align="center"
            height={36}
            content={CustomLegend}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Frame4;
