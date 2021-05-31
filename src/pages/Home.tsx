import * as React from 'react';
import { useAtom } from 'jotai';
import { countAtom } from '../store/counter';

export function Home(props: any) {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div className='p-6 max-w-sm mx-auto bg-green-100 rounded-xl shadow-md flex items-center space-x-4'>
      <div>
        <div className='text-xl font-medium text-black'>Home</div>
        <span>{count}</span>
      </div>
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </div>
  );
}
