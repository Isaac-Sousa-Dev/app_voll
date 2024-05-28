import {VStack, Text, ScrollView, Avatar, Divider} from 'native-base';
import { Titulo } from '../components/Titulo';
import { TextInput } from 'react-native';

export default function Perfil(){
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>

                <Avatar size="xl" source={{ uri: "https://avatars.githubusercontent.com/u/114630360?v=4" }} 
                    mt={5}
                ></Avatar>
                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg" marginBottom={1}>Isaac Sousa</Titulo>
                <Text>12/02/2001</Text>
                <Text>Fortaleza/CE</Text>

                <Divider mt={5} />

                <Titulo color="blue.500" mb={1}>Histórico Médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}