import "@/app/_styles/components/atoms/_divider.scss";

interface DividerProps {
  content?: string;
}

export const Divider = (props: DividerProps) => {
  return (
    <div className="__divider">
      <p>{props.content}</p>
      <hr />
    </div>
  );
};
