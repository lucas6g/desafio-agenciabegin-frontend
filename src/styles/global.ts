import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:0;
}
body{
  background-color:#FDFDFD;
  
}
body,input,button{
  font-family: 'Roboto', serif;
  font-size:16px;
}
`;
