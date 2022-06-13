import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo'
import Lista from '../ui/components/Lista/Lista'

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
      titulo="" 
      subtitulo={
        <span>
          Com um pequeno valor mensal, você <br/>
          pode <strong>adotar um pet virtualmente</strong>
        </span>
      }
    />  
    
      <Lista 
        pets={[
          {
            id: 1,
            nome: 'Bidu',
            historia: 'asljkeka8si aseaks alseassyeo',
            foto: 'https://i.pinimg.com/564x/de/56/c6/de56c6160ea07a60b5bef5bfdd85e6a3.jpg'
          },
          {
            id: 2,
            nome: 'Zeus',
            historia: 'asljkeka8s sase iaseak salseassyeo',
            foto: 'https://i.pinimg.com/564x/83/a1/85/83a18546957df64c51cbb9ac9aa64384.jpg'
          }

        ]}
      />
    </div>
  )
}

export default Home
