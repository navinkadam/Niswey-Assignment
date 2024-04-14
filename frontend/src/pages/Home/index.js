import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./home.css";
import { useSelector } from "react-redux";
import { getAllContact } from "../../redux-store/reducers/Contact";

import TableHead from "./Table/TableHead";
import Pagination from "./Table/Pagination";
import TableRow from "./Table/TableRow";

const limit = 20;
const Home = () => {
  const dispatch = useDispatch();
  const [pageNum, setPage] = useState(1);
  const { lists, hasNext } = useSelector((state) => state.contact);

  useEffect(() => {
    refetchData();
  }, [pageNum]);

  const refetchData = () => {
    const skip = (pageNum - 1) * limit;
    dispatch(getAllContact({ take: limit, skip: skip }));
  };

  const onNext = () => {
    setPage(pageNum + 1);
  };
  const onPrevious = () => {
    setPage(pageNum - 1);
  };

  return (
    <div className="home-container">
      <div className="card-container">
        <div class="-m-1.5 overflow-x-auto flex">
          <div class="p-1.5 min-w-[80%] m-auto inline-block align-middle">
            <div className="border rounded-lg shadow overflow-hidden bg-white max-h-[75vh] overflow-y-scroll overflow-x-scroll md:overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 ">
                <TableHead />
                <tbody className="divide-y divide-gray-200">
                  {lists?.map((data, index) => (
                    <TableRow
                      data={data}
                      key={index}
                      refetchData={refetchData}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            {lists.length ? (
              <Pagination
                hasNext={hasNext}
                page={pageNum}
                hasPrevious={pageNum === 1}
                onPrevious={onPrevious}
                onNext={onNext}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
