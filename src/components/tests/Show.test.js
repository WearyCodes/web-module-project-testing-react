import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';
import Episode from '../Episode';

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

test('renders without errors', () => {
    render(<Show selectedSeason = {'none'} show = {exampleShow}/>)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show = {null}/>)
    const value = screen.getByText('Fetching data...')
    expect(value).toBeVisible()
});

test('renders same number of options seasons are passed in', () => {
    render(<Show show = {exampleShow} selectedSeason={'none'} />)
    const seasonOptions = screen.queryAllByTestId('season-option')
    expect(seasonOptions.length).toEqual(2)
});

test('handleSelect is called when an season is selected', async () => {
    const handleSelect = jest.fn()
    render(<Show show = {exampleShow} selectedSeason={'none'} handleSelect = {handleSelect}/>)
    const select = screen.getByLabelText(/Select A Season/i)
    await userEvent.selectOptions(select, ['1'])
    expect(handleSelect).toBeCalled()
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const {rerender} = render(<Show show={exampleShow} selectedSeason={'none'}/>)
    const episodes = screen.queryByTestId('episodes-container')
    expect(episodes).not.toBeInTheDocument()

        rerender(<Show show={exampleShow} selectedSeason = {1}/>)
});

// Build an example data structure that contains the show data in the correct format. 
// A show should contain a name, a summary and an array of seasons, each with a id, name and an (empty) list of episodes 
// within them. Use console.logs within the client code if you need to to verify the structure of show data.

