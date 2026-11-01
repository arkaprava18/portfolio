import { Helmet } from 'react-helmet-async';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectGrid } from '../features/projects/ProjectGrid';
import { projects } from '../data/projects';
import { profile } from '../data/profile';

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | {profile.name}</title>
        <meta
          name="description"
          content={`Projects delivered by ${profile.name}, spanning e-commerce, content platforms, and internal tools.`}
        />
      </Helmet>
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Project Archive"
            subtitle="Each project highlights a complete workflow: from data modeling to scalable UI delivery."
          />
          <div className="mt-10">
            <ProjectGrid projects={projects} />
          </div>
        </Container>
      </section>
    </>
  );
}
