import jwtDecode from 'jwt-decode';
import SecureLS from 'secure-ls';

let ls = new SecureLS({ encodingType: 'aes' });
let codedToken = ls.get('currentUser', data.token);
let decodedToken = jwtDecode(codedToken);

console.log(codedToken);
export default decodedToken;
