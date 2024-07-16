import { PageContainer } from 'components/templates/PageContainer/PageContainer';
import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { themes } from 'content/grammar';

export const GrammarList = () => {
  return (
    <PageContainer>
      <h2>Grammar List</h2>
      <List>
        {themes.map((theme) => (
          <ListItem>
            <Link to={theme.link}>{theme.name}</Link>
          </ListItem>
        ))}
      </List>
    </PageContainer>
  );
};
