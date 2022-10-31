import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BoxUsers } from './box-users';

const Column = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgb(43 86 133)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    minHeight: '100vh'
}));



export const LeftbarComponent = ({
    users,
    setUsers
}) => {

    return (
        <Grid item xs={4} data-testid="leftbar">
            <Column>
                <BoxUsers users={users} type='following' setUsers={setUsers} />
                <BoxUsers users={users} type='follow' setUsers={setUsers} />
            </Column>
        </Grid>
    )
}

