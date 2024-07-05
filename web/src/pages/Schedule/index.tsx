import Header from '../../components/Header'
import style from './style.module.scss'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ptBR } from 'date-fns/locale'
import ButtonSmall from '../../components/ButtonSmall';
import Modal from '../../components/Modal';
import { FormEvent, useEffect, useState } from 'react';
import Button from '../../components/Button';
import { format } from 'date-fns';
import { api } from '../../api/axios';
import { Phone, User } from '@phosphor-icons/react';

interface EventProp {
  id: number
  title: string
  description: string
  start: string
  end: string
  user: {
    name: string
    phone: number
  }
}

export default function Schedule() {

  const [ openNewEvent, setOpenNewEvent ] = useState(false)
  const [ openEvent, setOpenEvent ] = useState(false)
  const [ events, setEvents ] = useState<EventProp[]>([])
  const [ event, setEvent ] = useState<EventProp>({} as any)
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ date, setDate ] = useState('')

  useEffect(() => {
    getEvent()
  }, [])

  async function getEvent() {
    await api.get("/schedules/")
      .then(x => setEvents(x.data))
      .catch(x => alert(x))
  }

  function handleToogleNewEvent() {
    setOpenNewEvent(!openNewEvent)
  }

  async function handleNewEvent(event: FormEvent) {
    event.preventDefault()
    await api.post("/schedules/create", {
      title,
      description,
      start: date,
      end: date
    })
      .then(() => getEvent())
      .catch(x => alert(x)).then(x => console.log(x))
    setOpenNewEvent(!openNewEvent)
  }

  function handleToogleEvent() {
    setOpenEvent(!openEvent)
  }

  function handleEvent(e : EventProp) {
    setOpenEvent(!openEvent)
    setEvent(e)
  }

  return (
    <>
      <Header />
      <div id={style.Schedule}>
        <div className="container">
          <div className={style.content}>
            <div className={style.header}>
              <h3>Calendário: </h3>
              <ButtonSmall text='Agendar Evento' onClick={handleToogleNewEvent}/>
              <Modal onClick={handleToogleNewEvent} isOpen={openNewEvent} title='Agendar Evento'>
                <form onSubmit={handleNewEvent} className={style.modalForm}>
                  <div className={style.modalBox}>
                    <label htmlFor="title">Título</label>
                    <select required id="cat" onChange={(e) => setTitle(e.target.value)} value={title}>
                      <option value="">Título do Evento ou Reunião</option>
                      <option value="Reunião">Reunião</option>
                      <option value="Evento">Evento</option>
                      <option value="Diversos">Diversos</option>
                    </select>
                  </div>
                  <div className={style.modalBox}>
                    <label htmlFor="date">Data</label>
                    <input type='datetime-local' required id="date" onChange={(e) => setDate(e.target.value)} value={date} placeholder='Descrição do Evento ou Reunião' />
                  </div>
                  <div className={style.modalBox}>
                    <label htmlFor="desc">Descrição <span>(max 240 caracteres)</span></label>
                    <textarea required id="desc" maxLength={240} onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Descrição do Evento ou Reunião' />
                  </div>
                  <div className={style.modalBox}>
                    <Button type='submit' text='Agendar Evento' />
                  </div>
                </form>
              </Modal>
            </div>
            <Calendar
              localizer={momentLocalizer(moment)}
              events={events}
              startAccessor="start"
              views={['month']}
              onSelectEvent={handleEvent}
              messages={{
                today: 'Hoje',
                previous: 'Anterior',
                next: 'Próximo',
                month: 'Mês',
              }}
              endAccessor="end"
              className={style.schedule}
            />
            <Modal onClick={handleToogleEvent} isOpen={openEvent} title={event.title}>
              <div className={style.modalForm}>
                <div className={style.modalBox}>
                  <strong>Morador</strong>
                  <div className={style.user}>
                    <User />
                    <div className={style.info}>
                      <span className={style.name}>{event?.user?.name}</span>
                      <span className={style.phone}><Phone/>{event?.user?.phone}</span>
                    </div>
                  </div>
                </div>
                <div className={style.modalBox}>
                  <strong>Informações</strong>
                  <p>{event.description}</p>
                </div>
                <div className={style.modalBox}>
                  <strong>Data e Horário</strong>
                  <time>{format(new Date(event?.start || new Date()), "dd 'de' MMMM 'de' yyyy',' 'às' HH 'horas e' mm 'minutos'", { locale: ptBR })}</time>
                </div>
                <div className={style.modalBox}>
                  <Button isPrimary={false} type='button' onClick={handleToogleEvent} text='Fechar' />
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}