import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './counterReducer';

import Counter from './counter';

const render = () => {
    ReactDOM.render(
        <Counter 
            value={store.getState()}
            onIncrement={() => 
                store.dispatch({
                    type: 'INCREMENT'
                })
            }
            onDecrement={() =>
                store.dispatch({
                    type: 'DECREMENT'
                })
            }
        />,
        document.getElementById('root')
    );
}

store.subscribe(() => render());
render();