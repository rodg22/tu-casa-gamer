// import  { Component } from 'react';

// class List extends Component {

    
//     render() {
//         const users = [
//             {
//               "email": "visit31@yahoo.com",
//               "gender": "male",
//               "id": "screaming.butterfly.83",
//               "last_login": {
//                 "date_time": "Sat Dec  2 17:33:40 UTC 1972",
//                 "ip4": "133.242.9.241"
//               }
//             },
//             {
//               "email": "syllable_malvina@hotmail.com",
//               "gender": "female",
//               "id": "gruesome.dream",
//               "last_login": {
//                 "date_time": "Mon Nov 29 18:55:44 UTC 1976",
//                 "ip4": "134.4.39.135"
//               }
//             },
//             {
//               "email": "cool@gmail.com",
//               "gender": "female",
//               "id": "chicken.cherry.87",
//               "last_login": {
//                 "date_time": "Mon Jul 21 00:05:10 UTC 1975",
//                 "ip4": "146.229.44.204"
//               }
//             },
//             {
//               "email": "augustine@outlook.com",
//               "gender": "male",
//               "id": "solid-dawn-34",
//               "last_login": {
//                 "date_time": "Wed Sep 29 05:33:35 UTC 1976",
//                 "ip4": "172.55.171.169"
//               }
//             },
//             {
//               "email": "deanna@yahoo.com",
//               "gender": "male",
//               "id": "unique-breeze",
//               "last_login": {
//                 "date_time": "Fri Apr 28 13:47:48 UTC 1972",
//                 "ip4": "153.88.170.250"
//               }
//             },
//             {
//               "email": "chick_jazlyn@gmail.com",
//               "gender": "female",
//               "id": "serious-flower",
//               "last_login": {
//                 "date_time": "Wed Apr  5 08:45:44 UTC 1972",
//                 "ip4": "153.233.190.117"
//               }
//             },
//             {
//               "email": "quo@outlook.com",
//               "gender": "female",
//               "id": "hungry-wood",
//               "last_login": {
//                 "date_time": "Mon Apr 22 11:55:42 UTC 1974",
//                 "ip4": "215.38.59.202"
//               }
//             },
//             {
//               "email": "turn@hotmail.com",
//               "gender": "male",
//               "id": "fatty-lake",
//               "last_login": {
//                 "date_time": "Thu Jan  4 06:29:13 UTC 1973",
//                 "ip4": "136.93.64.221"
//               }
//             },
//             {
//               "email": "magnam_brock@hotmail.com",
//               "gender": "male",
//               "id": "bitter.violet",
//               "last_login": {
//                 "date_time": "Thu Dec 25 00:12:39 UTC 1975",
//                 "ip4": "192.12.45.233"
//               }
//             },
//             {
//               "email": "hundred@yahoo.com",
//               "gender": "female",
//               "id": "restless-voice-15",
//               "last_login": {
//                 "date_time": "Mon Feb 22 18:41:25 UTC 1971",
//                 "ip4": "216.225.75.232"
//               }
//             }
//           ]

//         return <div>
//             <ul>
//                 {users.map(user => {
//                     const {id, email, last_login:login} = user;
//                     return (<li key={id}>
//                         {email}{(login.date_time)}
//                     </li>)
//                     })
//                 }    
//             </ul>
//         </div>;
//     }
// }
 
// export default List;