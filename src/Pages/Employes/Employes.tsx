import * as Interfaces from '@/Interfaces';
import React, { useState, useEffect } from 'react';
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


interface IEmployesProps {
  data: Interfaces.DataModel[];
}
//
const Employes: React.FC<IEmployesProps> = (data) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('');
  const [datar, setDatar] = useState<Interfaces.DataModel[]>([]);

  useEffect(() => {
    setDatar(data.data);
  }, [data.data]);


  const handleFilterData = (event: any) => {
    setValue(event.target.value);
  };
  const fest = datar.filter(({ first_name }: any) => {
    return first_name.toLowerCase().includes(value.toLowerCase());
  });

  const test = fest.map((p, i) => {
    const handleNewFavorite = ()=>{
      dispatch(addFav(p))
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
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleNewFavorite}>Add to favorites</Button>
          </CardActions>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <Input
        className="position-relative top-0 start-50 translate-middle pt-2"
        placeholder="Realiza tu busqueda"
        value={value}
        onChange={handleFilterData}
      />

      <div
        className="
        d-flex flex-wrap
        gap-3
        justify-content-center
        mt-2"
      >
        {test}
        <br />
      </div>
    </div>
  );
};

export default Employes;

/*return (
 */
