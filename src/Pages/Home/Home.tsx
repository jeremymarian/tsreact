import React, { useEffect, useState } from 'react';
import  * as Interfaces  from '@/Interfaces';
import {useSelector} from 'react-redux'
import { AppStore } from '@/redux/Store/store';
import {
  CardContent,
  Typography,
  CardActions,
  Card,
  Button,
  Input,
} from '@mui/material';
import {addFav, delFav} from '@/redux/Store/states/Favorites';
import {useDispatch} from 'react-redux';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const dispatch = useDispatch()
    const favoritesPer = useSelector((state:AppStore) => state.favorites)

  const dataRen = favoritesPer.map((p, i) => {
    const handleDeleteFavorite = ()=>{
      dispatch(delFav(p))
    }
    return (
      <div>
        <Card key={p.id} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 25 }}
              color="text.secondary"
              gutterBottom
            >
              {p.first_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {p.last_name}
            </Typography>
            <Typography variant="body2">
              {p.id}
              <br />
              {p.setor}
              <CardActions>
                <Button color='warning' onClick={handleDeleteFavorite}>Delete</Button>
              </CardActions>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  });


  return (
    <div style={{ minWidth: '99vw', maxWidth: '30vw', minHeight: '100vw' }}>
      <div
        key={1}
        className="
            d-flex flex-wrap
            gap-3
            align-content-between
            justify-content-center
            mt-2"
      >
        {dataRen}
      </div>
    </div>
  );
};

export default Home;
