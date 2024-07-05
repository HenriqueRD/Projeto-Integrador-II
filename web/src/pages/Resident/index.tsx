import { FormEvent, useEffect, useState } from 'react'
import ButtonSmall from '../../components/ButtonSmall'
import CardResident from '../../components/CardResident'
import Header from '../../components/Header'
import style from './style.module.scss'
import { api } from '../../api/axios'

type ResidentProps = {
  id: number
  name: string
  phone: number
  email: string
  createdAt: Date
}

export default function Resident() {

  const [ residents, setResidents ] = useState<ResidentProps[]>([])
  const [ name, setName ] = useState("")

  useEffect(() => {
    getResidents()
  }, [])

  async function getResidents() {
    await api.get("/users/").then(x => setResidents(x.data))
  }

  async function handleFilter(event: FormEvent) {
    event.preventDefault()
    if (name === "") {
      getResidents()
      return
    }
    await api.get("/users/find", { params: { value: name } }).then(x => setResidents(x.data))
  }

  return (
    <>
      <Header />
      <div id={style.Resident}>
        <div className="container">
          <div className={style.content}>
            <div className={style.header}>
              <div>
                <h3>Moradores: {residents.length}</h3>
                <p>Procure por algum morador específico pelo nome</p>
              </div>
              <form onSubmit={handleFilter}>
                <input type="text" value={name} onChange={x => setName(x.target.value)} placeholder='Buscar por nome' />
                <ButtonSmall type='submit' text='Procurar' />
              </form>
            </div>
            <div className={style.list}>
              {
                residents.map(x => { return (
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