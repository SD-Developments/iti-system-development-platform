import JourneyItem from '@/components/JourneyItem';
import { BookOpen, Lightbulb, Rocket, Users } from 'lucide-react';
import img2 from '../../../assets/images/hero1.png';
import { Badge } from '@/components/ui/badge';
import { activities } from '@/constants';
import SectionHeader from '@/components/SectionHeader';
function LifeSection() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-[90%] max-w-7xl">
          <SectionHeader
            eyebrow="The Community"
            title="Life Inside SD"
            description="Learning happens beyond lectures — through collaboration, workshops, competitions, industry exposure, and shared experiences."
            action="Explore Activities"
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
            {/* Large image */}
            <article className="group relative min-h-107.5 overflow-hidden rounded-3xl lg:col-span-7">
              <img
                src={img2}
                alt="SD students collaborating"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-sd-navy via-sd-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-sd-white lg:p-8">
                <Badge>Together at SD</Badge>
                <h3 className="mt-2 text-3xl font-extrabold">Learn together. Build together.</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-sd-white/70">
                  Collaboration is part of the learning experience — from labs and project teams to
                  technical communities.
                </p>
              </div>
            </article>

            {/* Activity cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5">
              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <article
                    key={activity.title}
                    className="group overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    <div className="relative h-36 overflow-hidden bg-secondary">
                      <img
                        src={img2}
                        alt={activity.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute left-4 top-4 rounded-xl bg-card/90 p-2 text-primary shadow-sm backdrop-blur">
                        <Icon size={18} />
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="font-bold text-card-foreground">{activity.title}</h4>

                      <p className="mt-2 text-xs leading-5 text-muted-foreground">
                        {activity.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Journey */}
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            <JourneyItem
              number="01"
              icon={<BookOpen size={22} />}
              title="Learn"
              text="Build strong technical foundations."
            />

            <JourneyItem
              number="02"
              icon={<Lightbulb size={22} />}
              title="Build"
              text="Turn knowledge into working solutions."
            />

            <JourneyItem
              number="03"
              icon={<Users size={22} />}
              title="Collaborate"
              text="Work with peers, instructors, and teams."
            />

            <JourneyItem
              number="04"
              icon={<Rocket size={22} />}
              title="Ship"
              text="Deliver projects with real impact."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default LifeSection;
