import { load } from './assets';
import World from './world';
import renderInterface from './interface/app';

import { store } from './interface/store';

import './app.css?inline';

load()
  .then(() => {
    document.getElementById('center')!.innerHTML = `
      <canvas id="camera" width="1280" height="800"></canvas>
      <div id="interface"></div>
    `;

    renderInterface();

    const world = World();

    const loop = () => {
      const state = store.getState();

      if (!state.building.id) {
        world.update();
        world.draw(state.building.time);
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  });
