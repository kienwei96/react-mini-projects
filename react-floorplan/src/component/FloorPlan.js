import React from 'react';
import Bedroom1 from './Bedroom1';
import Kitchen from './Kitchen';
import Bathroom from './Bath';
import LivingRoom from './LivingRoom';

const fullbath = 'fullbath'
const halfbath = 'halfbath'

function FloorPlan() {
    return (
        <div className='floorplan'>
        <div className='division1'>
            <Bedroom1 bednum={1}/><Bathroom size={fullbath}/><Bedroom1 bednum={2}/></div>
        <div className='division2'>
        <LivingRoom/>
        <Kitchen/>
        <Bathroom size={halfbath}/>
        <Bedroom1 bednum={3}/>
        </div>
        </div>
    );
}

export default FloorPlan;