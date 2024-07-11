import { Button } from 'antd'; // 예시로 antd의 Button을 import

export default function Home() {
  return (
    <main className="grid grid-cols-4 min-h-screen bg-indigo-50">
      <div className="col-span-1 border-r-2 border-indigo-600">
        <div className="h-20 p-4 border-b-2 border-indigo-300 flex items-center justify-between">
          <div className="text-xl font-bold">Messages</div>
          <Button>{'hi'}</Button>
        </div>
        <div className="flex flex-col divide-y divide-indigo-300">
          <div className="px-4 py-6 text-lg">온보딩</div>
          <div className="px-4 py-6 text-lg">기획자</div>
          <div className="px-4 py-6 text-lg">디자이너</div>
          <div className="px-4 py-6 text-lg">개발자</div>
        </div>
      </div>
      <div className="col-span-2 border-r-2 border-indigo-600">
        <div className="h-20 p-4 border-b-2 border-indigo-300 flex items-center">
          <div className="text-xl font-bold">Onboarding</div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="h-20 p-4 border-b-2 border-indigo-300 flex items-center">
          <div className="text-xl font-bold">Track your progress</div>
        </div>
      </div>
    </main>
  );
}
