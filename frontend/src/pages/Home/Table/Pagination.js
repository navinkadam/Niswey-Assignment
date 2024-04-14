import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

function Pagination(props) {
  return (
    <>
      <section className="mt-2 flex items-center gap-2 justify-center">
        <button
          className="p-3 "
          disabled={props.hasPrevious}
          onClick={props.onPrevious}
        >
          <MdNavigateBefore
            size={28}
            color={props.hasPrevious ? "#ccc" : "#5e5a5a"}
          />
        </button>
        <p className="flex h-10 w-10 items-center justify-center rounded-full border bg-blue-600 text-center text-white">
          {props.page}
        </p>
        <button
          className="p-3 "
          disabled={!props.hasNext}
          onClick={props.onNext}
        >
          <MdNavigateNext
            size={28}
            color={!props.hasNext ? "#ccc" : "#5e5a5a"}
          />
        </button>
      </section>
    </>
  );
}
export default Pagination;
