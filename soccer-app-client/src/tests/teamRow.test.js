import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
import TeamRow from '../components/teamRow/teamRow';
import { Provider } from "react-redux";
import store from "../store/store";

describe('Check if team row rendred', ()=> {
    it('checkTeamRow',()=> {
        const { queryByTitle } = render(
        <Provider store={store}>
            <TeamRow row={{Name:'ARSENAL',YearFounded:1932, Crest:'https://a.espncdn.com/i/teamlogos/soccer/500/359.png',IsFavorite:false }} />
        </Provider>
        );
        const row = queryByTitle('teamRow');
        expect(row).toBeTruthy();
    });
})

describe('Check if click on the check team row changes the favorite', ()=> {
    it('onclick', async () =>{
        const { queryByTitle } = render(
            <Provider store={store}>
                <TeamRow row={{Name:'ARSENAL',YearFounded:1932, Crest:'https://a.espncdn.com/i/teamlogos/soccer/500/359.png',IsFavorite:false }} />
            </Provider>
            );
        const row = queryByTitle('teamRow');

        expect(row).toHaveClass('isNotFavorite')
        fireEvent.click(row);
        await waitFor(() => {
            expect(row).toHaveClass('isFavorite')
        });
    })
})
