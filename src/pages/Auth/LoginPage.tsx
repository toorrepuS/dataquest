// import React, { useState } from 'react';

// const LoginPage: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle login logic here (e.g., API call)
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   const handleVNGLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:3014/login', {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();
//       console.log('Login successful:', data);
//       // Handle successful login (e.g., redirect, store token, etc.)
//     } catch (error) {
//       console.error('Error during VNG login:', error);
//       // Handle error (e.g., show error message)
//     }
//   };

//   return (
//     <div className="container d-flex align-items-center justify-content-center min-vh-100">
//       <div className="card" style={{ width: '25rem' }}>
//         <div className="card-body">
//           <h5 className="card-title text-center">Login</h5>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="username" className="form-label">Username</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="d-flex justify-content-between">
//               <div className="form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="rememberMe"
//                 />
//                 <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
//               </div>
//               <a href="#!" className="text-primary">Forgot password?</a>
//             </div>
//             <button type="submit" className="btn btn-primary w-100 mt-3">Sign in</button>
//           </form>
//           <div className="text-center mt-3">
//             <button 
//               className="btn btn-warning w-100" 
//               onClick={handleVNGLogin}
//             >
//               Continue with VNG Office 365
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card" style={{ width: '25rem' }}>
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <div className="text-center mt-3">
            <a 
              href="https://zdsdev.zalopay.vn/be/login" // Direct link to the login page
              className="btn btn-primary w-100"
            >
              Continue with VNG Office 365
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;