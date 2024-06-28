import { describe, it, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('demo', () => {
    expect(true).toBe(true);
});

describe('render', () => {
    it('render the app and find the title', () => {
        render(<App />);

        const title = screen.getByRole('heading', { name: 'Vite + React' });
        expect(title).toBeTruthy();
    });

    it('render the app and find counter-button', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /count is 0/i });
        expect(button).toBeTruthy();

        // Click the button to increment count
        fireEvent.click(button);

        // Verify if count increments
        expect(screen.getByText(/count is 1/i)).toBeTruthy();
    });

    it('render App, find App logos', () => {
        render(<App />);
        const viteLogo = screen.getByAltText('Vite logo');
        const reactLogo = screen.getByAltText('React logo');

        expect(viteLogo).toBeTruthy();
        expect(reactLogo).toBeTruthy();
    });
});
