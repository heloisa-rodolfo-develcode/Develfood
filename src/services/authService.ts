import axios from 'axios';
import toast from 'react-hot-toast';

export type SignInForm = {
  email: string;
  password: string;
};

export async function authenticate({ email, password }: SignInForm) {
  try {
    const response = await axios.post('http://localhost:3000/auth/login', {
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Usuário ou senha inválidos.');
    }

    const data = response.data;

    toast.success('Login realizado com sucesso!', {
      position: 'bottom-right',
      duration: 3000,
    });

    return data; 
  } catch (error) {
    if (axios.isAxiosError(error)) {
      
      const errorMessage = error.response?.data?.error || 'Erro inesperado na autenticação.';
      toast.error(errorMessage, { position: 'bottom-right' });
    } else {
      
      toast.error(
        error instanceof Error
          ? error.message
          : 'Erro inesperado na autenticação.',
        { position: 'bottom-right' }
      );
    }
    return null;
  }
}