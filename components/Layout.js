import { useRouter } from 'next/router';
import NavBar from './NavBar';
import Seo from './Seo';

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div>
      <Seo title={router.pathname} />
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
