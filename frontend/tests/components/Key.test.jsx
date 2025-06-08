import { render, screen } from "@testing-library/react";
import Key from '../../src/components/Key';

describe('Tests on Key component', () =>  {
    const className = 'className';

    test('should render Key', () => {
        const { container } = render( <Key className={ className } /> );
        expect( container ).toMatchSnapshot();
    })
})