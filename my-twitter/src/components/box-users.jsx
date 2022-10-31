// receive data and render in box
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Avatar, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(1),
}));

export const BoxUsers = ({ users, type, setUsers }) => {

    let usersFiltered = users.filter(user => user.following === false && user.id > 0);
    if (type === 'following') {
        usersFiltered = users.filter(user => user.following === true && user.id > 0);
    }

    const handleFollowingSelected = (id) => {
        // update user following
        const usersUpdated = users.map((user) => {
            if (user.id === id && user.following === true) {
                return {
                    ...user,
                    // add flag selected
                    selected: !user.selected
                }
            }
            return user;
        }
        );
        setUsers(usersUpdated);
    }

    return (
        <>
            <Typography variant="h6" component="div" gutterBottom align='left'>
                {type === 'following' ? 'Following' : 'Follow'}
            </Typography>
            <Box sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1, p: 1, m: 1, mb: 8 }} data-testid="box-users">
                {usersFiltered.map((user) => (
                    // Item can be selected
                    <Item key={user.id} data-testid={user.username + "-row"} id={user.username + "-row"}
                        className={user.selected ? 'selected' : ''} onClick={() => {
                            handleFollowingSelected(user.id)
                        }
                        }>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar alt={user.name} src={user.avatar} />
                            <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                                {user.name}
                            </Typography>
                            <Box sx={{ flexGrow: 1 }}
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="flex-end"
                            >
                                <Button variant="contained" color="primary" data-testid={user.username + "-button"}
                                    onClick={
                                        (e) => {
                                            e.stopPropagation();
                                            // replace user in array
                                            const newUsers = users.map((userItem) => {
                                                if (userItem.id === user.id) {
                                                    return {
                                                        ...userItem,
                                                        following: !userItem.following
                                                    }
                                                }
                                                return userItem;
                                            });
                                            setUsers(newUsers);
                                        }
                                    }>
                                    {type === 'following' ? 'Unfollow' : 'Follow'}
                                </Button>
                            </Box>
                        </Box>
                    </Item>
                ))}
            </Box>
        </>
    );
}