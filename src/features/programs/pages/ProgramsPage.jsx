import Month4Section from '../components/Month4Section';
import Month9Section from '../components/Month9Section';
import ProgramsHeroSection from '../components/ProgramsHeroSection';
const ProgramsPage = () => {
  return (
    <>
      <main className="w-full bg-background text-foreground">
        <ProgramsHeroSection></ProgramsHeroSection>
        <Month9Section></Month9Section>
        <Month4Section></Month4Section>
      </main>
    </>
  );
};

export default ProgramsPage;
