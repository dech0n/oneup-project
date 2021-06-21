// import {useState, useDispatch} from 'react-redux';
// import * as sessionActions from '../../store/session'

// function DemoLogin() {
//     const [errors, setErrors] = useState([]);
//     const dispatch = useDispatch();
//     const loginDemoUser = (e) => {
//         e.preventDefault();
//         setErrors([]);
//         return dispatch(sessionActions.login({ credential, password }))
//           .catch(async (res) => {
//             const data = await res.json();
//             if (data && data.errors) setErrors(data.errors);
//           });
//       }
//     return (
//         document.getElementById('demo-navlink').addEventListener((e) => {
//             e.preventDefault();
//             setErrors([]);
//             return dispatch(sessionActions.login({ credential, password }))
//               .catch(async (res) => {
//                 const data = await res.json();
//                 if (data && data.errors) setErrors(data.errors);
//               });
//           }
//     )
// )}
