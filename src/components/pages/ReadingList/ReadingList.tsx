import { PageContainer } from 'components/templates/PageContainer/PageContainer';
import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { reading } from 'content/reading';

export const ReadingList = () => {
  return (
    <PageContainer>
      <h2>Reading List</h2>
      <List>
        {reading.map((theme) => (
          <ListItem>
            <Link to={theme.link}>{theme.name}</Link>
          </ListItem>
        ))}
      </List>
    </PageContainer>
  );
};
