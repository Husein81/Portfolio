import { ArrowUpRight, Download, MapPin } from "lucide-react";

import { site, socials } from "../../data/site";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

const Contact = () => {
  return (
    <Section
      id="contact"
      index="07"
      label="Contact"
      title="Have a software problem worth solving?"
      lede="A sentence on what you're building and where it's stuck is enough to start. Email works best, and I read everything that arrives."
    >
      <div className="grid-12">
        <Reveal className="col-span-4 md:col-span-8 lg:col-span-5">
          <a
            href={`mailto:${site.email}`}
            className="link display block break-words py-2.5 text-[clamp(1.25rem,2.2vw,1.75rem)] leading-tight"
          >
            {site.email}
          </a>

          <ul className="mt-6">
            {socials.map((social) => (
              <li
                key={social.label}
                className="border-t border-border first:border-t-0"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-12 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3 transition-colors duration-200"
                >
                  <span className="eyebrow transition-colors duration-200 group-hover:text-accent">
                    {social.label}
                  </span>
                  <span className="datum flex min-w-0 items-center gap-2 text-muted-foreground transition-colors duration-200 group-hover:text-accent">
                    <span className="truncate">{social.handle}</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}

            <li className="flex min-h-12 flex-wrap items-center justify-between gap-x-4 gap-y-1 border-y border-border py-3">
              <span className="eyebrow">Located</span>
              <span className="datum flex min-w-0 items-center gap-2 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {site.location} · Remote friendly
              </span>
            </li>
          </ul>

          <a
            href={site.resume}
            download
            className="mt-7 inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors duration-200 hover:text-accent"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download résumé (PDF)
          </a>
        </Reveal>

        <Reveal
          className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-7"
          delay={0.08}
        >
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
