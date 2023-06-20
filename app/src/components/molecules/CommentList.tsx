import React from "react";
import { Comment as IComment } from "../../interfaces/Home";
import { Comment } from "../atoms/Comment";

type CommentListProps = {
  comments: IComment[];
};

export function CommentList({ comments }: CommentListProps) {
  return (
    <>
      {comments.length > 0 ? (
        <ul className="flex flex-col gap-8 mt-8">
          {comments.map(({ _id, content, date, qualification }) => (
            <Comment
              key={_id}
              content={content}
              date={date}
              qualification={qualification}
            />
          ))}
        </ul>
      ) : (
        <p className="uppercase text-3xl xl:text-5xl text-white text-center mt-20">
          Escribe el primer comentario
        </p>
      )}
    </>
  );
}
