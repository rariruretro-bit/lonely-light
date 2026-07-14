export interface Message {
  role: 'user' | 'gemini';
  text: string;
}

export const chatLog: Message[] = [
  {
    role: 'user',
    text: 'テストメッセージです'
  },
  {
    role: 'gemini',
    text: 'テストメッセージです'
  }
];
