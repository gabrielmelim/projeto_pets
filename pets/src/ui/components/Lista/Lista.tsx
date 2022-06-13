import { Button } from '@mui/material'
import { borderRadius, Box } from '@mui/system'
import {
    ListaStyled,
    ItemLista,
    Foto,
    Informacoes,
    Nome,
    Descricao
} from './Lista.style'

import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'

const tamanhoMaximoTexto = 200;

interface ListaProps{
    pets: Pet[];
}

export default function Lista(props: ListaProps) {
    return (
        <ListaStyled>
            {props.pets.map(pet =>(

            <ItemLista key = {pet.id}>
                <Foto 
                src={pet.foto} />
                <Informacoes>
                    <Nome>{pet.nome}</Nome>
                    <Descricao>
                        {TextService.limitarTexto(pet.historia,tamanhoMaximoTexto)}
                    </Descricao>
                    <Box ml={0}>
                        <Button
                        classes={{ root: 'btn-lista' }}
                        fullWidth
                        >Adotar {pet.nome}
                        </Button>
                    </Box>
                </Informacoes>
            </ItemLista>

            ))}


        </ListaStyled>
    )
}

