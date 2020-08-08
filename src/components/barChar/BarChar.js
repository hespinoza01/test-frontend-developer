import React, {useContext} from 'react';
import {Bar} from "react-chartjs-2";
import './BarChar.scss';

// Import GlobalContext and action to get Char config data
import {GlobalStore} from "../../App";
import {getBarcharDataset} from "../../store/actions";


// Show follower user chart
function BarChar() {
    const {state} = useContext(GlobalStore);

    // Visual settings for the chart
    const barcharOptions = {
        title:{
            display:true,
            text:'Número de seguidores por usuario',
            fontSize:20
        },
        legend:{
            display:true,
            position:'top'
        }
    };

    return (
        <div className='BarChar'>
            <Bar
                data={getBarcharDataset(state.barcharData)}
                options={barcharOptions}
            />
        </div>
    );
}

export default BarChar;
