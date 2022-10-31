import React, { useEffect } from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import { ContentComponent } from './components/content';
import { LeftbarComponent } from './components/leftbar';
import data from './data.json';

export default function App() {

  // create state users
  const [users, setUsers] = React.useState([]);

  // create state tweets
  const [tweets, setTweets] = React.useState([]);

  useEffect(() => {
    setUsers(data.users);
    setTweets(data.tweets);
  }, []);

  return (
    <>
      <Grid container data-testid="grid-container">
        <LeftbarComponent
          users={users}
          setUsers={setUsers}
        />
        <ContentComponent
          tweets={tweets}
          setTweets={setTweets}
          users={users}
        />
      </Grid>
    </>
  );
}
