import "@/app/_styles/components/atoms/_divider.scss";

interface DividerProps {
  content?: string;
  noContent?: boolean;
}

export const Divider = (props: DividerProps) => {
  return (
    <div className="__divider">
      {!props.noContent && <h2>{props.content}</h2>}
      <hr />
    </div>
  );
};
