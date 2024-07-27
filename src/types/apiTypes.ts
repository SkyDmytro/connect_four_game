import { NodeIdxType } from './fieldTypes';

interface CreateChannelMessage {
  type: 'create_channel';
  channelId: string;
}

interface JoinChannelMessage {
  type: 'join_channel';
  channelId: string;
}

interface TextMessage {
  type: 'message';
  channelId: string;
  userId: string;
  text: NodeIdxType;
}

interface ChannelCreatedResponse {
  type: 'channel_created';
  channelId: string;
}

interface JoinedChannelResponse {
  type: 'joined_channel';
  channelId: string;
}

interface ErrorResponse {
  type: 'error';
  message: string;
}

export type {
  ChannelCreatedResponse,
  CreateChannelMessage,
  ErrorResponse,
  JoinChannelMessage,
  JoinedChannelResponse,
  TextMessage
};
