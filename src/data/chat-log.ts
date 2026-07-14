export interface Message {
  role: 'user' | 'gemini';
  text: string;
}

export const chatLog: Message[] = [
  {
    role: 'user',
    text: 'これはテストです'
  },
  {
    role: 'gemini',
    text: 'フォルダが復活しました！'
  }
];
