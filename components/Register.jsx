import './Register.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    alert('Registered Successfully!');
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register('name')} />
        <input type="email" placeholder="Email" {...register('email')} />
        <input type="password" placeholder="Password" {...register('password')} />
        <button type="submit">Register</button>
        <p>Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>
      </form>
    </div>
  );
}

export default Register;
