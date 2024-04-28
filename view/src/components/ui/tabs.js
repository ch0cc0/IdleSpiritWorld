import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';

export const StyledTab = styled((props) => <Tab {...props} />)(
    ({ theme }) => ({
      color: 'rgba(255, 255, 255, 0.7)',
    }),
  );