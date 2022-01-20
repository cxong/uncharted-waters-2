import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Right from './Right';
import Left from './Left';
import PortInfo from './port/PortInfo';
import Building from './port/Building';
import Provisions from './world/Provisions';
import Indicators from './world/Indicators';
import Camera from './Camera';
import Tabs, { Tab } from './Tabs';
import Fleet from './Fleet';
import updateInterface from '../state/updateInterface';

import './global.css';

function Interface() {
  const [portId, setPortId] = useState(0);
  const [buildingId, setBuildingId] = useState(0);
  const [timePassed, setTimePassed] = useState(0);
  const [gold, setGold] = useState(0);

  updateInterface.general = (general) => {
    setPortId(general.portId);
    setBuildingId(general.buildingId);
    setTimePassed(general.timePassed);
    setGold(general.gold);
  };

  const inPort = Boolean(portId);

  const [currentTab, setCurrentTab] = useState<Tab>('Home');

  return (
    <div className="[image-rendering:pixelated]">
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="flex items-stretch">
        <Left inPort={inPort} timePassed={timePassed} gold={gold}>
          <Provisions hidden={inPort} />
        </Left>
        <div className="w-[1280px] h-[800px] relative">
          {currentTab === 'Home' && Boolean(buildingId) && (
            <Building buildingId={buildingId} />
          )}
          {currentTab === 'Fleet' && <Fleet />}
          <div className={currentTab !== 'Home' || buildingId ? 'hidden' : ''}>
            <Camera />
          </div>
        </div>
        <Right>
          {inPort && <PortInfo portId={portId} />}
          <Indicators hidden={inPort} />
        </Right>
      </div>
    </div>
  );
}

const renderInterface = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Interface />
    </React.StrictMode>,
    document.getElementById('game'),
  );
};

export default renderInterface;
