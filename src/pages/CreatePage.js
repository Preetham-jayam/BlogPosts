import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../config";
export const CreatePage = () => {
  const navigate = useNavigate();
  useTitle("Create Post");
  const postRef = collection(db, "blogs");

  async function createPostHandler(event) {
    event.preventDefault();

    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    };
    await addDoc(postRef, document);
    navigate("/");
  }
  return (
    <section className="create" onSubmit={createPostHandler}>
      <div className="heading">
        <h1>Create a new Post</h1>
      </div>
      <form className="createPost">
        <input
          type="text"
          className="title"
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />
        <textarea
          type="text"
          name="description"
          className="description"
          placeholder="Description"
          maxLength="600"
          required
        ></textarea>
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};
