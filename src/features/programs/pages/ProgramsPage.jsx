import Month9Section from '../components/Month9Section';
import ProgramsHeroSection from '../components/ProgramsHeroSection';
const ProgramsPage = () => {
  return (
    <>
      <main className="w-full bg-background text-foreground">
        <ProgramsHeroSection></ProgramsHeroSection>
        <Month9Section></Month9Section>
      </main>
    </>
  );
};

export default ProgramsPage;
