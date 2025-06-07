import { render } from "@testing-library/react";
import Board from '../../src/components/Board'

describe( 'Tests on Board', () => {
    const className = 'className';

    test('should render Board', () => {
        const { container } = render( <Board className={ className } /> );
        expect( container ).toMatchSnapshot();
    })
    
})