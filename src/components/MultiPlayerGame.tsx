'use client';

import { generateUrlWithId } from '@/utils/functions';
import Link from 'next/link';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopyIcon from '../assets/copy-svgrepo-com.svg';
import Image from 'next/image';

export const MultiPlayerGame = () => {
  const [generatedUrl, setGeneratedUrl] = useState<null | string>(null);
  const [copyStatus, setCopyStatus] = useState(false);
  const handleCreateRoom = () => {
    const newUrl = location.href + '/' + generateUrlWithId();
    console.log(newUrl);
    setGeneratedUrl(newUrl);
  };

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  const handleNavigateToRoom = () => {};

  return (
    <div className="z-100 absolute bg-white size-48 border text-black ">
      <span>MultiPlayerGame</span>
      <button className="bg-teal-300 p-2" onClick={handleCreateRoom}>
        Create room
      </button>
      {generatedUrl && (
        <>
          <div className="w-full flex gap-2 flex-1 ">
            <Link
              className="flex text-teal-300 underline truncate flex-1"
              href={generatedUrl}
            >
              {generatedUrl}
            </Link>
            <CopyToClipboard text={generatedUrl} onCopy={onCopyText}>
              {/* <CopyIcon /> */}
              <Image src={CopyIcon} className="size-6" alt="copy" />
            </CopyToClipboard>
          </div>
          {copyStatus && <p>Text copied to clipboard! Send to your friend</p>}
        </>
      )}
    </div>
  );
};
