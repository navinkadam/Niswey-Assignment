export default function TableHead({ params }) {
  return (
    // <thead className="text-lg text-gray-700 uppercase bg-gray-50 ">
    //   <tr>
    //     <th scope="col" className="px-6 py-3">
    //       First Name
    //     </th>
    //     <th scope="col" className="px-6 py-3">
    //       Last Name
    //     </th>
    //     <th scope="col" className="px-6 py-3">
    //       Phone Number
    //     </th>
    //     <th scope="col" className="px-6 py-3">
    //       Action
    //     </th>
    //   </tr>
    // </thead>
    <thead className="bg-gray-50 sticky top-0">
      <tr>
        <th
          scope="col"
          className="px-6 py-3 text-start text-md font-bold text-gray-500 uppercase "
        >
          First Name
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-start text-md font-bold text-gray-500 uppercase "
        >
          Last Name
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-start text-md font-bold text-gray-500 uppercase "
        >
          Phone
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-end text-md font-bold text-gray-500 uppercase "
        >
          Action
        </th>
      </tr>
    </thead>
  );
}
