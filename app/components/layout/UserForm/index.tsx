'use client';
import { DefaultSession } from 'next-auth';

type Props = {
  user: DefaultSession['user'];
};

export default function UserForm({ user }: Props) {
  return (
    <div className="card-body">
      <div className="flex flex-col items-center justify-center">
        <h5 className="">ログイン情報</h5>
        <div className="divider text-xs"></div>
        <span
          style={{
            backgroundImage: `url('${user?.image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '80px 80px',
            width: 85,
            height: 85,
          }}
        />
      </div>
      <div className="flex">
        <h5 className="text-[12px] w-[4em] tracking-widest">User:</h5>
        <span className="text-[12px]">{user?.name}</span>
      </div>
      <div className="flex">
        <h5 className="text-[12px] w-[4em] tracking-widest">Mail:</h5>
        <span className="text-[12px]">{user?.email}</span>
      </div>
    </div>
  );
}
