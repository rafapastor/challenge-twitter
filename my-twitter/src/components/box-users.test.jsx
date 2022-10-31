// test box-users component
import { render, screen, fireEvent } from '@testing-library/react';
import { BoxUsers } from './box-users';
import data from '../data.json';

describe('Box user Component tests', () => {

    const users = data.users;
    const setUsers = jest.fn();

    test('snapshot', () => {
        const { getByTestId } = render(<BoxUsers users={users} type='following' setUsers={setUsers} />);
        const linkElement = getByTestId('box-users');
        expect(linkElement).toBeInTheDocument();
    }
    );

    test('render users', () => {
        render(<BoxUsers users={users} type='following' setUsers={setUsers} />);
        const linkElement = screen.getByText('Following');
        expect(linkElement).toBeInTheDocument();
    });

    test('render specific user that Follwing', () => {
        render(<BoxUsers users={users} type='following' setUsers={setUsers} />);
        const linkElement = screen.getByText('Alice');
        expect(linkElement).toBeInTheDocument();
    });

    test('render specific user that Not Follwing', () => {
        render(<BoxUsers users={users} type='follow' setUsers={setUsers} />);
        const linkElement = screen.getByText('Bob');
        expect(linkElement).toBeInTheDocument();
    });

    test('click button Follow', () => {
        render(<BoxUsers users={users} type='follow' setUsers={setUsers} />);
        fireEvent.click(screen.getByTestId('@john-button'));
        expect(screen.getByTestId('@john-button')).toBeInTheDocument();
    });

    test('select user Following', () => {
        render(<BoxUsers users={users} type='following' setUsers={setUsers} />);
        fireEvent.click(screen.getByTestId('@jane-row'));
        expect(screen.getByTestId('@jane-row')).toBeInTheDocument();
    });

    test('user selected', () => {
        const users_example = [
            {
                "id": 0,
                "name": "Rafael Pastor",
                "username": "@rafa",
                "following": true
            },
            {
                "id": 1,
                "name": "John",
                "username": "@john",
                "following": false
            },
            {
                "id": 2,
                "name": "Jane",
                "username": "@jane",
                "following": true,
                "selected": true
            },
            {
                "id": 3,
                "name": "Bob",
                "username": "@bob",
                "following": false
            },
            {
                "id": 4,
                "name": "Alice",
                "username": "@alice",
                "following": true
            },
            {
                "id": 5,
                "name": "Tom",
                "username": "@tom",
                "following": false
            }
        ]
        render(<BoxUsers users={users_example} type='following' setUsers={setUsers} />);
        fireEvent.click(screen.getByTestId('@jane-row'));
        expect(screen.getByTestId('@jane-row')).toBeInTheDocument();
    });

});
