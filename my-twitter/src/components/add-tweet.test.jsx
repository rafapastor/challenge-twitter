import { render, screen, fireEvent } from '@testing-library/react';
import { AddTweet } from './add-tweet';
import data from '../data.json';

describe('AddTweet', () => {

    test('should render AddTweet', () => {
        render(<AddTweet />);
        expect(screen.getByText('Post a new message')).toBeInTheDocument();
    });

    test('should render AddTweet with props', () => {
        render(<AddTweet tweets={data.tweets} setTweets={() => { }} />);
        expect(screen.getByText('Post a new message')).toBeInTheDocument();
    });

    test('should render AddTweet with props and click button', () => {
        const setTweets = jest.fn();
        render(<AddTweet tweets={data.tweets} setTweets={setTweets} />);
        fireEvent.click(screen.getByText('Post'));
        expect(setTweets).toHaveBeenCalled();
    });

    test('should render AddTweet with props and click button and input', () => {
        const setTweets = jest.fn();
        render(<AddTweet tweets={data.tweets} setTweets={setTweets} />);
        fireEvent.change(screen.getByLabelText('Multiline'), { target: { value: 'test' } });
        fireEvent.click(screen.getByText('Post'));
        expect(setTweets).toHaveBeenCalled();
    });
});