import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react'
import TeamsList from '../components/teamsList/teamsList';
import { Provider } from "react-redux"
import store from "../store/store"

describe('Check if teams list rendred', ()=> {
    it('checkTenantRow',()=> {
        const { queryByTitle } = render(
        <Provider store={store}>
            <TeamsList />
        </Provider>
        );
        const row = queryByTitle('teamsList');
        expect(row).toBeTruthy();
    });
})
