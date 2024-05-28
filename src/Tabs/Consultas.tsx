import {VStack, Text, Divider ,ScrollView} from 'native-base';
import { CardConsultas } from '../components/CardConsultas';
import { Titulo } from '../components/Titulo';
import { Botao } from '../components/Botao';

export default function Consultas(){
    return (
        <ScrollView p={5}>
            <Titulo color="blue.500">Minha Consultas</Titulo>
            <Botao marginTop={5} mb={5}>Agendar Nova Consulta</Botao>

            <Titulo fontSize="lg" alignSelf="flex-start" mb={2} color="blue.500">Próximas consultas</Titulo>
            <CardConsultas
                nome='Dr. André Cunha'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/114630360?v=4'
                data='23/04/2024'
                foiAgendado
            />

            <Divider mt={5} />

            <Titulo fontSize="lg" alignSelf="flex-start" mb={2} color="blue.500">Consultas passadas</Titulo>
            <CardConsultas
                nome='Dr. André Cunha'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/114630360?v=4'
                data='23/04/2024'
                foiAtendido
            />
            <CardConsultas
                nome='Dr. André Cunha'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/114630360?v=4'
                data='23/04/2024'
                foiAtendido
            />
            <CardConsultas
                nome='Dr. André Cunha'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/114630360?v=4'
                data='23/04/2024'
                foiAtendido
            />
        </ScrollView>
    )
}