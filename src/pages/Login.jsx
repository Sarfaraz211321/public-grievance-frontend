
// import React, { useState } from 'react';
// import { Form, Button, Alert, Card } from 'react-bootstrap';
// import API from '../services/api';
// import { useNavigate, Link } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await API.post('/auth/login', { email, password });

//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(res.data.user));

//       if (res.data.user.role === 'admin') navigate('/admin');
//       else navigate('/profile');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <>
      
//       <link
//         rel="stylesheet"
//         href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
//       />

//       <div
//         className="d-flex justify-content-center align-items-center vh-100"
//         style={{
//           background: "linear-gradient(135deg, #d6249f, #285AEB)",
//         }}
//       >
     
//         <Card style={{ width: "420px" }} className="shadow p-4">
//           <h3 className="text-center mb-4 fw-bold">LOGIN</h3>

//           {error && <Alert variant="danger">{error}</Alert>}

//           <Form onSubmit={handleSubmit}>
        
//             <Form.Group className="mb-3">
//               <div className="input-group">
//                 <span className="input-group-text bg-light">
//                   <i className="bi bi-envelope"></i>
//                 </span>
//                 <Form.Control
//                   type="email"
//                   placeholder="Email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <div className="input-group">
//                 <span className="input-group-text bg-light">
//                   <i className="bi bi-lock"></i>
//                 </span>
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </Form.Group>

//             <div className="form-check mb-3">
//               <input type="checkbox" id="remember" className="form-check-input" />
//               <label className="form-check-label" htmlFor="remember">
//                 Remember me
//               </label>
//             </div>

//             <Button
//               type="submit"
//               className="w-100 fw-bold text-white"
//               style={{ background: "#d6249f", border: "none" }}
//             >
//               LOGIN
//             </Button>
//           </Form>

//           <div className="d-flex gap-2 mb-3"> 
//           </div>

//           <div className="text-center mt-3">
//             <p className="mb-1">
//               <Link to="/forgot-password" className="text-decoration-none text-primary">
//                 Forgot Password?
//               </Link>
//             </p>

//           </div>
//         </Card>
//       </div>
//     </>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await API.post('/auth/login', { email, password });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

     
      if (res.data.user.role === 'admin') navigate('/admin');
      else navigate('/'); 
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />

      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          background: "linear-gradient(135deg, #d6249f, #285AEB)",
        }}
      >
        <Card style={{ width: "420px" }} className="shadow p-4">
          <h3 className="text-center mb-4 fw-bold">LOGIN</h3>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-envelope"></i>
                </span>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-lock"></i>
                </span>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </Form.Group>

            {/* <div className="form-check mb-3">
              <input type="checkbox" id="remember" className="form-check-input" />
              <label className="form-check-label" htmlFor="remember">
                Remember me
              </label>
            </div> */}

            <Button
              type="submit"
              className="w-100 fw-bold text-white"
              style={{ background: "#d6249f", border: "none" }}
            >
              LOGIN
            </Button>
          </Form>

          <div className="text-center mt-3">
            <p className="mb-1">
              <Link to="/forgot-password" className="text-decoration-none text-primary">
                Forgot Password?
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Login;
