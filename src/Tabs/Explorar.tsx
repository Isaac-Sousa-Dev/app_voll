import {VStack, Box, ScrollView} from 'native-base';
import {Botao} from '../components/Botao'
import { CardConsultas } from '../components/CardConsultas';
import { EntradaDeTexto } from '../components/EntradaDeTexto';
import { Titulo } from '../components/Titulo';

export default function Explorar(){
    return (
        <ScrollView>
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Box w="100%" borderRadius="lg" p={3} mt={5} shadow={0} borderBottomRightRadius="md">
                    <EntradaDeTexto 
                        placeholder='Digite a especialidade'
                    />
                     <EntradaDeTexto 
                        placeholder='Digite sua localização'
                    />
                    <Botao mt={3} mb={3}>
                        Buscar
                    </Botao>
                </Box>

                <Titulo color="blue.500" alignSelf="center" mb={4}>Resultado da Busca</Titulo>
                {[1, 2, 3].map((_, index) => (
                    <VStack flex={1} w="100%" alignItems="center" bgColor="#f0f0f0" key={index} p={2} borderRadius="lg" marginTop={1} justifyContent="center">
                        <CardConsultas 
                            especialidade='Desenvolvedor'
                            nome='Isaac Sousa'
                            foto='https://avatars.githubusercontent.com/u/114630360?v=4'
                        />
                    </VStack>
                ))}
            </VStack>
        </ScrollView>
    )
}