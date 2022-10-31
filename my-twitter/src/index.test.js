// test index.js
import './index.css';

jest.mock('react-dom/client', () => {
    const original = jest.requireActual('react-dom/client');
    const root = {
        render: jest.fn(),
    };
    return {
        ...original,
        createRoot: () => root,
    };
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('./index');
});

