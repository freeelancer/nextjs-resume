import { PrivateField, contactDetail, personal } from '@content';
import { IdentificationIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';

interface ContactInformationProps {
  privateInformation?: PrivateField[];
}

export const ContactInformation: React.FC<ContactInformationProps> = () => {
  return (
    <article>
      <SectionHeading
        Icon={IdentificationIcon}
        level={3}
        text="Contact Information"
      />

      <ul className="mt-2">
        <li>
          <strong>Location:</strong> {personal.location}
        </li>
        <li className="mt-2">
          <strong>Email:</strong>{' '}
          <a href={`mailto:${contactDetail.email}`}>{contactDetail.email}</a>
        </li>
        <li className="mt-2">
          <strong>Telegram:</strong>{' '}
          <a href={`https://t.me/${contactDetail.telegram}`}>
            {contactDetail.telegram}
          </a>
        </li>
        <li className="mt-2">
          <strong>Linkedin:</strong>{' '}
          <a href={`https://linkedin.com/in/${contactDetail.linkedin}`}>
            {contactDetail.linkedin}
          </a>
        </li>
      </ul>
    </article>
  );
};
