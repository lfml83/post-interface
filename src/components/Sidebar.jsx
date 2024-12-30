import {PencilLine} from 'phosphor-react' // pacote de icones from https://phosphoricons.com/ 
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar(){

    return( 
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://media.istockphoto.com/id/1856891092/pt/foto/photo-of-happy-successful-cyber-security-expert-sit-chair-database-optimization-workstation.jpg?s=612x612&w=is&k=20&c=VbI_OWeuEsnhJzsRqmp8Z6F89yrYJRhUo7qQ6emBr6Q=" />
           
            <div className={styles.profile}>
               
                <Avatar src = "https://github.com/brunomlbr.png"/> 

                <strong>Luiz Leite</strong>
                <span>Web developer</span>
            </div>
            
            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    editar o seu perfil
                </a>


            </footer>



        </aside>
            
);
}