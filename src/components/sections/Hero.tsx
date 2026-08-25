import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

import { site } from "../../data/site";
import { EASE } from "../../lib/motion";
import { Button } from "../ui/button";

const CORE_STACK = [
  "React",
  "Next.js",
  "Vue.js",
  "NestJS",
  "ASP.NET Core",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
];

/**
 * Three numbers that back the headline, each drawn from the work below —
 * they also square the left column against the spec sheet on the right.
 */
const PROOF = [
  { figure: "90%+", note: "edge-case coverage on POS payment logic" },
  { figure: "4", note: "independent services behind BidDrive" },
  { figure: "~30%", note: "faster offline-sync delivery at SPCI" },
];

/** Read as a spec sheet: label left, value right, one rule per row. */
const SPECS = [
  { label: "Role", value: "Software Engineer" },
  { label: "Based", value: "Lebanon · Remote" },
  { label: "Focus", value: "POS · CRM · Field ops" },
  { label: "Shipping since", value: "2023" },
];

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const rise = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: EASE },
        };

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="grid-paper pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="shell relative pb-16 pt-28 sm:pb-20 sm:pt-32">
        {/* Status line — the first thing read, and the only claim that decays. */}
        <motion.p {...rise(0)} className="eyebrow flex items-center gap-2.5">
          <span className="status-dot" aria-hidden="true" />
          <span className="text-foreground">{site.availability}</span>
        </motion.p>

        <div className="grid-12 mt-8 items-end sm:mt-10">
          <motion.h1
            {...rise(0.06)}
            className="display-xl col-span-4 text-[clamp(1.9375rem,7.2vw,5.25rem)] md:col-span-8 lg:col-span-9"
          >
            {/* Each clause is its own block so the line break is intentional
                at every width — at 375px "a business runs on" still fits. */}
            <span className="block">I build the systems</span>
            <span className="block">a business runs on</span>
            <span className="block font-sans text-[0.3em] font-normal normal-case leading-snug tracking-normal text-muted-foreground sm:text-[0.26em]">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-accent" />
              not demos of one
            </span>
          </motion.h1>
        </div>

        <div className="grid-12 mt-14 sm:mt-16">
          <motion.div {...rise(0.12)} className="col-span-4 md:col-span-5 lg:col-span-6">
            <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
              Software engineer in Lebanon, two years turning operational
              problems into production software: a POS order engine processing
              live transactions, a CRM's offline sync, an inventory system a
              warehouse team actually uses. React and Vue on the front, NestJS
              and ASP.NET Core on the back, shipped with Docker and Kubernetes.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href="#work">
                  View the work
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Start a project</a>
              </Button>
              <Button asChild variant="link" size="sm">
                <a href={site.resume} download>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Résumé
                </a>
              </Button>
            </div>

            <dl className="mt-10">
              {PROOF.map((item) => (
                <div
                  key={item.figure}
                  className="flex items-baseline gap-4 border-t border-border py-2.5"
                >
                  <dt className="display w-16 shrink-0 text-[1.375rem] text-accent">
                    {item.figure}
                  </dt>
                  <dd className="text-sm leading-snug text-muted-foreground">
                    {item.note}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Spec sheet. Portrait sits above it on mobile, beside it on wide. */}
          <motion.div
            {...rise(0.18)}
            className="col-span-4 md:col-span-3 lg:col-span-5 lg:col-start-8"
          >
            <div className="border border-border bg-card">
              <img
                src="/assets/others/profile.png"
                alt="Portrait of Hussein Nasrallah"
                width={640}
                height={800}
                className="aspect-[4/5] w-full object-cover object-center sm:aspect-[3/2] lg:aspect-[4/3]"
              />
            </div>

            <dl className="mt-6">
              {SPECS.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-baseline justify-between gap-4 border-t border-border py-2.5"
                >
                  <dt className="eyebrow">{spec.label}</dt>
                  <dd className="datum text-right text-foreground">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        {/* Stack ticker, set as a single mono run against a heavy rule. */}
        <motion.div {...rise(0.26)} className="rule mt-16 pt-4 sm:mt-20">
          <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
            <li className="eyebrow mr-2 text-accent">Stack</li>
            {CORE_STACK.map((item, index) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="datum text-muted-foreground">{item}</span>
                {index < CORE_STACK.length - 1 ? (
                  <span className="text-input" aria-hidden="true">
                    /
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
