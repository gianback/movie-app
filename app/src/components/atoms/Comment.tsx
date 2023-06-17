import { formatTime } from "../../utilities/utils";

interface CommentProps {
  qualification: number;
  content: string;
  date: Date;
}

export function Comment({ content, date, qualification }: CommentProps) {
  return (
    <li className="flex justify-between gap-4">
      <div>
        <p className="text-white text-3xl ">{"⭐".repeat(qualification)}</p>
        <p className="text-white text-3xl ">{content}</p>
      </div>
      <p className="text-white text-3xl flex-shrink-0 ">
        {formatTime(date.toString())}
      </p>
    </li>
  );
}
