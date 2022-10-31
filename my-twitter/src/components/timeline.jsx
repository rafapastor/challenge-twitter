// receive data and render in box
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ConvertTime } from './convertTime';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(1),
}));

export const Timeline = ({ tweets, users }) => {

    // filter users with field selected
    const usersSelected = users.filter(user => user.selected === true);

    const usersToHandle = (usersSelected.length > 0) ? usersSelected : users;

    // tweets filter by user following true
    const tweetsFiltered = usersToHandle.filter(user => user.following === true)
        .map((user) => {
            return tweets.filter(tweet => tweet.userId === user.id);
        }).flat();

    // sort tweets by timestamp
    const sortedTweets = tweetsFiltered.sort((a, b) => {
        return b.timestamp - a.timestamp;
    });

    const tweetsFormatted = sortedTweets.map((tweet) => {
        const time = ConvertTime(tweet.timestamp);
        return {
            time,
            ...tweet
        }
    });

    return (
        <>
            <Typography variant="h6" component="div" gutterBottom align='left' color={'white'}>
                Timeline
            </Typography>
            <Box sx={{ p: 1, m: 1, mb: 8 }} data-testid="box-timeline">
                {tweetsFormatted.map((tweet) => (
                    <Item key={tweet.id}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                                {tweet.userId == 0 ? 'Me' : users[tweet.userId].name}
                            </Typography>
                            <Box sx={{ flexGrow: 1 }}
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="flex-end"
                            >
                                <Typography>
                                    {tweet.time}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                                {tweet.text}
                            </Typography>
                        </Box>
                    </Item>
                )
                )}
            </Box>
        </>
    );
}