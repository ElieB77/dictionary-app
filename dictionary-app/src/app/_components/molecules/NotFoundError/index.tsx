/* eslint-disable react/no-unescaped-entities */
import "@/app/_styles/components/molecules/_not-found-error.scss";

interface NotFoundErrorProps {
  word?: string;
}

export const NotFoundError = (props: NotFoundErrorProps) => {
  return (
    <div className="__not_found_error">
      <span>😕</span>
      <h3>No results found for {props.word}</h3>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};
