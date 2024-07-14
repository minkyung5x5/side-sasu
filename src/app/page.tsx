import { Button } from "antd";
import Image from 'next/image';
import OnborderSVG from '../img/Onboarder.svg'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center h-screen bg-indigo-100">
      <div className="relative w-full md:max-w-4xl flex items-center flex-col bg-indigo-50">
        <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-center space-y-20">
          <Image className="w-full mx-auto" src={OnborderSVG} alt="logo" />
          <p className="text-center whitespace-pre-wrap">
            {'환영합니다!\n 온보딩을 도와드릴 AI 챗봇, \'온보더\'입니다. \n 함께 온보딩해볼까요? '}
          </p>
        </div>
        <div className="h-max p-4 w-full md:w-80">
          <Link className="w-full" href="/onboarder">
            <Button className="w-full" type="primary" size="large">{'시작하기'}</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
