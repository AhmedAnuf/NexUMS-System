import prisma from "@/lib/prisma";
import FormModal from "./FormModal";
import { auth } from "@clerk/nextjs/server";

export type FormContainerProps = {
  table:
    | "lecturer"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number | string;
};

const FormContainer = async ({ table, type, data, id }: FormContainerProps) => {
  let relatedData = {};

  //   const { userId, sessionClaims } = auth();
  //   const role = (sessionClaims?.metadata as { role?: string })?.role;
  //   const currentUserId = userId;

  if (type !== "delete") {
    switch (table) {
      case "subject":
        const subjectLecturers = await prisma.lecturer.findMany({
          select: { id: true, name: true, surname: true },
        });
        relatedData = { lecturers: subjectLecturers };
        break;
      //   case "class":
      //     const classGrades = await prisma.grade.findMany({
      //       select: { id: true, level: true },
      //     });
      //     const classLecturers = await prisma.lecturer.findMany({
      //       select: { id: true, name: true, surname: true },
      //     });
      //     relatedData = { lecturers: classLecturers, grades: classGrades };
      //     break;
      //   case "lecturer":
      //     const lecturerSubjects = await prisma.subject.findMany({
      //       select: { id: true, name: true },
      //     });
      //     relatedData = { subjects: lecturerSubjects };
      //     break;
      //   case "student":
      //     const studentGrades = await prisma.grade.findMany({
      //       select: { id: true, level: true },
      //     });
      //     const studentClasses = await prisma.class.findMany({
      //       include: { _count: { select: { students: true } } },
      //     });
      //     relatedData = { classes: studentClasses, grades: studentGrades };
      //     break;
      //   case "exam":
      //     const examLessons = await prisma.lesson.findMany({
      //       where: {
      //         ...(role === "lecturer" ? { lecturerId: currentUserId! } : {}),
      //       },
      //       select: { id: true, name: true },
      //     });
      //     relatedData = { lessons: examLessons };
      //     break;

      default:
        break;
    }
  }

  return (
    <div className="">
      <FormModal
        table={table}
        type={type}
        data={data}
        id={id}
        relatedData={relatedData}
      />
    </div>
  );
};

export default FormContainer;
