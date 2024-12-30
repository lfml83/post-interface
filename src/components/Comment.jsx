import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content}){
    return(

        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/lfml83.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luiz Leite</strong>
                            <time title="11 Maio as 8:15" dateTime="2022-05-11 08:15:56">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content} </p>

                </div>
                <footer>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </footer>
            </div>
        </div>
    )

}