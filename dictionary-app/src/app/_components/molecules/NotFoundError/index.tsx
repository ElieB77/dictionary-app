import "@/app/_styles/components/molecules/_not-found-error.scss";

interface NotFoundErrorProps {
  word?: string;
}

export const NotFoundError = (props: NotFoundErrorProps) => {
  return (
    <div className="__not_found_error">
      <h1>No results found for {props.word}</h1>
    </div>
  );
};
