import { FormEvent, useEffect, useState } from 'react'
import ButtonSmall from '../../components/ButtonSmall'
import Header from '../../components/Header'
import style from './style.module.scss'
import CardTopic from '../../components/CardTopic'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import { api } from '../../api/axios'

type CommentProps = {
  id: number
  user: {
    name: string
  }
  description: string
  createdAt: string
}

type TopicsProps = {
  id: number
  user: {
    name: string
  }
  category: string
  title: string
  description: string
  createdAt: string
  comments: CommentProps[]
}

export default function Forum() {
  
  const [ topics, setTopics ] = useState<TopicsProps[]>([])
  const [ filter, setFilter ] = useState('')
  const [ openModal, setOpenModal ] = useState(false)
  const [ title, setTitle ] = useState('')
  const [ update, setUpdate ] = useState(false)
  const [ description, setDescription ] = useState('')
  const [ category, setCategory ] = useState('0')

  function handleToogleModal() {
    setOpenModal(!openModal)
  }

  async function handleNewTopic(e : FormEvent) {
    e.preventDefault()
    try { 
      await api.post("/topics/", {
        title,
        description,
        category
      }).then(() => setUpdate(!update))
    } catch (err) {
      alert(err)
    }
    handleToogleModal()
  }

  async function getTopics() {
    await api.get("/topics/")
      .then(x => setTopics(x.data))
      .catch(x => alert(x.response.data))
  }

  async function handleFilter() {
    if (filter === "") {
      getTopics()
      return
    }
    await api.get("/topics/find", { params: { value: filter } }).then(x => setTopics(x.data))
  }

  useEffect(() => {
    getTopics()
  }, [update])

  return (
    <>
      <Header />
      <div id={style.Forum}>
        <div className="container">
          <div className={style.content}>
            <div className={style.header}>
              <h3>Tópicos ativos: <span>{topics.length}</span></h3>
              <div className={style.buttons}>
                <div className={style.modalBox}>
                  <select required id="cat" onChange={(e) => setFilter(e.target.value)} onClick={handleFilter} value={filter}>
                    <option value="">Filtrar por categoria</option>
                    <option value="Segurança">Segurança</option>
                    <option value="Regras">Regras</option>
                    <option value="Eventos">Eventos</option>
                    <option value="Manutenção">Manutenção</option>
                    <option value="Diversos">Diversos</option>
                    <option value="">Listar todos</option>
                  </select>
                </div>
                <ButtonSmall onClick={handleToogleModal} text='Criar Tópico'/>
              </div>
              <Modal title='Criar Tópico' isOpen={openModal} onClick={handleToogleModal}>
                <form onSubmit={handleNewTopic} className={style.modalForm}>
                  <div className={style.modalBox}>
                    <label htmlFor="title">Título <span>(max 50 caracteres)</span></label>
                    <input required id="title" maxLength={50} type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Título do Tópico' />
                  </div>
                  <div className={style.modalBox}>
                    <label htmlFor="desc">Descrição <span>(max 255 caracteres)</span></label>
                    <textarea required id="desc" maxLength={255} onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Descrição do Tópico' />
                  </div>
                  <div className={style.modalBox}>
                    <label htmlFor="cat">Categoria</label>
                    <select required id="cat" onChange={(e) => setCategory(e.target.value)} value={category}>
                      <option value="">Categoria do Tópico</option>
                      <option value="Segurança">Segurança</option>
                      <option value="Regras">Regras</option>
                      <option value="Eventos">Eventos</option>
                      <option value="Manutenção">Manutenção</option>
                      <option value="Diversos">Diversos</option>
                    </select>
                  </div>
                  <div className={style.modalBox}>
                    <Button type='submit' text='Criar Tópico' />
                  </div>
                </form>
              </Modal>
            </div>
            <div className={style.list}>
              {
                topics.map(x => {
                  return (
                    <CardTopic key={x.id} data={x} comments={x.comments.length} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}