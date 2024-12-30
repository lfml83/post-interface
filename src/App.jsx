
import { Header } from './components/header';

import { Sidebar } from './components/sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarurl: 'https://github.com/lfml83.png',
      name: "Luiz Leite",
      role: "Aeronautical Engineer"
    },
    content: [
    
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'jane.design/doctorcare'},

    ],
    publishedAt: new Date('2024-12-27 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarurl: 'https://github.com/brunomlbr.png',
      name: "Bruno Leite",
      role: "Aeronautical Engineer 2"
    },
    content: [
    
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'jane.design/doctorcare'},

    ],
    publishedAt: new Date('2024-12-10 20:00:00'),
  },
];

function App() {
 

  return (
    <div>
      <Header/>

        <div className={styles.wrapper}>
        <Sidebar/>
          <main>
           {posts.map(post => {
            
            /*  para solucuionar o problema introduziu o Key*/
            return <Post
            key={post.id} 
            author={post.author}
            content = {post.content}
            publishedAt = {post.publishedAt}
            />
           })}
          </main>
        </div>
    </div>
  )
}

export default App
