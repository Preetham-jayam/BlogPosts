import { doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../config";

export const Card = ({post, toggle, setToggle}) => {
  const isLoggedIn=JSON.parse(localStorage.getItem('isLoggedIn'));
  const {id, title, description, author} = post;
  async function deleteHandler(){
    const document = doc(db, "blogs", id);
      await deleteDoc(document);
      setToggle(!toggle);
  }

  return (
    <div className="card">
       <p className="title">{title}</p>
       <p>{description}</p>
       <p className="control">
       <span className="author"><span>Posted by : </span>{author.name}</span>
            { isLoggedIn && (author.id === auth.currentUser.uid) && <span onClick={deleteHandler} className="delete"><i className="bi bi-trash3"></i></span> }
        </p>
    </div>
  )
}
