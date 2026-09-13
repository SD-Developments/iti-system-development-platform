import Month4Section from '../components/Month4Section';
import Month9Section from '../components/Month9Section';
import ProgramsArchSection from '../components/ProgramsArchSection';
import ProgramsHeroSection from '../components/ProgramsHeroSection';
import SummerSection from '../components/SummerSection';
const ProgramsPage = () => {
  return (
    <>
      <main className="w-full bg-background text-foreground">
        <ProgramsHeroSection></ProgramsHeroSection>
        <Month9Section></Month9Section>
        <Month4Section></Month4Section>
        <SummerSection></SummerSection>
        <ProgramsArchSection></ProgramsArchSection>
      </main>
    </>
  );
};

export default ProgramsPage;
