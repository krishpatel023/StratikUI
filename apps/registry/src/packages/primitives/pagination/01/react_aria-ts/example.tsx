import { Pagination } from "@registry/packages/primitives/pagination/01/react_aria-ts/Pagination";

export default function PaginationImplementation() {
  return (
    <div className="w-full flex justify-center">
      <Pagination initialPage={1} totalPage={10} />
    </div>
  );
}
