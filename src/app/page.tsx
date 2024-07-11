import Chat from '../../components/chat';

export default function Home() {
  return (
    <main className="flex h-screen bg-violet-50">
      <div className="w-1/4 border-r-2 border-violet-600">
        <div className="h-20 p-4 border-b-2 border-violet-300 flex items-center">
          <div className="text-xl font-bold">{'Messages'}</div>
        </div>
        <div className="flex flex-col divide-y divide-violet-300">
          <div className="px-4 py-6 text-lg">{'온보딩'}</div>
          <div className="px-4 py-6 text-lg">{'기획자'}</div>
          <div className="px-4 py-6 text-lg">{'디자이너'}</div>
          <div className="px-4 py-6 text-lg">{'개발자'}</div>
        </div>
      </div>
      <div className="w-1/2 border-r-2 border-violet-600">
        <Chat />
      </div>
      <div className="w-1/4">
        <div className="h-20 p-4 border-b-2 border-violet-300 flex items-center">
          <div className="text-xl font-bold">{'Track your progress'}</div>
        </div>
      </div>
    </main>
  );
}
