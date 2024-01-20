import "@/app/_styles/components/atoms/_divider.scss";

interface DividerProps {
  content?: string;
  noContent?: boolean;
}

export const Divider = (props: DividerProps) => {
  return (
    <div className="__divider">
      {!props.noContent && <h3>{props.content}</h3>}
      <hr />
    </div>
  );
};
