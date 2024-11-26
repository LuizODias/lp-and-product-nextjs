import {
  ListPostsSkeleton,
  postTypes,
  SectionPost,
  Span,
  useDefaultContext,
  useGetModels,
} from "@/shared";
import React, { useEffect, useState } from "react";

export const Posts = () => {
  const { status, loading: loadingPost } = useGetModels();
  const [posts, setPosts] = useState<postTypes[]>([])

  useEffect(() => {

    if (!loadingPost) {
      for (var i = status.length - 1; i >= 3; i--) {
        status.splice(Math.floor(Math.random() * status.length), 1);
      }

      setPosts(status)
    }
  }, [loadingPost, posts, status])

  return (
    <div className="mt-6 w-full border-t-[1px] border-t-offblack pt-6 gap-6">
      <div className="flex flex-row justify-between">
        <Span text="Acompanhe nosso conteúdo" size="large" weight="semibold" />
      </div>

      <div className="flex flex-row sm:flex-col w-full justify-between mt-6 gap-4">
        {!loadingPost && posts.length ? (
          posts.map((item: postTypes, index: React.Key) => {
            return <SectionPost generic={true} key={index} post={item} />;
          })
        ) : (
          <ListPostsSkeleton />
        )}
      </div>
    </div>
  );
};
