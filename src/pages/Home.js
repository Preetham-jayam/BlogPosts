import { useState,useEffect,useRef } from 'react';
import {getDocs , collection} from 'firebase/firestore'
import { db } from '../config';
import {Card} from '../components';
import { useTitle } from '../hooks/useTitle';
import { LoadingSkeleton } from '../components';
export const Home = () => {
  const [posts,setPosts]=useState(new Array(3).fill(false));
  const postsRef=useRef(collection(db,'blogs'));
  const [toggle, setToggle] = useState(false);
  useTitle("Home");
  

  useEffect(()=>{
     async function getPosts(){
      const data=await getDocs(postsRef.current);
     setPosts( data.docs.map((document)=>(
        {...document.data(),id:document.id}
      )))
      
     }
     getPosts();
    
  },[postsRef,toggle])
  return (
    
    <section>
      { posts.map((post, index) => (
        post ? (
          <Card key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
        ) : (
          <LoadingSkeleton key={index} />
        )        
      )) }  
     

    </section>
  )
}
