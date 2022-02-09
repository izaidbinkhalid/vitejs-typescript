import * as React from "react";
import Layout from "Components/ProfileLayout";
import Post from "Components/Post";
import PlaceHolderImage from "assets/postImage.jpg";
import ProfileImg from "assets/profile.jpg";

export const PostPage: React.FC = () => {
  const posts = [
    {
      title:
        "I am Iron Man and i am the only avenger died in Infinity war I am Iron Man and",
      image: [PlaceHolderImage],
      author: {
        image: ProfileImg,
        name: "Saad Bin Khalid",
        title: "CEO of Nothing"
      }
    }
  ];
  return (
    <Layout>
      <div>
        <div>
          {posts?.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              image={post.image}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
