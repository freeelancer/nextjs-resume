import { DocumentIcon } from '@heroicons/react/24/solid';
import React from 'react';
import ButtonLink from '../Button/ButtonLink';

interface PDFDownloadButtonProps {
  secret?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ secret }) => {
  return (
    // download pdf
    <ButtonLink
      href={
        'https://drive.google.com/file/d/1VnQBG5waCJt01cu-TtDmq5xml6inYFnA/view?usp=drive_link'
      }
      size="lg"
    >
      <DocumentIcon className="h-6" />
      View or Download PDF
    </ButtonLink>
  );
};

export default PDFDownloadButton;
