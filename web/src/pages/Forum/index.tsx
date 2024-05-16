import { FormEvent, useState } from 'react'
import ButtonSmall from '../../components/ButtonSmall'
import Header from '../../components/Header'
import style from './style.module.scss'
import CardTopic from '../../components/CardTopic'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const array = [
  {
    id: "1",
    user: {
      id: "1",
      name: "John Silva",
    },
    category: "Manutenção",
    title: "Botão de pesquisa para encontrar",
    desc: "A página do fórum pode ser projetada para ser intuitiva e fácil de usar, permitindo que os moradores naveguem pelos tópicos perguntas de outros moradores e participem de discussões. Aqui está um esboço básico da página do fórum:",
    createAt: Date(),
  },
  {
    id: "2",
    user: {
      id: "2",
      name: "Ana Julia",
    },
    category: "Manutenção",
    title: "Botão de pesquisa para encontrar",
    desc: "Opções para navegar pelos diferentes tópicos do fórum (ex: Segurança, Manutenção, Eventos, etc.) Botão de pesquisa para encontrar tópicos específicos. permitindo que os moradores naveguem pelos tópicos, façam perguntas",
    createAt: Date(),
  },
  {
    id: "3",
    user: {
      id: "3",
      name: "Henrique R Dullius",
    },
    category: "Manutenção",
    title: "Botão de pesquisa para encontrar",
    desc: "A página do fórum pode ser proje naveguem pelos tópicos, façam perguntas, respondam a perguntas de outros morafdsdfsdores e participem de discussões. Aqui está um esboço básico da página do fórum:",
    createAt: Date(),
  },
  {
    id: "4",
    user: {
      id: "4",
      name: "Paulo Junior",
    },
    category: "Manutenção",
    title: "Botão de pesquisa para encontrar",
    desc: "A página do fórum pode ser projetada para ser intuitiva e fácil de usar, permitindo que os moradores naveguem pelos tópicos, façam perguntas, respondam a perguntas de outros moradores e participem de discussões. Aqui está um esboço básico da página do fórum:",
    createAt: Date(),
  },
]

export default function Forum() {
  
  const navigate= useNavigate()
  const [ topics, setTopics ] = useState(array)
  const [ openModal, setOpenModal ] = useState(false)
  const [ title, setTitle ] = useState('')
  const [ desc, setDesc ] = useState('')
  const [ category, setCategory ] = useState('0')

  function handleToogleModal() {
    setOpenModal(!openModal)
  }

  function handleNewTopic(e : FormEvent) {
    e.preventDefault()
    handleToogleModal()
  }

  return (
    <>
      <Header isLogged />
      <div id={style.Forum}>
        <div className="container">
          <div className={style.content}>
            <div className={style.header}>
              <h3>Tópicos ativos: <span>{topics.length}</span></h3>
              <ButtonSmall onClick={handleToogleModal} text='Criar Tópico'/>
              <Modal title='Criar Tópico' isOpen={openModal} onClick={handleToogleModal}>
                <form onSubmit={handleNewTopic} className={style.modalForm}>
                  <div className={style.modalBox}>
                    <label htmlFor="title">Título <span>(max 50 caracteres)</span></label>
                    <input required id="title" maxLength={50} type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Título do Tópico' />
                  </div>
                  <div className={style.modalBox}>
                    <label htmlFor="desc">Descrição <span>(max 350 caracteres)</span></label>
                    <textarea required id="desc" maxLength={350} onChange={(e) => setDesc(e.target.value)} value={desc} placeholder='Descrição do Tópico' />
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
                    <CardTopic key={x.id} data={x} />
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