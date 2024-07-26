'use client';

import Field from '@/components/Field';
import React, { useEffect, useState, useRef } from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  const [isConnected, setIsConnected] = useState(false);
  //TODO: delete any
  const socketRef = useRef<any>(null);

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
      {params.id} {isConnected ? <Field server={socketRef} /> : 'Connecting...'}
    </div>
  );
};

export default Page;
