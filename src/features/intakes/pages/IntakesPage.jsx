import Seo from '@/components/Seo';
import { PAGE_SEO } from '@/lib/seo';

const IntakesPage = () => {
  return (
    <>
      <Seo {...PAGE_SEO.intakes} />
      <h1 className="bg-violet-400 text-black w-3 mx-auto my-5">Intakes Page</h1>
    </>
  );
};

export default IntakesPage;
