import { useMemo } from "react";
import FooterColumn from "./Column";
import { columns, rows } from "../../lib/config";
import { highlights, socialIconMap } from "./config";
import Icon from "../icon";
import GradientSphere from "../GradientSphere";

const Footer = () => {
  const navigationColumns = columns.filter((column) => column.id !== "3");
  const socialLinks = rows.filter((row) => row.columnId === "3");

  const rowsForColumn = useMemo(
    () => (column: Column) => rows.filter((row) => row.columnId === column.id),
    []
  );

  return (
    <footer className="relative overflow-hidden bg-primary pt-24 pb-12 text-gray-300">
      <GradientSphere />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/25 backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
            <div className="relative space-y-6">
              <div className="space-y-3">
                <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  Let’s collaborate
                </p>
                <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                  Ready for your next product milestone
                </h3>
                <p className="max-w-xl text-sm text-gray-300">
                  Whether you need to ship an MVP, scale an existing platform,
                  or refine the experience, I help teams move fast without
                  trading off quality.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-sm shadow-black/20 backdrop-blur"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-200">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-xs uppercase tracking-wide text-gray-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#Contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform duration-200 hover:scale-105"
                >
                  Start a project
                  <Icon
                    name="ArrowUp"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href="/Hussein-CV.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition-colors duration-200 hover:border-cyan-400/70 hover:text-white"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-asphalt/35  p-8 shadow-lg shadow-black/25 backdrop-blur">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">
                Currently partnering with teams across Europe and MENA
              </p>
              <p className="text-sm text-gray-300">
                Available for remote-first engagements, impactful short-term
                missions, and long-term collaborations.
              </p>
            </div>
            <div className="space-y-2 text-xs uppercase tracking-wide text-gray-400">
              <p>Availability: Q4 2025</p>
              <p>Timezone overlap: CET · EET · GMT+3</p>
              <p>Languages: English · Arabic</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {navigationColumns.map((column) => (
            <FooterColumn
              key={column.id}
              column={column}
              rows={rowsForColumn(column)}
            />
          ))}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/20 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Stay in touch
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Follow along for build notes, architecture breakdowns, and product
              drops.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((link) => {
                const IconComponent =
                  socialIconMap[link.title] ?? "ArrowUpRight";
                return (
                  <a
                    key={link.id}
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.title}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-400/60 hover:text-white"
                  >
                    <Icon name={IconComponent} className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Hussein Nasrallah. All rights reserved.
          </p>
          <a
            href="#Home"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 transition-colors duration-200 hover:text-white"
          >
            Back to top
            <Icon name="ArrowUpRight" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
