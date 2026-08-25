import {
  ClipboardList,
  RefreshCw,
  Server,
  Terminal,
  WifiOff,
  type LucideIcon,
} from "lucide-react";

import { problems } from "../../data/problems";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

const ICONS: Record<string, LucideIcon> = {
  ClipboardList,
  Server,
  RefreshCw,
  WifiOff,
  Terminal,
};

const Problems = () => {
  return (
    <Section
      id="problems"
      index="01"
      label="Problems I solve"
      title="If one of these sounds like you, that's the conversation to have."
      lede="I don't sell frameworks — I take a real operational problem, model it properly, and ship something a team uses. Here's what that's looked like."
    >
      <ol className="grid-12">
        {problems.map((item, index) => {
          const Icon = ICONS[item.icon];
          return (
            <li
              key={item.slug}
              className="col-span-4 md:col-span-4 lg:col-span-6"
            >
              <Reveal
                delay={(index % 2) * 0.05}
                className="h-full border-t border-rule pt-6"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center border border-border text-accent"
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  <div className="min-w-0">
                    <p className="eyebrow">
                      <span className="text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </p>
                    <h3 className="mt-1.5 text-[1.0625rem] font-semibold leading-snug text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {item.problem}
                </p>

                <dl className="mt-5 border-l border-border pl-4">
                  <dt className="eyebrow">Approach</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.approach}
                  </dd>

                  <dt className="eyebrow mt-4 text-accent">Evidence</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
                    {item.result}
                  </dd>
                </dl>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
};

export default Problems;
