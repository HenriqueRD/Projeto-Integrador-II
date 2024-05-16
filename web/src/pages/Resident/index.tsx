import { useState } from 'react'
import ButtonSmall from '../../components/ButtonSmall'
import CardResident from '../../components/CardResident'
import Header from '../../components/Header'
import style from './style.module.scss'

const data = [
  {
    id: 1,
    name: 'Henrique R Dullius',
    phone: 51998960698,
    email: 'Henrique@gmail.com',
    createdAt: new Date()
  },
  {
    id: 2,
    name: 'Haidi Maria Santos',
    phone: 51992329965,
    email: 'haidimaria@gmail.com',
    createdAt: new Date()
  },
  {
    id: 3,
    name: 'Paulo Celson Pikasso',
    phone: 51998832961,
    email: 'pikassocelson@gmail.com',
    createdAt: new Date()
  },
  {
    id: 3,
    name: 'Paulo Celson Pikasso',
    phone: 51998832961,
    email: 'pikassocelson@gmail.com',
    createdAt: new Date()
  },
  {
    id: 3,
    name: 'Paulo Celson Pikasso',
    phone: 51998832961,
    email: 'pikassocelson@gmail.com',
    createdAt: new Date()
  }
]
export default function Resident() {

  const [ resident, setResident ] = useState(data)
  
  return (
    <>
      <Header isLogged />
      <div id={style.Resident}>
        <div className="container">
          <div className={style.content}>
            <div className={style.header}>
              <div>
                <h3>Moradores: {resident.length}</h3>
                <p>Procure por algum morador específico pelo nome</p>
              </div>
              <form>
                <input required type="text" placeholder='Buscar por nome' />
                <ButtonSmall type='submit' text='Procurar' />
              </form>
            </div>
            <div className={style.list}>
              {
                resident.map(x => {return (
                  <CardResident key={x.id} data={x} />
                )})
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}