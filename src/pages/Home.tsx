import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';
import { ProjectSlider } from '../features/projects/ProjectSlider';
import { featuredProjects } from '../data/projects';
import { profile } from '../data/profile';
import { skills } from '../data/skills';
import { experience } from '../data/experience';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{profile.name} | Full-Stack Web Developer</title>
        <meta
          name="description"
          content={`${profile.name} - full-stack developer specializing in React, TypeScript, and Node.js.`}
        />
      </Helmet>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_45%),radial-gradient(circle_at_left,_rgba(14,116,144,0.18),_transparent_45%)]" />
        <Container className="relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">Available for projects</p>
            <h1 className="mt-5 text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl text-slate-600 dark:text-slate-300">{profile.title}</p>
            <p className="mt-6 text-base text-slate-600 dark:text-slate-300">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/projects"
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5"
              >
                Explore projects
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-emerald-200 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title="Featured Projects"
            subtitle="Production-grade platforms spanning e-commerce, content, and enterprise workflows."
          />
          <div className="mt-10">
            <ProjectSlider projects={featuredProjects} />
          </div>
        </Container>
      </section>

      <section id="skills" className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Toolkit"
            title="Skills & Technologies"
            subtitle="A balanced mix of front-end craft, backend architecture, and infrastructure."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([group, items], index) => (
              <motion.div
                key={group}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200/50 bg-white/60 backdrop-blur-sm p-6 shadow-sm shadow-slate-200/40 dark:border-slate-800/50 dark:bg-slate-900/40"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                  {group.replace(/^[a-z]/, (char) => char.toUpperCase())}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge key={item} label={item} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section id="experience" className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Experience"
            title="Teams & Impact"
            subtitle="Hands-on delivery across product teams, agencies, and freelance engagements."
          />
          <div className="mt-10 space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.period}`}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200/50 bg-white/70 backdrop-blur-sm p-6 shadow-sm shadow-slate-200/40 dark:border-slate-800/50 dark:bg-slate-900/50"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {item.role}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="py-16">
        <Container>
          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-500 via-teal-500 to-slate-900 p-10 text-white shadow-2xl shadow-emerald-500/40">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/80">Let's build</p>
              <h2 className="text-3xl font-semibold">Ready to ship your next product?</h2>
              <p className="text-sm text-white/80">
                Reach out for full-stack web development, new feature delivery, or production support.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900"
                >
                  {profile.email}
                </a>
                <span className="rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]">
                  {profile.phone}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
