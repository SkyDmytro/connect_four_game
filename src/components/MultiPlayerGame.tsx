'use client';

import { generateUrlWithId } from '@/utils/functions';
import Link from 'next/link';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopyIcon from '../assets/copy-svgrepo-com.svg';
import Image from 'next/image';
import { json } from 'stream/consumers';
import { useAppDispatch } from '@/redux/store';
import { initializeUser, userStateType } from '@/redux/userSlice';
import { ChannelCreatedResponse } from '@/types/apiTypes';

export const MultiPlayerGame = () => {
  const [generatedUrl, setGeneratedUrl] = useState<null | string>(null);
  const [copyStatus, setCopyStatus] = useState(false);
  const dispatch = useAppDispatch();
  const handleCreateRoom = () => {
    const newId = generateUrlWithId();
    const newUrl = location.href + '/' + newId;
    const ws = new WebSocket(`ws://localhost:4000`);
    ws.onopen = () => {
      console.log('Connected to WebSocket');
      ws.send(JSON.stringify({ type: 'create_channel', channelId: newId }));
    };
    ws.onmessage = (e) => {
      const { userId, color }: ChannelCreatedResponse = JSON.parse(e.data);
      const newUser: userStateType = { color, userId };
      dispatch(initializeUser(newUser));
    };
    setGeneratedUrl(newUrl);
  };

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  return (
    <div className="z-100 absolute bg-white size-64 border text-black p-3">
      <div className="upper-container flex flex-col gap-2 justify-center items-center mb-2">
        <span>MultiPlayerGame</span>
        <button className="bg-teal-300 p-2 w-full" onClick={handleCreateRoom}>
          Create room
        </button>
      </div>
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
              <Image src={CopyIcon} className="size-6" alt="copy" />
            </CopyToClipboard>
          </div>
          {copyStatus && (
            <p>
              Text copied to clipboard!
              <br /> Send to your friend
            </p>
          )}
        </>
      )}
    </div>
  );
};
