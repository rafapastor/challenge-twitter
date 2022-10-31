import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Avatar, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
//
const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(1),
}));
//
export const AddTweet = ({ tweets, setTweets }) => {

    const [currentTweet, setCurrentTweet] = React.useState('');

    const submitTweet = () => {
        setTweets([...tweets,
        {
            id: tweets.length + 1,
            userId: 0,
            username: '@rafa',
            // value from input
            text: currentTweet,
            timestamp: new Date().getTime()
        }
        ]);
        setCurrentTweet('');
    };

    return (
        <>
            <Typography variant="h6" component="div" gutterBottom align='left' color={'white'}>
                Post a new message
            </Typography>
            <Box sx={{ p: 1, m: 1, mb: 8 }} data-testid="box-add-tweet">
                <Item>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <TextField
                            id="new-tweet"
                            data-testid="test-new-tweet"
                            label="Multiline"
                            multiline
                            rows={3}
                            inputProps={{ maxLength: 280 }}
                            // 280 characters is the maximum length of a tweet
                            fullWidth
                            value={currentTweet}
                            onChange={(e) => setCurrentTweet(e.target.value)}
                            variant="outlined"
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                    >
                        <Button variant="contained" color="primary"
                            onClick={submitTweet}
                        >
                            Post
                        </Button>
                    </Box>
                </Item>
            </Box>
        </>
    );
}

//
