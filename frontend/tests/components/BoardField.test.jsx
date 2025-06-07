import { render } from '@testing-library/react';
import BoardField from '../../src/components/BoardField';

describe('Tests on BoardField', () => {
    const className = 'className';

    test('Should match snapshot', () => {
        const { container } = render( <BoardField className={className} /> );
        expect( container ).toMatchSnapshot();
    })
    
})