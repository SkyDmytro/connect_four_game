'use client';

import Field from '@/components/Field';
import { useField } from '@/hooks/useField';
import { TextMessage } from '@/types/apiTypes';
import React, { useEffect, useState, useRef } from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  const [isConnected, setIsConnected] = useState(false);
  const { updateField } = useField();
  //TODO: delete any
  const socketRef = useRef<any>(null);

  const handleSend = (message: TextMessage) => {
    socketRef.current.send(JSON.stringify(message));
  };
  useEffect(() => {
    if (socketRef.current) {
      return;
    }

    socketRef.current = new WebSocket(`ws://localhost:4000`);

    socketRef.current.onopen = () => {
      console.log('Connected to WebSocket');
      socketRef.current.send(
        JSON.stringify({ type: 'join_channel', channelId: params.id })
      );
      setIsConnected(true);
    };
    //TODO: delete any
    socketRef.current.onmessage = (event: any) => {
      const data = JSON.parse(event.data);

      console.log('Received:', data);
    };

    socketRef.current.onclose = () => {
      console.log('Disconnected from WebSocket');
      setIsConnected(false);
      socketRef.current = null;
    };

    // return () => {
    //   if (socketRef.current) {
    //     socketRef.current.close();
    //   }
    // };
  }, [params.id]);

  return (
    <div>
      {params.id}{' '}
      {isConnected ? (
        <Field gameId={params.id} onSend={handleSend} />
      ) : (
        'Connecting...'
      )}
    </div>
  );
};

export default Page;
