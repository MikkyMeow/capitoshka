import { PageContinaer } from 'components/templates/PageContainer/PageContainer';
import { themes } from '../../../content/grammarThemes';
import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

export const Grammar = () => {
  return (
    <PageContinaer>
      <h2>Grammar</h2>
      <List>
        {themes.map((theme) => (
          <ListItem>
            <Link to={theme.link}>{theme.name}</Link>
          </ListItem>
        ))}
      </List>
    </PageContinaer>
  );
};
