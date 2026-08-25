/** Reserves vertical space while a lazily loaded section resolves. */
const SectionFallback = () => (
  <div className="min-h-[60vh]" aria-hidden="true" />
);

export default SectionFallback;
