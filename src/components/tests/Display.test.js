import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';
import { waitFor } from '@testing-library/react';

const exampleShow = {
    name: 'Sam Show',
    summary: 'THIS IS A SUMMARY OF SAMS SHOW',
    seasons: [
        {id: 1,
        name: 'SEASON 1',
        episodes: []
        },
        {id: 2,
            name: 'SEASON 2',
            episodes: []
            }
    ]
}



test('renders without errors with no props', async () => {
    render(<Display />)
});

test('renders Show component when the button is clicked ', async () => {
    render(<Display />)
    const button = screen.getByRole('button')
    await fireEvent.click(button)
    const show = await screen.findByTestId('show-container')
    expect(show).toBeInTheDocument()
});

test('renders show season options matching your data when the button is clicked', async () => {
    render(<Display/>)
    const button = screen.getByRole('button')
    await fireEvent.click(button)
    await waitFor(() => {
        const seasonOptions = screen.queryAllByTestId('season-option')
        expect(seasonOptions).toHaveLength(5)
    })
});
