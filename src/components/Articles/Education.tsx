import { AcademicCapIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { sortedEducation } from 'src/helpers/utils';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import EducationItem from './EducationItem';

const Education: React.FC = () => {
  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading Icon={AcademicCapIcon} level={2} text="Education" />
        </div>

        {sortedEducation.map((education) => (
          <EducationItem key={education._id} {...education} />
        ))}
      </div>
    </article>
  );
};

export default Education;
