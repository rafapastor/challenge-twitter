import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Timeline } from './timeline';
import { AddTweet } from './add-tweet';

const Column = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1B2836',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    minHeight: '100vh',
    color: theme.palette.text.secondary,
}));

export const ContentComponent = (
    {
        tweets,
        setTweets,
        users
    }
) => {
    return (
        <>
            <Grid item xs={8} data-testid="content">
                <Column>
                    <Timeline tweets={tweets} users={users} />
                    <AddTweet tweets={tweets} setTweets={setTweets} />
                </Column>
            </Grid>
        </>
    )
}

