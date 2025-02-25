import {VStack, Text, Image, ScrollView, Divider, Box} from 'native-base';
import Logo from '../assets/Logo.png';
import { Botao } from '../components/Botao';
import { EntradaDeTexto } from '../components/EntradaDeTexto';
import { Titulo } from '../components/Titulo';
import {depoimentos} from '../utils/mock'

export default function Principal(){
    return (
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Image source={Logo} alt='Logo' mt={10} />
                <Titulo color="blue.500">Boas Vindas!</Titulo>

                <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="0" borderBottomRightRadius="md">
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

                <Titulo color="blue.500" alignSelf="center">Depoimentos</Titulo>
                <VStack space={3} divider={<Divider />} w="100%">
                    {
                        depoimentos.map(depoimento => (
                            <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                                <Text color="gray.300" fontSize="md" textAlign="justify">
                                    {depoimento.text}
                                </Text>
                                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt={2}>{depoimento.titulo}</Text>
                            </Box>
                        ))
                    }
                </VStack>
            </VStack>
        </ScrollView>
    )
}