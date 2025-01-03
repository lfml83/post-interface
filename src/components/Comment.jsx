/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'


export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0)
    
    function handleDeleteComment(){
        onDeleteComment(content)
    }
    /*  pegando o valor anterior usando useState e somando mais 1 */
    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        })
    }
    
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
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content} </p>

                </div>
                <footer>
                       <button onClick={handleLikeComment}>
                       <ThumbsUp />
                       Aplaudir <span>{likeCount}</span>
                       </button>
                   
                </footer>
            </div>
        </div>
    )

}