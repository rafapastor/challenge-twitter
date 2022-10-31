import React from 'react';
import { render } from '@testing-library/react';
import { ContentComponent } from './content';
import data from '../data.json';

describe('ContentComponent', () => {

    const tweets = data.tweets;
    const setTweets = jest.fn();

    test('snapshot', () => {
        const { getByTestId } = render(<ContentComponent tweets={tweets} setTweets={setTweets} users={data.users} />);
        const linkElement = getByTestId('content');
        expect(linkElement).toBeInTheDocument();
    });

});
