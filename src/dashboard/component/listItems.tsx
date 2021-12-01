import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const mainListItems = (
  <div>
    <ListItem className="listDs">
      <ListItemText>Design system</ListItemText>
    </ListItem>
    <ListItem className="listClient">
      <ListItemText>Kushki</ListItemText>
    </ListItem>
    <ListItem className="listTitle">
      <ListItemText>Adquirente</ListItemText>
    </ListItem>
    <ListItem>
    <ListItemButton component="a" href="#">
      <ListItemText primary="Tipografías" />
    </ListItemButton>
    </ListItem>
<ListItem>
    <ListItemButton component="a" href="#">
      <ListItemText primary="Buttons" />
    </ListItemButton>
    </ListItem>
<ListItem>
    <ListItemButton component="a" href="#">
      <ListItemText primary="Square Buttons" />
    </ListItemButton>
    </ListItem>
<ListItem>
    <ListItemButton component="a" href="#">
      <ListItemText primary="Controls" />
    </ListItemButton>
    </ListItem>
<ListItem>
    <ListItemButton component="a" href="#">
      <ListItemText primary="TextField" />
    </ListItemButton>
    </ListItem>
<ListItem>
    <ListItemButton component="a" href="#">
      <ListItemText primary="TextField Select & ISO"></ListItemText>
    </ListItemButton>
    </ListItem>
<ListItem>
    <ListItemButton component="a" href="#">
      <ListItemText primary="Icons"></ListItemText>
    </ListItemButton>
    </ListItem>
<ListItem>    
    <ListItemButton component="a" href="#">
      <ListItemText primary="Data Display"></ListItemText>
    </ListItemButton>
    </ListItem>
  </div>
);