import styled from 'styled-components';
import { connectTheme } from 'styled-components-theme-connector';

const Item = styled.li`
  padding: 5px;
`;

export default connectTheme('list.li')(Item);