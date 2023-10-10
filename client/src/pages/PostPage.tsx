import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((res) => {
      res.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, [id]);

  if (!postInfo) return "";

  return (
    <div className="post-page">
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} />
      </div>
      <h1>{postInfo.title}</h1>
      <div dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  );
}
