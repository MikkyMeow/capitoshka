import { PageContainer } from 'components/templates/PageContainer/PageContainer';
import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { listening } from 'content/listening';

export const ListeningList = () => {
  return (
    <PageContainer>
      <h2>Listening List</h2>
      <List>
        {listening.map((theme) => (
          <ListItem>
            <Link to={theme.link}>{theme.name}</Link>
          </ListItem>
        ))}
      </List>
    </PageContainer>
  );
};
