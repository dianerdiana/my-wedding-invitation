import { login } from '@src/redux/reducer';
import { useAppDispatch } from '@src/utils/hooks/useAppDispatch';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const defaultValues = {
  username: '',
  password: '',
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data: { username: string; password: string }) => {
    console.log(data);
    dispatch(login({ username: data.username, password: data.password })).then(
      ({ payload }) => {
        if (payload.error) {
          toast.error(payload.message);
        } else {
          navigate('/admin');
        }
      }
    );
  };

  return (
    <section className="flex items-center w-full h-screen justify-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-4 py-10 space-y-8 bg-white rounded-md"
      >
        <h2 className="text-3xl text-center">Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <Controller
            name="username"
            control={control}
            render={({ field }) => {
              return (
                <div className="p-2 bg-white border border-gray-400 rounded-md focus-within:border-gold">
                  <input
                    {...field}
                    type="text"
                    placeholder="Username"
                    className="w-full text-sm bg-transparent outline-none appearance-none text-brown placeholder:text-sm placeholder:text-gray-300"
                  />
                </div>
              );
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => {
              return (
                <div className="p-2 bg-white border border-gray-400 rounded-md focus-within:border-gold">
                  <input
                    {...field}
                    type="password"
                    placeholder="Password"
                    className="w-full text-sm bg-transparent outline-none appearance-none text-brown placeholder:text-sm placeholder:text-gray-300"
                  />
                </div>
              );
            }}
          />
        </div>

        <button className="w-full px-8 py-3 text-sm text-white rounded-md bg-gold">
          Masuk
        </button>
      </form>
    </section>
  );
};

export default Login;
