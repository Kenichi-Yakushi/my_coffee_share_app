import React from 'react';
import { hydrate } from 'react-dom';
// import { hydrateRoot } from 'react-dom/cjs/react-dom.production.min';
import CountUp from './CountUp';

// idがappの部分をhydrateで描画する
hydrate(<CountUp />, document.querySelector('#app'));
