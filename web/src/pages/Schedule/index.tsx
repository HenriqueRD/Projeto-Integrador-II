import Header from '../../components/Header'
import style from './style.module.scss'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ptBR } from 'date-fns/locale'
import ButtonSmall from '../../components/ButtonSmall';
import Modal from '../../components/Modal';
import { useState } from 'react';
import Button from '../../components/Button';
import { format } from 'date-fns';

interface EventProp {
  id: string
  title: string
  desc: string
  start: Date
  end: Date
}

export default function Schedule() {

  const [ openNewEvent, setOpenNewEvent ] = useState(false)
  const [ openEvent, setOpenEvent ] = useState(false)
  const [ event, setEvent ] = useState<EventProp>({})
  const [ title, setTitle ] = useState('')
  const [ desc, setDesc ] = useState('')
  const [ date, setDate ] = useState('')

  function handleToogleNewEvent() {
    setOpenNewEvent(!openNewEvent)
  }

  function handleNewEvent() {
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
      <Header isLogged />
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
                    <input type='datetime-local' required id="date" onChange={(e) => setDesc(e.target.value)} value={desc} placeholder='Descrição do Evento ou Reunião' />
                  </div>
                  <div className={style.modalBox}>
                    <label htmlFor="desc">Descrição <span>(max 240 caracteres)</span></label>
                    <textarea required id="desc" maxLength={240} onChange={(e) => setDate(e.target.value)} value={date} placeholder='Descrição do Evento ou Reunião' />
                  </div>
                  <div className={style.modalBox}>
                    <Button type='submit' text='Agendar Evento' />
                  </div>
                </form>
              </Modal>
            </div>
            <Calendar
              localizer={momentLocalizer(moment)}
              events={[
                {
                  id: '1',
                  title: 'Evento',
                  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of ype and scrambled it to make a typesssssssssss',
                  start: new Date("2024-03-19T03:24:00"),
                  end: new Date("2024-03-19T19:24:00"),
                },
                {
                  id: '2',
                  title: 'Diversos',
                  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of ype and scrambled it to make a typesssssssssss',
                  start: new Date("2024-03-19T03:24:00"),
                  end: new Date("2024-03-19T03:24:00"),
                },
                {
                  id: '3',
                  title: 'Reunião',
                  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of ype and scrambled it to make a typesssssssssss',
                  start: new Date("2024-03-16T03:24:00"),
                  end: new Date("2024-03-16T03:24:00"),
                },
              ]}
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
                  <strong>Informações</strong>
                  <p>{event.desc}</p>
                </div>
                <div className={style.modalBox}>
                  <strong>Data e Horário</strong>
                  <p>{format(new Date("2024-03-16T23:24:00"), "dd 'de' MMMM 'de' yyyy',' 'às' HH 'horas e' mm 'minutos'", { locale: ptBR })}</p>
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