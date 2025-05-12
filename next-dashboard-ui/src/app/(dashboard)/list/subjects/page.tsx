import FormContainer from "@/components/FormContainer";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { subjectsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Parent = {
  id: number;
  name: string;
  lecturers: string[];
};

const columns = [
  {
    header: "Subject Names",
    accessor: "name",
    className: "hidden md:table-cell",
  },
  {
    header: "Lecturers",
    accessor: "lecturer",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

<<<<<<< Updated upstream
const SubjectsListPage = () => {
  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-nexPurpleLight"
    >
      <td className="hidden md:table-cell py-4">{item.name}</td>
      <td className="hidden md:table-cell py-4">{item.lecturers.join(",")}</td>
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
            <FormModal table="student" type="update" data={item} />
            <FormModal table="student" type="delete" id={item.id} />
          </>
        </div>
      </td>
    </tr>
  );
=======
const renderRow = (item: SubjectList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-nexPurpleLight"
  >
    <td className="hidden md:table-cell py-4">{item.name}</td>
    <td className="hidden md:table-cell py-4">
      {item.lecturers.map((lecturer) => lecturer.name).join(",")}
    </td>
    <td>
      <div className="flex items-center gap-2">
        <>
          <FormContainer table="subject" type="update" data={item} />
          <FormContainer table="subject" type="delete" id={item.id} />
        </>
      </div>
    </td>
  </tr>
);

const SubjectsListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;

  // Skipping pages in pagination
  const p = page ? parseInt(page) : 1;

  // URL PARAMS CONDITION

  const query: Prisma.SubjectWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.subject.findMany({
      where: query,
      include: {
        lecturers: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.subject.count({ where: query }),
  ]);
>>>>>>> Stashed changes

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
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
<<<<<<< Updated upstream
              // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-nexYellow">
              //   <Image src="/plus.png" alt="" width={14} height={14} />
              // </button>
              <FormModal table="subject" type="create" />
=======
              <FormContainer table="subject" type="create" />
>>>>>>> Stashed changes
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default SubjectsListPage;
