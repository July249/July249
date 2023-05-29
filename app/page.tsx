import Posts from './components/Posts';
import MyProfilePic from './components/MyProfilePic';

export const revalidate = 86400;

export default function Home() {
  return (
    <div className='mx-auto'>
      <MyProfilePic />
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
        👋&nbsp; Welcome,&nbsp;
        <span className='whitespace-nowrap'>
          I am <span className='font-bold'>Jibro</span>
        </span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}
