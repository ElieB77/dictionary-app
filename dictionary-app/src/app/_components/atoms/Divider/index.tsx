import "@/app/_styles/components/atoms/_divider.scss";

interface DividerProps {
  content?: string;
}

export const Divider = (props: DividerProps) => {
  return (
    <div className="__divider">
      <h3>{props.content}</h3>
      <hr />
    </div>
  );
};
