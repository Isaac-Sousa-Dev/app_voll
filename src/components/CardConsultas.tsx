import {Text, Avatar, VStack} from 'native-base';
import { Botao } from './Botao';

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
}

export function CardConsultas({
    nome,
    foto,
    data,
    especialidade,
    foiAgendado,
    foiAtendido
}: CardProps){
    return (
        <VStack w="100%" backgroundColor={foiAtendido ? 'blue.100' : 'white'} p={5} borderRadius="lg" shadow={2} mb={7}>
            <VStack flexDir="row">
                <Avatar size="lg" source={{ uri: foto }} 
                    
                    ></Avatar>
                    <VStack paddingLeft={5}>
                        <Text fontSize="md" fontWeight="bold">{nome}</Text>
                        <Text>{especialidade}</Text>
                        <Text>{data}</Text>
                    </VStack>
            </VStack>

            <Botao marginTop={4}>
                {foiAgendado ? 'Cancelar' : 'Agendar Consulta'}
            </Botao>
        </VStack>
    )
}