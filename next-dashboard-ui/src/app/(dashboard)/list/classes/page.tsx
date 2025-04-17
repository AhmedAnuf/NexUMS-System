import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, classesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Classes = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class Names",
    accessor: "name",
    className: "hidden md:table-cell",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden lg:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden lg:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ClassListPage = () => {
  const renderRow = (item: Classes) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-nexPurpleLight"
    >
      <td className="hidden md:table-cell py-4">{item.name}</td>
      <td className="hidden md:table-cell py-4">{item.capacity}</td>
      <td className="hidden md:table-cell py-4">{item.grade}</td>
      <td className="hidden md:table-cell py-4">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/lecturers/${item.id}`}>
            <button className="w-5 h-5 flex items-center justify-center rounded-full bg-black">
              <Image src="/edit.png" alt="" width={18} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-nexLightSky">
              <Image src="/delete.png" alt="" width={14} height={14} />
            </button>
          )} */}
          <>
            <FormModal table="class" type="update" data={item} />
            <FormModal table="class" type="delete" id={item.id} />
          </>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-nexYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-nexYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-nexYellow">
              //   <Image src="/plus.png" alt="" width={14} height={14} />
              // </button>
              <FormModal table="class" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ClassListPage;
