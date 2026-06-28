import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => {
    window.history.pushState({}, '', '/');
});

test('Renders the Header and navigates to Booking page', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    
    // Target the specific Reserve Table button using its text
    const reserveButton = screen.getByRole("button", { name: /Reserve Table/i });
    expect(reserveButton).toBeInTheDocument();

    // Click the button to navigate to `/booking`
    fireEvent.click(reserveButton);

    // Verify booking form elements are rendered
    const headingElementNew = screen.getByText("Choose Date:");
    expect(headingElementNew).toBeInTheDocument();
});

test('Initialize Times dropdown has options', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    
    // Navigate to booking page
    const reserveButton = screen.getByRole("button", { name: /Reserve Table/i });
    fireEvent.click(reserveButton);

    // Verify times select element exists
    const timeSelect = screen.getByLabelText(/Choose time:/i);
    expect(timeSelect).toBeInTheDocument();

    // Verify there are options loaded in the select
    const options = screen.getAllByRole('option');
    expect(options.length).toBeGreaterThan(1); // Select a Time + dynamic times
});

test('Update Times dispatches and updates on date change', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    
    // Navigate to booking page
    const reserveButton = screen.getByRole("button", { name: /Reserve Table/i });
    fireEvent.click(reserveButton);

    const dateInput = screen.getByLabelText(/Choose Date:/i);
    expect(dateInput).toBeInTheDocument();

    // Update the date input to trigger dispatch
    fireEvent.change(dateInput, { target: { value: '2026-07-01' } });
    expect(dateInput.value).toBe('2026-07-01');

    // Verify times options are still present and updated dynamically
    const options = screen.getAllByRole('option');
    expect(options.length).toBeGreaterThan(1);
});