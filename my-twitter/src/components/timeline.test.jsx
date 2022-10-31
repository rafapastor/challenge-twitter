// test timeline component
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Timeline } from './timeline';
import data from '../data.json';

describe('Timeline component', () => {

    test('renders timeline component', () => {
        render(<Timeline tweets={data.tweets} users={data.users} />);
        const timelineElement = screen.getByTestId('box-timeline');
        expect(timelineElement).toBeInTheDocument();
    });

    test('renders timeline component with tweets', () => {
        render(<Timeline tweets={data.tweets} users={data.users} />);
        const timelineElement = screen.getByTestId('box-timeline');
        expect(timelineElement.children.length).toBe(2);
    });

    test('renders timeline component with selected users', () => {
        const users = data.users.map((user) => {
            if (user.id === 2) {
                return { ...user, selected: true };
            }
            return user;
        });
        render(<Timeline tweets={data.tweets} users={users} />);
        const timelineElement = screen.getByTestId('box-timeline');
        expect(timelineElement.children.length).toBe(1);
    });

    test('renders timeline with a tweet mine', () => {
        const tweetMine = [{
            id: 1,
            userId: 0,
            username: 'Me',
            timestamp: 1610000000000,
            text: 'Tweet mine',
        }];
        render(<Timeline tweets={tweetMine} users={data.users} />);
        const timelineElement = screen.getByTestId('box-timeline');
        expect(timelineElement.children.length).toBe(1);
    });

});
