import { Chats, User } from '@phosphor-icons/react'
import Header from '../../components/Header'
import style from './style.module.scss'
import ButtonSmall from '../../components/ButtonSmall'
import CardComment from '../../components/CardComment'
import { FormEvent, useEffect, useState } from 'react'
import { api } from '../../api/axios'
import { format, formatDistance, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

type CommentProps = {
  id: number
  user: {
    name: string
  }
  description: string
  createdAt: string
}

type TopicProps = {
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

export default function Topic() {

  const [ update, setUpdate ] = useState(false)
  const [ description, setDescription ] = useState("")
  const { id } = useParams()
  const [ topic, setTopic ] = useState<TopicProps>({} as any)

  async function getTopic() {
    await api.get(`/topics/${id}`).then(x => setTopic(x.data))
  }

  useEffect(() => {
    getTopic()
  }, [id, update])


  if (!topic || !topic.user || !topic.comments) { 
    return; 
  }

  async function handleNewComment(event: FormEvent) {
    event.preventDefault()
    await api.post("/comments/", { description, topicId: id })
      .then(() => { 
        setUpdate(!update)
        toast.success("comentário Criado!", {
          style: {
            borderRadius: '6px',
            background: '#323238',
            color: '#E1E1E6',
          },
        })
      })
      .catch(x => 
        toast.error("Erro: " + x.response.data, {
          style: {
            borderRadius: '6px',
            background: '#323238',
            color: '#E1E1E6',
          },
        })
      )
  }

  return (
    <>
      <Header />
      <div id={style.Topic}>
        <div className="container">
          <div className={style.content}>
            <div className={style.question}>
              <div className={style.header}>
                <div className={style.user}>
                  <User />
                  <div className={style.info}>
                    <span className={style.name}>{topic.user.name}</span>
                    <span className={style.cat}>{topic.category}</span>
                  </div>
                </div>
                <time title={format(new Date(topic.createdAt), 'dd/MM/yyyy')} dateTime={format(new Date(topic.createdAt), 'dd/MM/yyyy')}>{formatDistance(subDays(new Date(topic?.createdAt), 0), new Date(), {addSuffix: true, locale: ptBR})}</time>
              </div>
              <div className={style.desc}>
                <h2>{topic.title}</h2>
                <p>{topic.description}</p>
              </div>
              <div className={style.answer}>
                <div className={style.commentInfo}>
                  <h3>Deixe seu comentário</h3>
                  <div className={style.length}>
                    <Chats size={22} />
                    <span>{topic.comments.length}</span>
                  </div>
                </div>
                <form onSubmit={handleNewComment}>
                  <textarea maxLength={255} value={description} onChange={x => setDescription(x.target.value)} placeholder='Escreva um comentário...' />
                  <footer>
                    <ButtonSmall className={style.button} type='submit' text='Publicar' />
                  </footer>
                </form>
              </div>
            </div>
            <div className={style.comments}>
              {
                topic.comments.map(x => {
                  return (
                    <CardComment key={x.id} createAt={x.createdAt} name={x.user.name} desc={x.description}/>
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