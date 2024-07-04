import { useForm } from 'react-hook-form'
import './Form.css'
import Alert from '../Alert/Alert'

const Form = () => {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  console.log(formState.errors.username)
  const onSubmit = (values) => {
    //AQUI MI FUNCION o FETCH O LO QUE HAGA
    console.log(values)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='formGroup'>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          className={`input ${
            formState.errors.username?.type === 'required' ? 'error' : ''
          }`}
          id='username'
          {...register('username', {
            required: {
              value: true
            },
            minLength: {
              value: 2,
              message: 'Minimo 2 caracteres😙'
            }
          })}
        />

        {formState.errors.username?.message ? (
          <Alert>{formState.errors.username.message}</Alert>
        ) : null}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          className={`input ${
            formState.errors.email?.type === 'required' ? 'error' : ''
          }`}
          id='email'
          {...register('email', {
            required: {
              value: true
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'El formato no es valido😢'
            }
          })}
        />
        {formState.errors.email?.message ? (
          <Alert>{formState.errors.email.message}</Alert>
        ) : null}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          className={`input ${
            formState.errors.password?.type === 'required' ? 'error' : ''
          }`}
          id='password'
          {...register('password', {
            required: {
              value: true
            },
            minLength: {
              value: 8,
              message:
                'La contraseña debe tener al menos 8 caracteres y al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                'La contraseña debe incluir al menos una letra mayúscula, una minúscula, un número y un carácter especial'
            }
          })}
        />
        {formState.errors.password?.message ? (
          <Alert>{formState.errors.password.message}</Alert>
        ) : null}
      </div>
      <button type='submit' className='btnSubmit'>
        Enviar
      </button>
    </form>
  )
}

export default Form
