import {VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import {Botao} from './components/Botao';
import {EntradaDeTexto} from './components/EntradaDeTexto'
import { Titulo } from './components/Titulo';

export default function Login() {
  return (
    <VStack flex={1} justifyContent="center" alignItems="center" padding={5} >
      <Image source={Logo} alt='Logo Voll' />

      <Titulo>
        Faça login em sua conta
      </Titulo>

      <Box>
        <EntradaDeTexto 
          label='E-mail'
          placeholder='Insira seu e-mail'
        />

        <EntradaDeTexto 
          label='Senha'
          placeholder='Insira sua senha'
        />
      </Box>

      <Botao>Entrar</Botao>

      <Link
        href='https://www.alura.com.br'
        marginTop={5}
      >
        Esqueceu a senha?
      </Link>

      <Box
        w="100%"
        flexDirection="row"
        justifyContent="center"
        mt={8}
      >
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color="blue.500" fontWeight="bold">Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

