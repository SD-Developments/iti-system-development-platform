import FAQ from '../components/FAQ';
import Month4Section from '../components/Month4Section';
import Month9Section from '../components/Month9Section';
import Outcomes from '../components/Outcomes';
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
        <Outcomes></Outcomes>
        <FAQ></FAQ>
      </main>
    </>
  );
};

export default ProgramsPage;
