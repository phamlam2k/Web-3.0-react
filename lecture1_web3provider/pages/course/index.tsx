import { Hero, KeyPoint, Lecture, Modal } from "@components/course";
import { BaseLayout } from "@components/layout";
import { NextPage } from "next";

const Course: NextPage = () => {
  return (
    <BaseLayout>
      <Hero />
      <KeyPoint />
      <Lecture />
      <Modal />
    </BaseLayout>
  );
};

export default Course;
