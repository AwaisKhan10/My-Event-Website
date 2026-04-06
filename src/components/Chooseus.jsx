import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

function Chooseus() {
  return (
    <>
      <section className="scroll-mt-24 bg-black py-0 text-white">
        <SectionDivider />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:pb-24 md:pt-12">
          <ScrollReveal className="text-center">
            <div className="text-sm font-semibold tracking-wide text-white/70">
              Why choose us
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Premium features for everyone
            </h2>
            <p className="mt-2 text-white/65">
              Experience the best booking flow with enterprise-grade reliability.
            </p>
          </ScrollReveal>

          <div className="mt-10 h-px w-full bg-white/10" />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Easy booking",
                desc: ["Book tickets in seconds", "with a streamlined checkout"],
              },
              {
                title: "Secure payments",
                desc: ["Transactions protected with", "enterprise-grade security"],
              },
              {
                title: "Instant confirmation",
                desc: ["Get tickets instantly", "via email and mobile"],
              },
              {
                title: "Verified events",
                desc: ["Every event is vetted", "for quality and authenticity"],
              },
            ].map((f, idx) => (
              <ScrollReveal key={f.title} delayMs={idx * 80}>
                <div className="bme-card-lift rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm">
                  <div className="text-lg font-semibold text-white">
                    {f.title}
                  </div>
                  <div className="mt-2 space-y-1 text-sm text-white/65">
                    {f.desc.map((d) => (
                      <div key={d}>{d}</div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Chooseus;
