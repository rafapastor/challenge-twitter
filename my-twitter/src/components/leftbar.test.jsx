import React from 'react';
import { render } from '@testing-library/react';
import { LeftbarComponent } from './leftbar';
import data from '../data.json';

describe('LeftbarComponent', () => {

    const users = data.users;

    test('snapshot', () => {
        const { getByTestId } = render(<LeftbarComponent users={users} />);
        const linkElement = getByTestId('leftbar');
        expect(linkElement).toBeInTheDocument();
    });

});
