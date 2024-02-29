import "../App.css";
import React, { useRef, useEffect, useState} from "react";
import dayjs from "dayjs";
import axios from "axios";

const CurrentProfile = () => {
  // const axios = require('axios');
  const [profile, setProfile] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const profileRef = useRef(null);
  const postsRef = useRef(null);

  const getData = async () => {
    const profileResponse = await axios.get('/api/social/current-profile/');
    setProfile(profileResponse.data);

    const postsResponse = await axios.get('/api/social/view-my-posts/');
    setPosts(postsResponse.data);

    console.log(profileResponse.data);
    console.log(postsResponse.data);
  };

  return (
    <div>
      <div className="md:h-screen pt-10" ref={profileRef}>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-5'>
          <div className="md:w-2/4 w-10/12 mx-auto mt-10 mb-3">
            <h1 className="text-5xl mb-3">{profile?.username}</h1>
            <p className="text-2xl text-cyan-900 ml-2">{profile?.bio}</p>
          </div>
        </div>
      </div>
      <div className="md:h-screen pt-10" ref={postsRef}>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-5'>
          {posts?.results?.map((post) => (
            <div key={post.uuid} className="md:w-2/4 w-10/12 mx-auto mt-10 mb-3">
              <img width={300} src={post.content} alt={"Post Content"}/>
              {/*{post?.liked_by?.map((l) => (*/}
              {/*  <p className="text-2xl text-cyan-900 ml-2">{post?.liked_by}</p>*/}
              {/*))*/}
              <p className="text-2xl text-cyan-900 ml-2">{post?.liked_by}</p>
              <p className="text-2xl text-cyan-900 ml-2">{dayjs(post?.created_at).format("DD MMMM YYYY")}</p>
              {post?.comments?.map((comment) => (
                <p key={comment.id} className="text-2xl text-cyan-900 ml-2">{comment.username} {comment.comment}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentProfile;
