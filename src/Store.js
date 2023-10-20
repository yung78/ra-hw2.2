import { useState } from 'react';
import dataProducts from './data';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

export default function Store() {
  const products = dataProducts;
  const [state, setState] = useState(true)
  var CorrectView = state ? ListView : CardsView;

  return (
    <div className='store'>
      <div className='icon_switch'>
        <IconSwitch
          icon = { state ? 'view_module' : 'view_list' }
          onSwitch = {() => {
            setState(current => !current)
            }}/>
      </div>
      <div className='view'>
        <CorrectView 
          cards = { products }
          items = { products }
        />
      </div>
    </div>
  );
};
